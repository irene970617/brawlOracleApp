# install note:
# run -> source env/bin/activate
# run -> python3 -m pip install [package]

# run backend:
# run -> . venv/bin/activate
# run -> npm run start-backend
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import brawlstats
import pickle
import json
import joblib
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from os import environ 
from flask_cors import CORS, cross_origin

TOKEN = environ.get('TOKEN_VPN')

client= brawlstats.Client(TOKEN)

with open('./data/brawlerInfo.json') as json_file:
    brawler_info = json.load(json_file)


app = Flask(__name__)
# CORS(app, origins=['http://localhost:3000'], support_credentials=True)

cors = CORS(app, resource={
    r"/*":{
        "origins": "*"
    }
})

@app.route('/', methods =['POST'])
# @cross_origin()
def home():
    
    tag = request.get_json()
    tag = str(tag)
    
    def retreive_player_data(tag):
    
        ### Get player data
        player = client.get_player(tag)
        battles = client.get_battle_logs(tag)

        player_dict = {}
        player_brawlers_lst = [player.brawlers[i]['name'] for i in range(len(player.brawlers))]
        player_all_info = []
        modes = {"duoShowdown", "gemGrab", "hotZone", "knockout", "brawlBall","basketBrawl","soloShowdown", "heist", "bounty"}
        
        for mode in modes:
            for i in range(len(player_brawlers_lst)):
                dic = {}
                dic['tag'] = player['tag'][1:]
                dic['mode'] = mode
                dic['id'] = player['brawlers'][i]['id']
                dic['name'] = player['brawlers'][i]['name']
                dic['power'] = player['brawlers'][i]['power']
                dic['trophies'] = player['brawlers'][i]['trophies']
                dic['rank'] = player['brawlers'][i]['rank']
                dic['highestTrophies'] = player.highestTrophies
                dic['gears'] = len(player['brawlers'][i]['gears'])
                dic['starPowers'] = len(player['brawlers'][i]['starPowers'])
                dic['gadgets'] = len(player['brawlers'][i]['gadgets'])
                dic['expLevel'] = player['expLevel']
                dic['expPoints'] = player['expPoints']
                dic['victory3vs3'] = player['3vs3Victories']
                dic['soloVictories'] = player['soloVictories']
                dic['duoVictories'] = player['duoVictories']
                player_all_info.append(dic)
                
            for brawler in brawler_info.keys():
                if brawler not in player_brawlers_lst:
                    dic = {}
                    dic_keys = ['tag','mode','id','name','power','trophies','rank','highestTrophies','gears','starPowers',
                            'gadgets','expLevel','expPoints','victory3vs3','soloVictories','duoVictories']
                    for key in dic_keys:
                        if key == 'mode':
                            dic[key] = mode
                        elif key == 'name':
                            dic[key] = brawler
                        elif key == 'power':
                            dic[key] = 1
                        elif key == 'trophies':
                            dic[key] = 0
                        elif key == 'highestTrophies':
                            dic[key] = player.highestTrophies
                        else:
                            dic[key] = float(np.nan)
                    player_all_info.append(dic)
                    
            df = pd.DataFrame(player_all_info)
            df = df.drop_duplicates()
            df = df[df['power'] != -1]

        ### Joining Brawler Info
        def get_brawler_health(row):
            name = row['name']
            power = str(row['power'])
            return float(brawler_info[name]['Health'][power])

        def get_brawler_attack(row):
            name = row['name']
            power = str(row['power'])
            return float(brawler_info[name]['Attack'][power])
        
        info_lst = ['Rarity', 'Class', 'MovementSpeed', 'AttackRange', 'Reload', 'AttackSuperCharge', 'AttackSpeed', 'AttackWidth','SuperRange','SuperSuperCharge','SuperSpeed']
        for info in info_lst:
            if info in info_lst[2:]:
                    df[f'{info}'] = df.apply(lambda x: float(brawler_info[x['name']][f'{info}']), axis =1)           
            else:
                df[f'{info}'] = df.apply(lambda x: brawler_info[x['name']][f'{info}'], axis =1)
        df['Health'] = df.apply(get_brawler_health, axis = 1)
        df['Attack'] = df.apply(get_brawler_attack, axis = 1)
    
        return df, player_brawlers_lst, player
    
    def run_prediction(player_tag, trophies = 'all'):
        player_data_df, player_brawlers_lst, player = retreive_player_data(player_tag)
        ### Retrieve data and transform inputs
        # player_data_df = retreive_player_data(player_tag)[0]
        if trophies == '0-200':
            player_data_df = player_data_df[player_data_df['trophies'] < 200]
        elif trophies == '200-400':
            player_data_df = player_data_df[(player_data_df['trophies'] >= 200) & (player_data_df['trophies'] <= 400)]
        elif trophies == '400+':
            player_data_df = player_data_df[player_data_df['trophies'] > 200]
        X = player_data_df.drop(columns = ['tag','id','name'])
        pipeline = joblib.load(f'models/transform_pipeline({trophies}).joblib') 
        X_input = pipeline.transform(X)
        
        ### Loading our best model & Perform Prediction
        best_model = pickle.load(open(f'models/best_model({trophies}).sav', 'rb'))
        y_preds = best_model.predict(X_input)
        probas = best_model.predict_proba(X_input)
        df_prediction_results = pd.concat([player_data_df[['mode','name']].reset_index().drop(columns = 'index'),pd.DataFrame(probas)],axis=1)
        df_prediction_results['pred'] = y_preds
        results = df_prediction_results
        results = results.sort_values(by = 1, ascending = False)
        results = results[['mode','name',1,'pred']].rename(columns = {'name':'brawler',1:'prob_winning','pred':'pred_result'})
        
        ### Remove brawlers that are not owned by player
        # player_brawlers_lst = retreive_player_data(player_tag)[1]
        def is_players_brawler(name):
            if name in player_brawlers_lst: return True
            else: return False
        results['is_players_brawler'] = results['brawler'].apply(is_players_brawler)
        results = results[results['is_players_brawler'] == True].drop(columns = ['is_players_brawler'])
        results = results[['brawler','mode','prob_winning','pred_result']].sort_values(by = ['mode','prob_winning'], ascending = False)
        
        ### Join brawler stats
        brawler_stats = player_data_df[player_data_df['mode']=='gemGrab'][['name','trophies','power']].dropna(axis = 0).set_index('name').to_dict('index')
        results['trophies'] = results['brawler'].apply(lambda k: brawler_stats[k]['trophies'])
        results['power'] = results['brawler'].apply(lambda k: brawler_stats[k]['power'])
        def remove_space(name):
            if ' ' in name:
                return ''.join(name.split(' '))
            else:
                return name
        results['brawler'] = results['brawler'].apply(remove_space)
    
        return results.to_dict('records'), player
    
    result, user = run_prediction(tag)
    print(user['name'])
    response_body = {
        "predict": result ,
        "username" : user['name']
    }

    return response_body



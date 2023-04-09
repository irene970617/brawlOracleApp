import React from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Nav';
import ListItems from './component/ListItems.js'
import { useSearchParams, createSearchParams, useNavigate } from "react-router-dom"

const Detail = () => {


    // get mode from the URL
    const [getMode] = useSearchParams()
    const mode = getMode.get("mode")

    // get data from localStorage 
    const data = JSON.parse(localStorage.getItem('ParsedData'));
    const data_mode = data[mode]

    // check the mode if it is showdowns -> set the showdown to true
    // if the showdown is true -> show the showdown buttons which user can select duo or solo showdowns
    let showdown = false
    if (mode === "soloShowdown" || mode === "duoShowdown") {
        showdown = true
    }

    // click solo/duo showdown it will direct to the correct mode and result
    const navigate = useNavigate();
    const passvalue = (m) => {
        navigate({
            pathname: "/detail",
            search: createSearchParams({
                mode: m
            }).toString()
        });
    };

    const clickDuo = async (e) => {
        passvalue("duoShowdown")
    };

    const clickSolo = async (e) => {
        passvalue("soloShowdown")
    };

    return (
        <div className="container">
            <NavbarComponent />

            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>

                    <div class="card mb-3 mx-auto mt-3 " style={{ width: '75vh', backgroundColor: '#e4f1fe' }}>
                        <div className='p-3'>
                            <img class="card-img-top img-fluid img-thumbnail rounded-start" src={`img/mode/${mode}.png`} alt={`${mode} mode`} />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ fontSize: '4vh' }}>Details from Prediction</h5>
                            <p class="card-text px-5 text-center" style={{ fontSize: '2vh' }}>
                                The Brawl's rank with win rate!
                            </p>
                            {
                                showdown && <div class="text-center">
                                    <button class="btn btn-outline-dark border border-4 border border-dark m-3" onClick={clickSolo}>SoloShowdown</button>
                                    <button class="btn btn-outline-dark border border-4 border border-dark m-3" onClick={clickDuo}>DuoShowdown</button>
                                </div>
                            }


                            <div className='table-responsive' style={{ maxHeight: '60vh' }}>

                                <table class="table" >
                                    <thead class="table-dark" style={{ fontSize: '2vh' }}>
                                        <tr>
                                            <th scope="col" className='text-center'>#</th>
                                            <th scope="col">Brawler</th>
                                            <th scope='col'>Power Level</th>
                                            <th scope='col'># Trophies</th>
                                            <th scope="col">Win Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-dark">
                                        {data_mode.map((item, index) =>
                                            <ListItems
                                                index={index}
                                                brawler={item.brawler}
                                                power={item.power}
                                                trophies={item.trophies}
                                                winrate={item.prob_winning}
                                            />
                                        )}

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />

        </div>
    );
};

export default Detail;
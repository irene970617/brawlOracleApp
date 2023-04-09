import React from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Nav';
import ListBestMatch from './components/ListBestMatch';
import data from './brawlerBestCombo.json'

const Statistics = () => {
    
    return (
        <div className="container">
            <NavbarComponent />
            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>
                    <div class="card mb-3 mx-auto mt-3 pb-3" style={{ width: '100vh', backgroundColor: '#e4f1fe' }}>

                        <img class="card-img-top img-fluid img-thumbnail rounded-start" src="img/wallpaper_large.jpg" alt="wallpaper" />
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{ fontSize: '4vh' }}>Statistics</h5>
                            <p class="card-text px-5 text-center" style={{ fontSize: '2vh' }}>
                                Best Match for Each Brawlers!
                            </p>
                            <div className='table-responsive' style={{ maxHeight: '80vh' }}>

                                <table class="table" >
                                    <thead class="table-dark" style={{ fontSize: '2.2vh' }}>
                                        <tr>
                                            <th scope="col" className='text-center'>#</th>
                                            <th scope="col">Brawler</th>
                                            <th scope='col' >Best Match</th>

                                            
                                        </tr>
                                    </thead>
                                    <tbody class="table-dark">
                                        {data.map((item, index) =>
                                            <ListBestMatch
                                                brawler={item.brawlerName}
                                                rank1={item.rank1}
                                                rank2={item.rank2}
                                                rank3={item.rank3}
                                                rank4={item.rank4}
                                                rank5={item.rank5}
                                                rank1Score={item.rank1Score}
                                                rank2Score={item.rank2Score} 
                                                rank3Score={item.rank3Score}
                                                rank4Score={item.rank4Score}
                                                rank5Score={item.rank5Score}
                                                index = {index}
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

export default Statistics;
import React from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Nav';
import './index.module.css'

const About = () => {


    return (
        <div className="container">
            <NavbarComponent />
            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>

                    <div class="card mb-3 mx-auto mt-3 pb-3" style={{ width: '100vh', backgroundColor: '#e4f1fe' }}>

                        <img class="card-img-top img-fluid img-thumbnail rounded-start" src="img/brawlstarhome.jpg" alt="About brawlstar" />
                        <div class="card-body m-3">
                            <h5 class="card-title text-center" style={{ fontSize: '4vh' }}>About Us</h5>
                            <p class="card-text px-5" style={{ fontSize: '2vh' }}>
                                Welcome to our Brawl Stars gaming analysis website! We are a group of three passionate students from the University of Michigan Information School who share a common interest in Brawl Stars, a popular mobile multiplayer game.
                            </p>
                            <p class="card-text px-5" style={{ fontSize: '2vh' }}>
                                As avid players ourselves, we understand the challenges that come with mastering the game and achieving a high win rate. That's why we decided to create this website - to provide a valuable resource for fellow Brawl Stars enthusiasts looking to improve their gameplay and achieve success in the game.
                            </p>
                            <p class="card-text px-5" style={{ fontSize: '2vh' }}>
                                Our website offers a comprehensive analysis of the game's various brawlers, including their overall win rate and best-match brawlers. With this information, players can gain a deeper understanding of each brawler's strengths and weaknesses, as well as their most effective strategies for winning matches.
                            </p>
                            <p class="card-text px-5" style={{ fontSize: '2vh' }}>
                                Whether you're a seasoned player or just starting out, our website is the perfect place to hone your skills and improve your win rate. We hope you find our analysis and insights helpful and informative, and we look forward to being a valuable resource for the Brawl Stars community.

                            </p>
                        </div>
                    </div>

                    {/* <div className="card mb-3 mx-auto" style={{ width: '100vh', backgroundColor: '#e4f1fe' }}>
                        <div className="row ">
                            <div className="col-md-4">
                                <img src='img/Edgar.jpg' class="img-fluid img-thumbnail rounded-start" alt="Edgar" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body py-5">
                                    <h5 className="card-title" style={{ fontSize: '3vh' }}>Jerry Lu</h5>
                                    <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small class="text-muted">2023/03/06</small></p>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div class="card mb-3 mx-auto about-card" style={{ width: '100vh', backgroundColor: '#e4f1fe' }}>
                        <div className="row ">
                            <div className="col-md-4">
                                <img src='img/Mandy.jpg' class="img-fluid img-thumbnail rounded-start " alt="Mandy" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body py-5">
                                    <h5 className="card-title" style={{ fontSize: '3vh' }}>Irene Yang</h5>
                                    <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small class="text-muted">2023/03/06</small></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="card mb-3 mx-auto about-card" style={{ width: '100vh', backgroundColor: '#e4f1fe' }} >
                        <div className="row ">
                            <div className="col-md-4">
                                <img src='img/Primo.jpg' class="img-fluid img-thumbnail rounded-start" alt="Primo" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body py-5">
                                    <h5 className="card-title" style={{ fontSize: '3vh' }}>Michelle Cheng</h5>
                                    <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small class="text-muted">2023/03/06</small></p>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>






            <FooterComponent />

        </div>
    );
};

export default About;
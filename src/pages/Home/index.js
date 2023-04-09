import React from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Nav';
import { useState } from "react";

import { createSearchParams, useNavigate } from "react-router-dom"


const Home = () => {
    // if the user change the value in the field it will set new value in tag
    const [tag, setTag] = useState("")

    const navigate = useNavigate();
    const handleLinkClick = async (e) => {
        e.preventDefault();
        // user enters the tag and click submit -> it will send to the backend with POST method
        // it will return data "await response.json();"
        const response = await fetch('/', {
            method: 'POST',
            mode: 'cors',
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                // 'Access-Control-Allow-Credentials': true,
                // 'Access-Control-Allow-Headers': ['Origin'],
                // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/predict',
            },
            body: JSON.stringify(tag)
        });

        const data = await response.json();

        // storage the return values into the localStorage so that every page can access the data
        localStorage.setItem('Prediction', JSON.stringify(data['predict']))
        localStorage.setItem('Username', JSON.stringify(data['username']))
        localStorage.setItem('Tag', JSON.stringify(tag))

        // redirect to prediction page with the usertag showing on the URL
        const passvalue = () => {
            navigate({
                pathname: "/prediction",
                search: createSearchParams({
                    tag: tag
                }).toString()
            });
        };
        passvalue()

    };


    return (
        <div className="container">
            <NavbarComponent />
            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>

                    <div class="card mb-3 mx-auto mt-3 " style={{ width: '50vh', backgroundColor: '#e4f1fe' }}>

                        <img class="card-img-top img-fluid img-thumbnail rounded-start" src="img/wallpaper.jpg" alt="wallpaper" />

                    </div>
                    <div className='text-center my-3'>
                        <h1 className='text-light' >Please enter a user's Tag</h1>
                        <p className='text-light'>It can be found in the user profile. (ex: #G08UR9PPJ)</p>
                    </div>

                    <form class="input-group mx-auto" style={{ width: '50vh' }} method='POST' action='/'>

                        <div class="input-group-prepend" >
                            <div class="input-group-text" style={{ backgroundColor: "black", color: "white" }}>#</div>
                        </div>
                        <input id="tag" name='tag' type="text" class="form-control" placeholder="Tag(9 digits)" aria-label="tag" aria-describedby="button-addon2"
                            onChange={event => setTag(event.target.value)} />

                        <a href='/prediction' class="btn btn-outline-light" type="button" id="button-addon2" onClick={handleLinkClick} >Submit</a>
                    </form>

                </div>
            </div>


            <FooterComponent />
        </div>
    );
};

export default Home;
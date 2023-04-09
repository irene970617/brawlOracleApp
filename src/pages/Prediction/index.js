import React from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Nav';
import ListBrawlers from './components/ListBrawlers.js'


const Prediction = () => {

    // Get username and prediction from localStorage
    // These variables are saved in Home page
    const username = JSON.parse(localStorage.getItem('Username'));
    const Prediction = JSON.parse(localStorage.getItem('Prediction'));

    // 1. Parsing tha data to the way that is clearer and more accessible * Combine the soloShowdowwn and soloShowdown into showdown
    // Save the parsed data into localStorage so that it can be used in detail page
    // 2. Get the top five from each mode and save it to the topFive object
    
    let parsedData = { "showdown": [], "duoShowdown": [], "gemGrab": [], "hotZone": [], "knockout": [], "brawlBall": [], "basketBrawl": [], "soloShowdown": [], "heist": [], "bounty": [] }
    let topFive = []

    for (let [key, value] of Object.entries(parsedData)) {
        // ParsedData
        Prediction.forEach(element => {
            if (element['mode'] === key) {
                parsedData[key].push(element)
            }
            if (element['mode'] === "soloShowdown" || element['mode'] === "duoShowdown") {
                parsedData['showdown'].push(element)
            }

        });
        
        //TopFive
        let tempObject = {}
        let count = 1
        if (key === "duoShowdown" || key === "soloShowdown") {
            continue;
        }

        value.forEach(element => {
            if (count > 5) { return; }
            tempObject['mode'] = element.mode
            tempObject[`brawler${count}`] = element.brawler
            count += 1
        })
        topFive.push(tempObject)

    }
    localStorage.setItem('ParsedData', JSON.stringify(parsedData))


    return (
        <div className="container">
            <NavbarComponent />
            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>
                    {/* <h1><p>{tag}</p></h1> */}

                    <div>
                        <h1 className='text-light text-center my-5'>Prediction for {username}!</h1>
                    </div>
                    <div style={{ border: 'white solid 0.5vh' }}>

                        <div className='row px-5' >

                            {topFive.map((item) =>
                                <ListBrawlers
                                    mode={item.mode}
                                    brawler1={item.brawler1}
                                    brawler2={item.brawler2}
                                    brawler3={item.brawler3}
                                    brawler4={item.brawler4}
                                    brawler5={item.brawler5}
                                />
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default Prediction;

// Get the top five of each modes
   
    // for (const [key, value] of Object.entries(data)) {
    //     let tempObject = {}
    //     let count = 1
    //     if (key == "duoShowdown" || key == "soloShowdown") {
    //         continue;

    //     }

    //     value.forEach(element => {
    //         if (count > 5) { return; }
    //         tempObject['mode'] = element.mode
    //         tempObject[`brawler${count}`] = element.brawler
    //         count += 1
    //     })
    //     topFive.push(tempObject)
    // }

    // for (let mode of Object.keys(data)) {
    //     Prediction.forEach(element => {
    //         if (element['mode'] == mode) {
    //             data[mode].push(element)
    //         }
    //         if (element['mode'] == "soloShowdown" || element['mode'] == "duoShowdown") {
    //             data['showdown'].push(element)
    //         }

    //     });
    // }
    // localStorage.setItem('ParsedData', JSON.stringify(data))

    // // Get the top five of each modes
    // let topFive = []
    // for (const [key, value] of Object.entries(data)) {
    //     let tempObject = {}
    //     let count = 1
    //     if (key == "duoShowdown" || key == "soloShowdown") {
    //         continue;

    //     }

    //     value.forEach(element => {
    //         if (count > 5) { return; }
    //         tempObject['mode'] = element.mode
    //         tempObject[`brawler${count}`] = element.brawler
    //         count += 1
    //     })
    //     topFive.push(tempObject)
    // }
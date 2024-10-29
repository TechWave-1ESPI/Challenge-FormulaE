import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { DashboardStyle } from '../css/DashboardStyle';

import { RxExit } from "react-icons/rx";
import { MdSensors } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { BsClipboard2Data } from "react-icons/bs";

import CarDashboard from '../assets/car_dashboard.png'

const Dashboard = () => {

    const [leftObstacle, setLeftObstacle] = useState(null);
    const [rightObstacle, setRightObstacle] = useState(null);
    const [frontObstacle, setFrontObstacle] = useState(null);
    const rearObstacle = 28;
    
    const getValues = async () => {
        try {
            const responseLeft = await axios.get('http://54.235.126.90:1026/v2/entities/urn:ngsi-ld:Obstacle:001/attrs/left-distance', {
                headers: {
                    'fiware-service': 'smart',
                    'fiware-servicepath': '/',
                    'accept': 'application/json'
                }
            });
            
            setLeftObstacle(responseLeft.data.value);
            
            const responseRight = await axios.get('http://54.235.126.90:1026/v2/entities/urn:ngsi-ld:Obstacle:001/attrs/right-distance', {
                headers: {
                    'fiware-service': 'smart',
                    'fiware-servicepath': '/',
                    'accept': 'application/json'
                }
            });
            
            setRightObstacle(responseRight.data.value);
            
            const responseFront = await axios.get('http://54.235.126.90:1026/v2/entities/urn:ngsi-ld:Obstacle:001/attrs/front-distance', {
                headers: {
                    'fiware-service': 'smart',
                    'fiware-servicepath': '/',
                    'accept': 'application/json'
                }
            });
            
            setFrontObstacle(responseFront.data.value);
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
        }
    };

    useEffect(() => {
        getValues();
        setInterval(getValues, 2000); 
    }, []);

  return (
    <DashboardStyle>
        <section className='dashboard'>
            <aside>
                <div className='welcome-text'>
                    <p>Hello,</p>
                    <h2>Mahindra Team</h2>
                </div>

                <div className='nav'>
                    <button className='option-nav'>
                        <h2><IoPeopleSharp /></h2>
                        <h1>Drivers</h1>
                    </button>
                    <button className='option-nav'>
                        <h2 className='icon-sensor'><MdSensors /></h2>
                        <h1>Cars</h1>
                    </button>
                    <button className='option-nav'>
                        <h2><BsClipboard2Data /></h2>
                        <h1>Data</h1>
                    </button>
                </div>

                <button className='option-nav logout'>
                    <h2><RxExit /></h2>
                    <h1>Logout</h1>
                </button>
            </aside>

            <div className='cars-icons'>
                {/* <h1>Aqui vai ficar o carro e ícones</h1> */}
                <div className='icon'></div>
                <div className='middle'>
                    <div className="icon"></div>
                    <img src={CarDashboard} alt="Car Mahindra" id='car-dashboard'/>
                    <div className="icon"></div>
                </div>
                <div className="icon"></div>
            </div>

            <div className='data'>
                <div className='car-data'>
                    <div className='sensor-values'>
                        <h1>Speed</h1>
                        <h2>297 <span>km/h</span></h2>
                    </div>
                    <div className='sensor-values'>
                        <h1>Battery</h1>
                        <h2>75 <span>%</span></h2>
                    </div>
                </div>

                <div className='title'>
                    <h1>Car Distances</h1>
                </div>

                <div className='obstacles-data'>
                    <div className='sensor-values'>
                        <h1>Left</h1>
                        {leftObstacle === null ? (<p>Loading...</p>) : (<h2 className={parseInt(leftObstacle) <= 50 ? 'alert' : ''}>{parseInt(leftObstacle)} <span>cm</span></h2>)}
                    </div>
                    
                    <div className='sensor-values right-side'>
                        <div className='align'>
                            <h1>Right</h1>
                            {rightObstacle === null ? (<p>Loading...</p>) : (<h2 className={parseInt(rightObstacle) <= 50 ? 'alert' : ''}>{parseInt(rightObstacle)} <span>cm</span></h2>)}
                        </div>
                    </div>

                    <div className='sensor-values last-row'>
                        <h1>Front</h1>
                        {frontObstacle === null ? (<p>Loading...</p>) : (<h2 className={parseInt(frontObstacle) <= 50 ? 'alert' : ''}>{parseInt(frontObstacle)} <span>cm</span></h2>)}
                    </div>
                    
                    <div className='sensor-values right-side last-row'>
                        <div className='align'>
                            <h1>Rear</h1>
                            <h2 className={rearObstacle <= 50 ? 'alert' : ''}>{rearObstacle} <span>cm</span></h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </DashboardStyle>
  )
}

export default Dashboard
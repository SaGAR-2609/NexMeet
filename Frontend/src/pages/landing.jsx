import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>NexMeet</h2>
                </div>
                <div className='navlist'>
                    <h4 onClick={() => {
                        router("/aljk237")
                    }}>Join as Guest</h4>
                    <h4 onClick={() => {
                        router("/auth")

                    }}>Register</h4>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <h4>Login</h4>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with Strangers like in real world</h1>
                    <br></br>
                    <p>Meet New People over a Video-Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>
        </div>
    )
}
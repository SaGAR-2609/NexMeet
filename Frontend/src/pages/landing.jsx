import React from "react";
import "../App.css"

export default function LandingPage(){
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Meetify</h2>
                </div>
                
                <div className="navlist">
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className="text">
                    <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved ones</h1>
                    <p>Cover any distance with MEETIFY</p>
                    <div className="starting"><a href="/auth" class="btn">Get Started</a></div>
                </div>
                <div className="image">
                    <img src="/mobile.png" alt="Image" />
                </div>
            </div>
        </div>
    )
}
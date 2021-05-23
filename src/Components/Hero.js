import React from 'react';
import '../Stylesheets/Hero.css';
import ani from '../Assets/ani.jpg';

class Hero extends React.Component{
    render(){
        return(
            <div className="hero">
                <div>
                    <div className="image" data-img-url={ani}></div>
                </div>
                <div className="intro">
                    <h1 className="name">Anirudh Mahajan</h1>
                    <h3 className="headline">A Certified Full-Stack developer based in India.<br/>With a passion to create amazing Web Apps and Mobile Apps!</h3>
                </div>
            </div>
        )
    }
}

export default Hero;
import React from 'react';
import '../Stylesheets/Hero.css';
import "../Stylesheets/Header.css";
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
                    <h3 className="headline">I craft amazing mobile and web apps.<br/>With a passion to serve great user experiences!</h3>
                    <a href="/Resume.pdf" className="downloadLink" download>Download My Resume!</a>
                </div>
            </div>
        )
    }
}

export default Hero;
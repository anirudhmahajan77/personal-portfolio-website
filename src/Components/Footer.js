import React from 'react';
import Social from './Social';
import "../Stylesheets/Footer.css"

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Social />
                <p className="copy">&copy; By Anirudh Mahajan 2021.</p>
            </div>
        )
    }
}

export default Footer;
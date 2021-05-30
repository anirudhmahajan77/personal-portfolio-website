import React from 'react';
import Social from './Social';
import "../Stylesheets/Footer.css"

class Footer extends React.Component{

    render(){
        return(
            <div className="footer">
                <Social />
                <p className="copy">&copy; By Anirudh Mahajan {new Date().getFullYear()}.</p>
            </div>
        )
    }
}

export default Footer;
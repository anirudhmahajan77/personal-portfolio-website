import React from 'react';
import "../Stylesheets/Header.css"
import OMenu from './OMenu';

class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <div>
                    <p className="logo">Anirudh</p>
                </div>
                <OMenu />
            </div>
        )
    }
}

export default Header;
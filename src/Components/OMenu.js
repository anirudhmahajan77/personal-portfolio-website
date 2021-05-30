import React from 'react';
import "../Stylesheets/Header.css";
import '../Stylesheets/Social.css';
import Social from './Social';
class OMenu extends React.Component {
    render() {
        return (
            <div>
                <div className="menu">
                    <div className="social">
                        <Social />
                    </div>
                </div>
            </div>
        )
    }
}

export default OMenu;
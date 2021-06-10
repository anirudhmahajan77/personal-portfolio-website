import React from 'react';
import "../Stylesheets/Header.css"
import OMenu from './OMenu';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import Tooltip from '@material-ui/core/Tooltip';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            theme: false,
        }
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: !prevState.theme 
            }))
            var app = document.getElementById("root");
            if(this.state.theme === false){
                app.classList.add("dark");
                app.classList.remove("light")
            } else {
                app.classList.add("light");
                app.classList.remove("dark")
            }
            
    }

    render() {
        return (
            <div className="header">
                <div>
                    <p className="logo">Anirudh</p>
                </div>
                <div className="themeButton">
                    <OMenu />
                    <div onClick={this.toggleTheme} className="themeToggle">
                        <Tooltip title="Change Theme" >
                            {this.state.theme ?
                                <Brightness7RoundedIcon /> :
                                <NightsStayRoundedIcon />}
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
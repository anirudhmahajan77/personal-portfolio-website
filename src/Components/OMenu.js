import React from 'react';
import "../Stylesheets/Header.css"
import '../Stylesheets/Social.css';
import Social from './Social';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
//import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

class OMenu extends React.Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null,
            isMenuVisible: false,
            open: false
        }
    }

    handleClose = () => {
        this.setState({
            anchorEl: null,
            open: false,
            isMenuVisible: false,
        })
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            open: true,
            isMenuVisible: false,
        })
    }

    handleOpen = () => {
        this.setState({
            open: true,
            isMenuVisible: false,
        })
    }


    render() {
        return (
            <div>
                { /*this.state.isMenuVisible?
                    <p className="burger" onClick={this.handleOpen}><MenuRoundedIcon className="burgerIcon" /></p>:<p className="cross" onClick={this.handleClose}><ClearRoundedIcon className="crossIcon" /></p>*/}
                    <p className="burger" onClick={this.handleOpen}><MenuRoundedIcon className="burgerIcon" /></p>
                <div className="menu">
                    <div className="social">
                        <Social />
                        <a href="/Resume.pdf" className="downloadLink" download>Download Resume!</a>
                    </div>
                </div>
                <div>
                    <Menu
                        id="fade-menu"
                        className="materialMenu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={this.handleClose}>
                            <a href="https://www.facebook.com/anirudh77mahajan/" target="_blank" className="link menuItem" rel="noreferrer">
                                <FacebookIcon className="icon" /> <p className="text">Facebook</p>
                            </a>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <a href="https://www.instagram.com/anirudhmahajan77/" target="_blank" className="link menuItem" rel="noreferrer">
                                <InstagramIcon className="icon" /> <p className="text">Instagram</p>
                            </a>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <a href="https://github.com/anirudhmahajan77/" target="_blank" className="link menuItem" rel="noreferrer">
                                <GitHubIcon className="icon" /> <p className="text">Github</p>
                            </a>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <a href="https://www.linkedin.com/in/anirudhmahajan77/?_l=en_US" target="_blank" className="link menuItem" rel="noreferrer">
                                <LinkedInIcon className="icon" /> <p className="text">LinkedIn</p>
                            </a>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <a href="/Resume.pdf" className="downloadLink" download>Download Resume!</a>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default OMenu;
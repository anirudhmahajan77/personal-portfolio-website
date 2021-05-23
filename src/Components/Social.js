import React from 'react';
import '../Stylesheets/Social.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Social extends React.Component{

    render(){
        return(
            <div className="container">
                <a href="https://www.facebook.com/anirudh77mahajan/" target="_blank" className="link" rel="noreferrer"><FacebookIcon className="icon" /></a>
                <a href="https://www.instagram.com/anirudhmahajan77/" target="_blank" className="link" rel="noreferrer"><InstagramIcon className="icon" /></a>
                <a href="https://github.com/anirudhmahajan77/" target="_blank" className="link" rel="noreferrer"><GitHubIcon className="icon" /></a>
                <a href="https://www.linkedin.com/in/anirudhmahajan77/?_l=en_US" target="_blank" className="link" rel="noreferrer"><LinkedInIcon className="icon" /></a>
            </div>
        )
    }

}

export default Social;
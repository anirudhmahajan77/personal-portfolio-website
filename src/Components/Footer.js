import React from 'react';
import Social from './Social';
import "../Stylesheets/Footer.css"

class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            year: 2021,
        }
    }

    componentDidMount(){
        let date = new Date();
        let year = date.getFullYear();
        this.setState({
            year: year,
        })
    }

    render(){
        return(
            <div className="footer">
                <Social />
                <p className="copy">&copy; By Anirudh Mahajan {this.state.year}.</p>
            </div>
        )
    }
}

export default Footer;
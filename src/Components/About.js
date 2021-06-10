import React from "react";
import "../Stylesheets/About.css";
import anirudh from "../Assets/anirudhFull.jpg";

class About extends React.Component {
    render() {
        return (
            <div className="aboutHolder">
                <div className="aboutData">
                    <div>
                        <h2 className="aboutHeadline">Fun facts about me</h2>
                    </div>
                    <div>
                        <p className="aboutDescription">I love food and tech. My favorite number is 77. A huge fan of Basketball and I play video games like its my life.
                        And talking about my professional work, I make amazing apps and I can easily adapt to new technologies.
                        I can work with several frameworks in React and Java and I am working to fine tune my skills for a better performance.
                    </p>
                    </div>
                </div>
                <div className="myImage" data-img-url={anirudh}></div>
            </div>
        )
    }
}

export default About;
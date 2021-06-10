import React from 'react';
import "../Stylesheets/Skills.css";
import reactIcon from "../Assets/react.png";
import javaIcon from "../Assets/java.webp";
import javaScriptIcon from "../Assets/javascript.png";
import postgreSQLIcon from "../Assets/postgres.png";
import herokuIcon from "../Assets/heroku.webp";
import springIcon from "../Assets/spring.png";
import cssIcon from "../Assets/css.png";
import springCloudIcon from "../Assets/springcloud.png";
import firebaseIcon from "../Assets/firebase.png";

class Skills extends React.Component {

    constructor() {
        super();
        this.state = {
            skillsOne: [
                {
                    "id": 1,
                    "name": "React Js",
                    "image": reactIcon,
                    "imageAlt": "React Js Skill"
                },
                {
                    "id": 2,
                    "name": "Java",
                    "image": javaIcon,
                    "imageAlt": "Java Skill"
                },
                {
                    "id": 3,
                    "name": "Javascript",
                    "image": javaScriptIcon,
                    "imageAlt": "JavaScript Skill"
                },
                {
                    "id": 4,
                    "name": "CSS",
                    "image": cssIcon,
                    "imageAlt": "CSS Skill"
                },
                {
                    "id": 5,
                    "name": "Firebase",
                    "image": firebaseIcon,
                    "imageAlt": "Firebase Skill"
                }
            ],
            skillsTwo: [
                {
                    "id": 6,
                    "name": "Spring Boot",
                    "image": springIcon,
                    "imageAlt": "Spring Boot Skill"
                },
                {
                    "id": 7,
                    "name": "Spring Cloud",
                    "image": springCloudIcon,
                    "imageAlt": "Spring Skill"
                },
                {
                    "id": 8,
                    "name": "React Native",
                    "image": reactIcon,
                    "imageAlt": "React Native Skill"
                },
                {
                    "id": 9,
                    "name": "SQL",
                    "image": postgreSQLIcon,
                    "imageAlt": "PostgreSQL Skill"
                },
                {
                    "id": 10,
                    "name": "Heroku",
                    "image": herokuIcon,
                    "imageAlt": "Heroku Server Skill"
                }
            ]
        }
    }

    render() {
        return (
            <div className="skillSection">
                <div className="skillTitle">
                    <p>My Skills &amp; Abilities</p>
                </div>
                <div className="skillHolder">
                    <div className="skills">
                    {this.state.skillsOne.map((skill) => {
                        return (<div className="singleSkill" key={skill.id}>
                            <img src={skill.image} alt={skill.imageAlt} height="35px" className="skillImage" />
                            <p className="skillName">{skill.name}</p>
                        </div>)
                    })}
                    </div>
                    <div>
                    {this.state.skillsTwo.map((skill) => {
                        return (<div className="singleSkill" key={skill.id}>
                            <img src={skill.image} alt={skill.imageAlt} height="35px" className="skillImage" />
                            <p className="skillName">{skill.name}</p>
                        </div>)
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
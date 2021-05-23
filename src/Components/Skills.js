import React from 'react';
import "../Stylesheets/Skills.css";
import Rating from '@material-ui/lab/Rating';

class Skills extends React.Component {

    constructor() {
        super();
        this.state = {
            skillsOne: [
                {
                    "id": 1,
                    "name": "React Js",
                    "rating": 4.0
                },
                {
                    "id": 2,
                    "name": "Java",
                    "rating": 4.0
                },
                {
                    "id": 3,
                    "name": "Javascript",
                    "rating": 4.5
                },
                {
                    "id": 4,
                    "name": "CSS",
                    "rating": 3.5
                }
            ],
            skillsTwo: [
                {
                    "id": 5,
                    "name": "Spring Boot",
                    "rating": 3.5
                },
                {
                    "id": 6,
                    "name": "Spring Cloud",
                    "rating": 3.0
                },
                {
                    "id": 7,
                    "name": "React Native",
                    "rating": 3.5
                },
                {
                    "id": 8,
                    "name": "SQL",
                    "rating": 3.0
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
                            <p className="skillName">{skill.name}</p>
                            <Rating name="read-only" precision={0.5} value={skill.rating} readOnly size="medium" />
                        </div>)
                    })}
                    </div>
                    <div>
                    {this.state.skillsTwo.map((skill) => {
                        return (<div className="singleSkill" key={skill.id}>
                            <p className="skillName">{skill.name}</p>
                            <Rating name="read-only" precision={0.5} value={skill.rating} readOnly size="medium" />
                        </div>)
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
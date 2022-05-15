import React, { Component } from 'react';
import "../Stylesheets/Projects.css";
import ProjectCard from './ProjectCard';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectOne: [
                {
                    key: 1,
                    name: "Trello Quora",
                    technology: ["Java", "Spring Boot", "Swagger", "PostgreSQL"],
                    links: [
                        {
                            linkName: "Web Link",
                            linkURL: "https://www.google.com/",
                        },
                        {
                            linkName: "Github",
                            linkURL: "https://www.google.com/",
                        }
                    ],
                    accent: "#f5bf99",
                },
                {
                    key: 2,
                    name: "Ecommerce",
                    technology: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
                    links: [
                        {
                            linkName: "Web Link",
                            linkURL: "https://www.google.com/",
                        },
                        {
                            linkName: "Github Frontend",
                            linkURL: "https://www.google.com/",
                        },
                        {
                            linkName: "Github Backend",
                            linkURL: "https://www.google.com/",
                        }
                    ],
                    accent: "#f5e6db",
                },
                {
                    key: 3,
                    name: "CU Tell",
                    technology: ["React Native", "Firebase", "JavaScript", "Expo"],
                    links: [
                        {
                            linkName: "Github",
                            linkURL: "https://www.google.com/",
                        }
                    ],
                    accent: "#ddebf8",

                },
            ],
            projectTwo: [
                {
                    key: 4,
                    name: "OpenSky",
                    technology: ["React JS", "WeatherAPI", "JavaScript", "Material UI"],
                    links: [
                        {
                            linkName: "Web Link",
                            linkURL: "https://www.google.com/",
                        },
                        {
                            linkName: "Github",
                            linkURL: "https://www.google.com/",
                        }
                    ],
                    accent: "#fffad1",

                },
                {
                    key: 5,
                    name: "StudentSaga",
                    technology: ["Adobe XD"],
                    links: [
                        {
                            linkName: "Prototype",
                            linkURL: "https://www.google.com/",
                        },
                        {
                            linkName: "Wireframes",
                            linkURL: "https://www.google.com/",
                        }
                    ],
                    accent: "#c6b8ff",
                },
                {
                    key: 6, 
                    name: "Chakravyuh",
                    technology: ["React Native", "Crypto JS", "JavaScript", "Expo"],
                    links: [
                        {
                            linkName: "Prototype",
                            linkURL: "https://www.google.com/",
                        },
                        {
                            linkName: "Wireframes",
                            linkURL: "https://www.google.com/",
                        }
                    ],
                    accent: "#e0f0e5",
                }
            ]
        }
    }

    render() {
        return (
            <div className='projectSection'>
                <div className="projectHeadline">My Projects</div>
                <div className="projectHolder">
                    <div className="projectOneHolder">
                        {this.state.projectOne.map((project, index) => {
                            return <ProjectCard key={project.key} project={project} />
                        })}
                    </div>
                    
                    <div className="projectOneHolder">
                        {this.state.projectTwo.map((project, index) => {
                            return <ProjectCard key={project.key} project={project} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
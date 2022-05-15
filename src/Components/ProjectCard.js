import React, { Component } from 'react'
import "../Stylesheets/ProjectCard.css";


export class ProjectCard extends Component {
  render() {
      var style = {
          backgroundColor: this.props.project.accent,
      }
    return (
      <div style = {style} className="projectCardHolder">
          <p className="projectTitle">{this.props.project.name}</p>
          <div className='section'>
              <p className="sectionTitle">Techonologies Used:</p>
              <div>
                    {this.props.project.technology.map((tech, index) => {
                        return <p className='tech'>{tech}</p>
                    })}
              </div>
          </div>
          <div className='section'>
              <p className="sectionTitle">Links</p>
              <div>
                  {this.props.project.links.map((link, index) => {
                      return <a href={link.linkURL} className="webLink" target="_blank" rel="noreferrer">{link.linkName}</a>
                    })}
                
              </div>
          </div>
      </div>
    )
  }
}

export default ProjectCard
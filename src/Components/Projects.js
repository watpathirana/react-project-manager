import React, { Component } from 'react';
import ProjectItems from './ProjectItem';

export default class Projects extends Component {
  render() {
    //console.log(this.props.projects);
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project =>{
        return(
          <ProjectItems key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}
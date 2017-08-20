import React, { Component } from 'react';

export default class ProjectItems extends Component {
  deleteProject(id){
    // console.log(id);
    this.props.onDelete(id);
    
  }
  render() {
    return (
      <li className="Project">
          <strong>{this.props.project.title}</strong> -
           {this.props.project.category} 
           <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}
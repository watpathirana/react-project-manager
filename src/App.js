import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  getProject(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shoping Cart',
        category: 'Web Development'
      },
    ]});
  }

  componentWillMount(){
    this.getProject();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
          
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log('err');
      }
    });
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  handleDeleteProject(id){
    console.log(id);
    let projects = this.state.projects;
    let index = projects.findIndex(project => project.id === id);
    projects.splice(index,1);
    this.setState({pojects:projects})
    // projects.push(project);
    // this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} 
         /> 
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}




 

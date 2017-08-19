import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shoping Cart',
        category: 'Web Development'
      },
    ]});
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

 

import React, { Component } from 'react';

export default class ProjectItems extends Component {
  render() {
    return (
      <li className="Project">
          <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}
import React, { Component } from "react";

class ToDoListItem extends React.Component {
  render() {
    return (
    	<div>
    		<h3>{this.props.todo}</h3>
    	</div>
    );
  }
}

export default ToDoListItem;
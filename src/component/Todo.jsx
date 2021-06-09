import React, { Component } from "react";
import TaskList from './TaskList';

export default class Todo extends Component {
  state = {
    taskList: [],
    currTask:""
  }

  deleteTask= (id) => {
    let filteredTask = this.state.taskList.filter(function (task) {
      return task.id !== id;
    });
    this.setState({
      taskList: filteredTask
    });
  }

  handleCurrTask = (e) => {
    let currValue = e.target.value;
    this.setState({
      currTask: currValue
    });
  }
 
  addTask = () => {
    let currTask = this.state.currTask;
    let tempArr = [...this.state.taskList, {task : currTask, id: this.state.taskList.length}]
    this.setState({
      taskList: tempArr,
      currTask: "",
    })
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input
            type="text"
            value={this.state.currTask}
            onChange={this.handleCurrTask}
          />
          <button onClick={this.addTask}>Submit</button>
          {/*Passing props from parent to children*/}
          <TaskList taskList={this.state.taskList}
          deleteTask={this.deleteTask}/>
        </div>
      </div>
    )
  }
}

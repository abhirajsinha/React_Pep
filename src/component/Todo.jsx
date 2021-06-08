// rcc
import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    taskList: ["Task-1", "Task-2", "Task-3"],
  }
  deleteTask(cTask) {
    let filteredTask = this.state.taskList.filter(function (task) {
      return task !== cTask;
    });
    this.setState({
      taskList: filteredTask,
    });
  }
  render() {
    return (
      <div>
        <div className="inputContainer">
          <input type="text" />
          <button>Submit</button>
        </div>

        <div className="taskList">
          <ul>
            {this.state.taskList.map((task) => {
              return (
                <li className="task">
                  <p>{task}</p>
                  <img
                    style={styles.image}
                    alt="delete"
                    src="https://image.flaticon.com/icons/png/128/1632/1632602.png"
                    onClick={() => {
                      this.deleteTask(task);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
};

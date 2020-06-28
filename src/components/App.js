import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 8
  state = {
    tasks: [
      {
        id: 0,
        text: 'kupić rower',
        date: '2020-12-15',
        important: true,
        active: true,
        finishDate: null
      },
      { id: 1, text: "zrobić siłownię", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom", date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 10 kilogramów", date: '2020-11-20', important: true, active: true, finishDate: null },
      { id: 4, text: "kupić samochód", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "wizyta u dentysty", date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "wizyta u okulisty", date: '2020-11-20', important: true, active: true, finishDate: null },
      { id: 7, text: "kupić telewizor", date: '2020-11-12', important: false, active: true, finishDate: null },

    ]
  }

  changeTaskStatus = (id) => {
    const tasks = Object.assign([], this.state.tasks);
    // const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;

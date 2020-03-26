import React from 'react';
import Bucket from './Bucket.js';
import AddTask from './AddTask.js';

class App extends React.Component {

  state={
    tasks:{},
    taskCounter:0
  };

  addTask=(newTask)=>{
    const tasks = {...this.state.tasks};
    let taskCounter = this.state.taskCounter;
    tasks[taskCounter]=newTask;
    taskCounter++;
    this.setState({
      tasks:tasks,
      taskCounter:taskCounter
    });
  }

  render(){
    return (
    <div className="App">
      Todoist
      <AddTask addTask={this.addTask}/>
      <Bucket tasks={this.state.tasks}/>
    </div>
  );
}
}
export default App;

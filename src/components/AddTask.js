import React from 'react';

class AddTask extends React.Component {

  taskNameInput = React.createRef();
  taskDateInput = React.createRef();
  taskTimeInput = React.createRef();

  handleClick = () =>{
    //console.log(this.myInput.current);
    let task={};
    let taskName = this.taskNameInput.current.value;
    let taskDate = this.taskDateInput.current.value;//=null?"noDate":this.taskDateInput.current.value;
    let taskTime = this.taskTimeInput.current.value;//=null?"noTime":this.taskTimeInput.current.value;

    task.taskName=taskName;
    task.taskDate=taskDate;
    task.taskTime=taskTime;

    this.props.addTask(task);
    this.taskNameInput.current.value=null;
    this.taskDateInput.current.value=null;
    this.taskTimeInput.current.value=null;
  };

  render(){
    return (
    <div>
      <input type="text" ref={this.taskNameInput}></input><button onClick={this.handleClick}>Add Task</button>
      <input type="date" ref={this.taskDateInput}></input>
      <input type="time" ref={this.taskTimeInput}></input>
    </div>
  );
}
}
export default AddTask;

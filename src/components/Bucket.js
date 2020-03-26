import React from 'react';

class Bucket extends React.Component {

  render(){


    return (
    <div>
      <ul>
      <>
      {Object.keys(this.props.tasks).map(key => <p>{this.props.tasks[key].taskName} {this.props.tasks[key].taskDate} {this.props.tasks[key].taskTime}</p>)}
      </>
      </ul>
    </div>
  );
}
}
export default Bucket;

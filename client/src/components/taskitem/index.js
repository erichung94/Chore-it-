import React, { Component } from 'react';

const btnStyle = {
  float: "right",
  marginLeft: "20px"
}

const amountStyle = {
  marginRight: "50px"
}

class TaskItem extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    amount: this.props.amount
  }

  render() {
    return (
      <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.state.name}
        <row>
          <span className="badge badge-primary badge-pill" style={amountStyle}>  ${this.state.amount}  </span>
          <button type="button" {...props} className="btn btn-success" style={btnStyle}>✔</button>
          <button type="button" {...props} className="btn btn-danger" style={btnStyle}>✘</button>
        </row> 
      </li>
      

      </div>
    )
  }
}

export default TaskItem;
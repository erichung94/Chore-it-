import React, { Component } from 'react';

import './style.css';

class Nav extends Component {
  state = {
    activeTab: "tasks"
  }

  checkActiveTab = (tab) => {
    if (tab === this.state.activeTab) {
      return 'active';
    } else {
      return '';
    }
  }

  changeTab = (tab) => {
    this.setState({
      activeTab: tab
    });

    this.props.changeTab(tab);

    return;
  }

  render() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a className={"nav-link " + this.checkActiveTab('tasks')} onClick={()=>this.changeTab('tasks')}>Your Tasks</a>
        </li>
        <li className="nav-item">
          <a className={"nav-link " + this.checkActiveTab('groups')} onClick={()=>this.changeTab('groups')}>Your Groups</a>
        </li>
      </ul>
    )
  }
}

export default Nav;
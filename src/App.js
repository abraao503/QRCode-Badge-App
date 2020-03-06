import React, { Component, useEffect, useState } from 'react';
import Header from './components/header';
import UserForm from './components/userForm';
import Qrcode from './components/qrcode';

import './App.css'
import './Global.css'
import './Sidebar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'HELLO!!!'
  };
  }

  handleCreateImg = (data) =>{
    let userData = "NAME: " + data.name + "\ EMAIL: " + data.email
      + "\ TWITTER ACCOUNT: " + data.twitter_username
      + "\ GITHUB ACCOUNT: " + data.github_username
    ; 
    
    this.setState({data: userData});
    console.log(userData);
  }

  render() {
    return (
      <>
      <Header />
      <div className="App"> 
        <aside>
          <strong>Register</strong>
          <UserForm onSubmit={this.handleCreateImg}/>
        </aside>
        <Qrcode value={this.state.data}/>
      </div>
      </>
    );
  }
}

export default App;

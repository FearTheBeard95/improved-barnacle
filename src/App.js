import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [{ username: 'Amy' }, { username: 'John' }],
      messages: [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' }
      ]
    }
  }
  handleUpdateMessages = (message, sender) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages,{username: sender, text: message}]
    }))
  }
  render() {
    const {users, messages} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user,index) => 
            <ChatWindow 
              sender={user} 
              messages={messages}
              handleUpdateMessages={this.handleUpdateMessages}
              key={index}
            />)}
        </div>
      </div>
    );
  }
}

export default App;

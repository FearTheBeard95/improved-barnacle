import React, { Component } from 'react'
import Chat from './Chat'
import PropTypes from 'prop-types'

class ChatWindow extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
            disableSend: true,
        }
    }

    handleEnteredMessage = event => {
        if(event.target.value){
          this.setState({
            message: event.target.value,
            disableSend: false
          })
        } else {
            this.setState({
                message: '',
                disableSend: true
            })
        }
      }

      handleSendMessage = event => {
          event.preventDefault()
          this.props.handleUpdateMessages(this.state.message, this.props.sender.username)
      }
    render() {
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.sender.username}</div>
                <Chat 
                    messages={this.props.messages} 
                    sender={this.props.sender} 
                    isDisabled={this.state.disableSend}
                    EnterMessage={this.handleEnteredMessage}
                    currentMessage={this.state.currentMessage}
                    sendMessage={this.handleSendMessage}
                    key={this.props.sender.username}
                />
            </div>
        )
    }
}

ChatWindow.protoType = {
    messages: PropTypes.array.isRequired,
    sender: PropTypes.object.isRequired
}

export default ChatWindow 
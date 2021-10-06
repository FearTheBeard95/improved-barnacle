import React from 'react'
import ChatMessages from './ChatMessages'
import PropTypes from 'prop-types'

const Chat = (props) => (
    <div>
        <ul className="message-list">
            {props.messages.map((message, index) => (
                <ChatMessages message={message} key={index} index={index} sender={props.sender}/>
            ))}
            </ul>

            <div>
            <form className="input-group" onSubmit={props.sendMessage}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your message..."
                    value={props.currentMessage}
                    onChange={props.EnterMessage}
                />
                <div className="input-group-append">
                <button className="btn submit-button" disabled={props.isDisabled}>
                    SEND
                </button>
                </div>
            </form>
            </div>
    </div>
)

Chat.protoType = {
    messages: PropTypes.array.isRequired,
    sender: PropTypes.object.isRequired,
    currentMessage: PropTypes.string.isRequired,
    isDisabledL: PropTypes.bool.isRequired,
    EnterMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
}

export default Chat
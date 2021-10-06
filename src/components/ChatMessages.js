import React from 'react'
import PropTypes from 'prop-types'

const ChatMessages = (props) => (
    <li
        key={props.index}
        className={
            props.message.username === props.sender.username ? 'message sender' : 'message recipient'
        }
    >
    <p>{`${props.message.username}: ${props.message.text}`}</p>
    </li>
)

ChatMessages.protoType = {
    message: PropTypes.object.isRequired,
    sender: PropTypes.object.isRequired,
}

export default ChatMessages
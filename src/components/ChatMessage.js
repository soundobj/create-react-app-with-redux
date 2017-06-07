import React, {PropTypes} from 'react';

class ChatMessage extends React.Component {

    render() {
        return (
            <div className="current__chat__message">
                <span className="chat__message__metadata">some  other metadata</span>
                <span className="chat__message__value">{this.props.chatMessage}</span>
            </div>
        );
    }
};

ChatMessage.propTypes = {
    chatMessage: PropTypes.object.isRequired,
};

export default ChatMessage;
import React from 'react';

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.deleteMessage = this.deleteMessage.bind(this);
    }

    deleteMessage() {
        console.error('@ TODO need to delete deleteMessage', null);
    }

    render() {
        return (
            <div className="chat__message">
                <span className="chat__message__you-said">You Said:</span>
                <span className="chat__message__value"></span>
                <button className="chat__message__delete" onClick={this.deleteMessage}>x</button>
            </div>
        );
    }
};

export default Chat;
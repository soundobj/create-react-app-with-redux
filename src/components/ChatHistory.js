import React from 'react';
import Chat from './Chat';

class ChatHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chats: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            chats: nextProps.chats
        });
    }

    render() {
        return (
            <ul className="chat__history__items">
                {Object.keys(this.state.chats).sort().map(item =>
                    <li key={item}>
                        <Chat item={item}/>
                    </li>
                )}
            </ul>
        );
    }
};

export default ChatHistory;
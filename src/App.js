import React, { Component } from 'react';
import './App.css';
import ChatHistoryContainer from './components/ChatHistoryContainer';
import CurrentChatContainer from './components/CurrentChatContainer';

class App extends Component {

    constructor(props) {
        super(props);
        this.addChat = this.addChat.bind(this);
    }

    addChat() {
        console.error('@ adding chat', null);
        this.props.addChat();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2 className="chat__title">An Awesome Chat App</h2>
                    <button className="chat__add" onClick={this.addChat}>Add Chat</button>
                </div>
                <div className="chat__components">
                    <nav className="chat__history__container">
                        <ChatHistoryContainer />
                        <div>some chats here</div>
                    </nav>
                    <section>
                        <CurrentChatContainer />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;

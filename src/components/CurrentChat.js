import React from 'react';
//import ChatMessage from './ChatMessage';
import $ from "jquery";

class CurrentChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            currentChat: null
        }
    }

    componentDidMount() {
        $(function() {
            $("#usermsg").keypress(function (e) {
                if(e.which === 13) {
                    //@TODO: need to bind the component context so we can call the addChatMessage redux action.
                    console.error('@ this.val', $(this).val());
                    //this.props.addChatMessage({
                    //    chat: this.state.currentChat,
                    //    message: $(this).val()
                    //})
                    $(this).val("");
                    e.preventDefault();
                }
            });
        });
    }

    componentWillUnmount() {
        //TODO detach the keypress event. ideally it should attached be done using jquery ON :)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            chats: nextProps.chats,
            currentChat: null
        });
    }

    render() {
        //@TODO need to render the current chat messages below
        return (
            <div className="current__chat">
                <ul className="current__chat__messages">
                    <li>current chat messages</li>
                </ul>
                <input className="current__chat__input" type="textarea" id="usermsg"></input>
            </div>
        );
    }
};

export default CurrentChat;
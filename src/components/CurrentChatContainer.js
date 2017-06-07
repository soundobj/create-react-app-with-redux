import {connect} from 'react-redux';
import { addChatMessage } from "../actions/chat-actions"
import CurrentChat from './CurrentChat';

function mapDispatchToProps(dispatch) {
    return {
        addChatMessage: () => { dispatch(addChatMessage()); },
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats,
        currentChat: state.chat.currentChat
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChat);
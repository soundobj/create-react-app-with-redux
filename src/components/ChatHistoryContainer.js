import {connect} from 'react-redux';
import ChatHistory from './ChatHistory';

function mapStateToProps(state) {
    return {
        chats: state.chat.chats,
    };
}

export default connect(mapStateToProps, null)(ChatHistory);
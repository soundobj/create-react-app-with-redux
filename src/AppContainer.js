import {connect} from 'react-redux';
import { addChat } from "./actions/chat-actions"
import App from './App';

function mapDispatchToProps(dispatch) {
    return {
        addChat: () => { dispatch(addChat()); },
    }
}

export default connect(null, mapDispatchToProps)(App);
import * as types from '../actions/action-types';

const initialState = {
    chats: {},
    currentChat: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_CHAT:
        //@TODO set the current chat so we can update the context of the main app pane
            break;
        case types.ADD_CHAT:
            //generate unique id for chat
            let chatId = new Date().getTime();
            return {
                ...state,
                chats: Object.assign({[chatId]: {
                    threads: [
                        {
                            sent: chatId,
                            user: "admin",
                            message: "Welcome to the chat"
                        }
                    ]}
                }, state.chats)
            }
        case types.ADD_CHAT_MESSAGE:
            //generate unique id for chat
            //let chatMessageID = new Date().getTime();
            //@TODO
            break;
        case types.GET_CHATS:
            //@TODO
            break;
        default:
            return state;
    }
};
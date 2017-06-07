import * as types from './action-types';

export const addChat = () => {
  return {
    type: types.ADD_CHAT
  };
}

export const addChatMessage = (chat, message) => {
  return {
    type: types.ADD_CHAT,
    payload: { chat, message }
  };
}



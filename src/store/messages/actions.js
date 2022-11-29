export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_CHAT_MESSAGES = "DELETE_CHAT_MESSAGES";
export const ADD_MESSAGE_WITH_SAGA = "MESSAGES::ADD_MESSAGE_WITH_SAGA"

export const addMessageSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    chatId,
    message
})

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId, message
})

export const delChatMessages = (chatId) => ({
    type: DELETE_CHAT_MESSAGES,
    chatId
})
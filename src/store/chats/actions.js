export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name
})

export const delChat = (name) => ({
    type: DELETE_CHAT,
    name
})


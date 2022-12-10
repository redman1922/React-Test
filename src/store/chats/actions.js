export const FB_ADD_CHAT = "CHATS::FB_ADD_CHAT";
export const FB_DELETE_CHAT = "CHATS::FB_DELETE_CHAT";
export const FB_GET_CHAT = "CHATS::FB_GET_CHAT";


export const fbAddChat = (name) => ({
    type: FB_ADD_CHAT,
    name
});

export const fbDeleteChat = (id) => ({
    type: FB_DELETE_CHAT,
    id
});

export const fbGetChat = (data) => ({
    type: FB_GET_CHAT,
    data
});

import { FB_ADD_CHAT, FB_DELETE_CHAT, FB_GET_CHAT } from './actions'
import firebase from '../../service/firebase';
import { getDatabase, ref, push, set, remove, get, child } from 'firebase/database'


let data = [];


const fbChatsReducer = (state = data, action) => {
    const db = getDatabase(firebase);
    switch (action.type) {
        case FB_GET_CHAT: {
            return action.data
        }
        case FB_ADD_CHAT: {
            const chatRef = ref(db, '/chats');
            const newChatRef = push(chatRef);
            set(newChatRef, { name: action.name });
        }
        case FB_DELETE_CHAT: {
            const chatRef = ref(db, `/chats/${action.id}`);
            const messagesRef = ref(db, `/messages/${action.id}`);
            remove(chatRef).then(res => console.log('remove chat', res));
            remove(messagesRef).then(res => console.log('removed msg', res));
        }
        default:
            return state
    }
}

export default fbChatsReducer;

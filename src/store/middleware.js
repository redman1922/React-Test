import { API_URL_PUBLIC } from "../contants/endpoints";
import { getGistsFailure, getGistsRequest, getGistsSuccess } from "./gists/actions";
import { getDatabase, ref, get, child, push, set, onValue } from 'firebase/database'
import firebase from '../service/firebase';
import { fbGetChat } from './chats/actions'

export const getALLGists = () => async (dispatch) => {
    dispatch(getGistsRequest());
    try {
        const res = await fetch(API_URL_PUBLIC);
        if (!res.ok) {
            throw new Error(`Ошибка ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
}

export const getDataFromFireBase = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    get(child(dbRef, '/chats')).then((snapshot) => {
        if (snapshot.val()) {
            const obj = snapshot.val();
            const chatIds = Object.keys(obj);
            const chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }));
            console.log(chatArr);
            dispatch(fbGetChat(chatArr));
        } else {
            console.log('нет данных');
        }
    });
}


// import { addMessage, ADD_MESSAGE } from "./messages/actions";
//
// const middleware = store => next => action => {
//     if (action.type === ADD_MESSAGE && action.message.author !== 'bender') {
//         const bederMessage = { text: 'i am a robot', author: 'bender' };
//         setTimeout(() => {
//             store.dispatch(addMessage(action.chatId, bederMessage))
//         }, 1000);
//     }
//     return next(action);
// };
//
// export default middleware

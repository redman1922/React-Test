import { delay, put, takeLatest } from 'redux-saga/effects'
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './messages/actions'


function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.chatId, action.message));
    if (action.message.author !== 'robot') {
        const botMessage = { text: 'Hi, I\'m a bot with Saga', author: 'Bot' }
        yield delay(2000);
        yield put(addMessage(action.chatId, botMessage));
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)
}
export default mySaga;
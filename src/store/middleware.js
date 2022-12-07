import { addMessage, ADD_MESSAGE } from "./messages/actions";

const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.message.author !== 'bender') {
        const bederMessage = { text: 'i am a robot', author: 'bender' };
        setTimeout(() => {
            store.dispatch(addMessage(action.chatId, bederMessage))
        }, 1000);
    }
    return next(action);
};

export default middleware

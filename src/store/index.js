import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";
// import middleware from './middleware'
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist'
import thunk from "redux-thunk";
import gistsReducer from "./gists/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage
}

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer

})

const persistedReducer = persistReducer(persistConfig, allReducers);

// Реализация redux без moddleware
// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());
//
// Реализаиця с moddleware
// export const store = createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));
//
// Реализация до использования redux-persist
// export const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(mySaga);

export const persistor = persistStore(store)

import {legacy_createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {profileReducer} from "./profileReducer";


const rootReducer = combineReducers({
    profile: profileReducer
})
export const store = legacy_createStore(rootReducer, composeWithDevTools());
import { ADD_CHAT } from "./actions"
import { DELETE_CHAT } from "./actions"

const initialState = {
    chatList: []
}


//Генерируем уникальный Id. Т.к. id строка сначала отделяем от него число, 
// далее выбираем из массива номеров Id максимальный и увеличиваем его на 1    
const generationId = (s) => {
    let id;
    console.log(s.chatList.length);
    if (s.chatList.length === 0) return id = 0;
    let arr = [];
    arr = s.chatList.map((f) => f.id);
    arr = arr.map((e) => {
        let numId;
        ([, , numId] = e.split(''));
        return numId
    })
    id = Math.max(...arr);
    id++;
    return id
}

// id: `id${state.chatList.length}`,
const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            let newId = generationId(state);
            return {
                ...state,
                chatList: [
                    ...state.chatList, {
                        id: ('id' + newId),
                        name: action.name
                    }
                ]

            }
        }
        case DELETE_CHAT: {

            state.chatList = state.chatList.filter((f) => f.name !== action.name);
            return state
        }
        default:
            return state
    }
}

export default chatsReducer;
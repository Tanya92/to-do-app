const ADD_ITEM = 'ADD_ITEM';
const SET_INPUT = 'SET_INPUT';
const CHANGE_STATUS = 'CHANGE_STATUS';
const DELETE_ITEM = 'DELETE_ITEM';

export const addToList = (text) => {
    return {
        type: ADD_ITEM,
        text
    };
};

export const deleteFromList = (item) => {
    return {
        type: DELETE_ITEM,
        item
    }
}

export const setText = (input) => {
    return {
        type: SET_INPUT,
        input
    };
};

export const changeStatus = (item) => {
    return {
        type: CHANGE_STATUS,
        item
    }
}
const keyLocalStorage = "toDoState";
function fromStorage() {
    try {
        return JSON.parse(localStorage.getItem(keyLocalStorage)) || defaultState;
    } catch (error) {
        return defaultState;
    }
}

function toStorage(state) {
    try {
        localStorage.setItem(keyLocalStorage, JSON.stringify(state));
        return state;
    } catch (error) {
        return state;
    }

}
const defaultState = {
    input: '',
    list: [],
    counter: 0
};
export const toDoReducer = (state = fromStorage(), action) => {
    switch (action.type) {
        case ADD_ITEM:
            return toStorage(
                {
                    ...state,
                    input: '',
                    list: [
                        ...state.list,
                        {
                            text: action.text,
                            isChecked: false,
                            id: state.counter
                        }
                    ],
                    counter: state.counter + 1
                });
        case DELETE_ITEM:
            return toStorage(
                {
                    ...state,
                    list: state.list.filter(
                        item => item.id != action.item.id
                    )
                });
        case SET_INPUT:
            return toStorage({
                ...state,
                input: action.input
            });
        case CHANGE_STATUS:
            return toStorage({
                ...state,
                list: state.list.map(
                    item => {
                        if (item.id == action.item.id) {
                            item.isChecked = !item.isChecked;
                        }
                        return item;
                    }
                )
            });
        default:
            return state;
    }
};

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    users: [],
};

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

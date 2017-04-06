import { CHANGE_PAGE } from '../action/navAction';

const initialState = {
    curPage: 'home',
}

export default function navReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_PAGE:
            console.log('dispatch page success');
            return { ...state, curPage: action.name };
        default: 
            return state;
    }
}
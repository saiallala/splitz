import * as actionTypes from './modalToggleActionTypes';

const initialState = {
    view: false
}

const modalToggleReducer = (state = initialState, action ) => {
    switch(action.type){
        case actionTypes.TOGGLE:
            console.log("Inside the redcuer");
        return{
            view: action.view
        }
        default: return state;
    }
};

export default modalToggleReducer;
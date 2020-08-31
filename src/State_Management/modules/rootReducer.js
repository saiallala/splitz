import {combineReducers} from 'redux';
import {modalToggleReducer} from './modalToggle';

const appReducer = combineReducers({
    modalToggle: modalToggleReducer,
});

export default appReducer;
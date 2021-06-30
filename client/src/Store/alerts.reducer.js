import { createStore } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    message: ''
};

function alertsReducer(state = initialState, action) {
    switch (action.type) {
        case 'success': return state = {
            type: action.type,
            message: action.message
        };
        case 'error': return state = {
            type: action.type,
            message: action.message
        };
        default: return state;
    }
}

export default createStore(alertsReducer);
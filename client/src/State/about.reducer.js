import { createStore } from '@reduxjs/toolkit';

function aboutReducer(state = { value: null }, action) {
    switch (action.type) {
        case 'enter': return { value: action.value, type: action.type };
        case 'leave': return { value: null, type: action.type };

        default: return state;
    }
}

export default createStore(aboutReducer);
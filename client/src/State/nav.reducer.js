import { createStore } from '@reduxjs/toolkit';

function navReducer(state = { open: false }, action) {
    switch (action.type) {
        case 'toggle': return { open: !state.open ? true : false };
        case 'close': return { open: false };
        case 'open': return { open: true };
        default: return state;
    }
}

export default createStore(navReducer);
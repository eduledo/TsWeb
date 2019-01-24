import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    menuItems: [],
    current: null,
    opened: false,
    sidebarOpen: true,
};

const applySetItems = (state, action) => ({
    ...state,
    menuItems: action.payload
});

const applySetCurrent = (state, action) => ({
    ...state,
    current: action.payload,
});

const applySidebarStatus = (state, action) => ({
    ...state,
    sidebarOpen: action.payload,
});

function menuItemReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${events.MENU_ITEMS_LIST}_${FULFILLED}`: {
            return applySetItems(state, action);
        }
        case `${events.MENU_SET_CURRENT_ITEM}_${FULFILLED}`: {
            return applySetCurrent(state, action);
        }

        case `${events.MENU_TOGGLE_SIDEBAR}_${FULFILLED}`: {
            action.payload = !state.sidebarOpen;
            return applySidebarStatus(state, action);
        }
        default:
            return state;
    }
}

export default menuItemReducer;

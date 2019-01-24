import {events} from '../constants'
import {menu} from '../db';

export function toggleOpenedItem(item) {
    return dispatch => {
        dispatch({
            type: events.MENU_SET_CURRENT_ITEM,
            payload: new Promise((resolve => {
                resolve(item);
            }))
        })
    }
}

export function toggleSidebar() {
    return dispatch => {
        dispatch({
            type: events.MENU_TOGGLE_SIDEBAR,
            payload: new Promise((resolve => {
                resolve();
            }))
        })
    }
}

export function fetchMenuItems() {
    return dispatch => {
        menu.getAll((docs) => {
            dispatch({
                type: events.MENU_ITEMS_LIST,
                payload: new Promise((resolve => resolve(docs)))
            });
        })
    }
}

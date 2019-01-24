import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    items: [],
};

const applySetItems = (state, action) => ({
    ...state,
    items: action.payload
});

function alePresenceReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.ALE_PRESENCE_LIST}_${FULFILLED}` : {
            return applySetItems(state, action);
        }
        default :
            return state;
    }
}

export default alePresenceReducer;

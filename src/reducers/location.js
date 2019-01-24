import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    locations: [],
    currentLocation: null,
};

const applySetLocations = (state, action) => ({
    ...state,
    locations: action.payload
});

const applySetCurrentLocation = (state, action) => ({
    ...state,
    currentLocation: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.LOCATIONS_LIST}_${FULFILLED}` : {
            return applySetLocations(state, action);
        }
        case `${events.LOCATION_GET}_${FULFILLED}`: {
            return applySetCurrentLocation(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    bussiness_units: [],
    currentBussinessUnit: null,
};

const applySetBussinessUnits = (state, action) => ({
    ...state,
    bussiness_units: action.payload
});

const applySetCurrentBussinessUnit = (state, action) => ({
    ...state,
    currentBussinessUnit: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.BUSSINESS_UNITS_LIST}_${FULFILLED}` : {
            return applySetBussinessUnits(state, action);
        }
        case `${events.BUSSINESS_UNIT_GET}_${FULFILLED}`: {
            return applySetCurrentBussinessUnit(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

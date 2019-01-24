import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    resellers: [],
    currentReseller: null,
};

const applySetCampaigns = (state, action) => ({
    ...state,
    resellers: action.payload
});

const applySetCurrentCampaign = (state, action) => ({
    ...state,
    currentReseller: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.RESELLERS_LIST}_${FULFILLED}` : {
            return applySetCampaigns(state, action);
        }
        case `${events.RESELLER_GET}_${FULFILLED}`: {
            return applySetCurrentCampaign(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

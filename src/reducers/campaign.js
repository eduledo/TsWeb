import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    campaigns: [],
    currentCampaign: null,
};

const applySetCampaigns = (state, action) => ({
    ...state,
    campaigns: action.payload
});

const applySetCurrentCampaign = (state, action) => ({
    ...state,
    currentCampaign: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.CAMPAIGNS_LIST}_${FULFILLED}` : {
            return applySetCampaigns(state, action);
        }
        case `${events.CAMPAIGN_GET}_${FULFILLED}`: {
            return applySetCurrentCampaign(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

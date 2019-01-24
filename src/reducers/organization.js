import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    organizations: [],
    currentOrganization: null,
};

const applySetOrganizations = (state, action) => ({
    ...state,
    organizations: action.payload
});

const applySetCurrentOrganization = (state, action) => ({
    ...state,
    currentOrganization: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.ORGANIZATIONS_LIST}_${FULFILLED}` : {
            return applySetOrganizations(state, action);
        }
        case `${events.ORGANIZATION_GET}_${FULFILLED}`: {
            return applySetCurrentOrganization(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

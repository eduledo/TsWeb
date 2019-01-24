import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    users: [],
    currentUser: null,
    roles: [],
    currentRole: null,
};

const applySetUsers = (state, action) => ({
    ...state,
    users: action.payload
});

const applySetRoles = (state, action) => ({
    ...state,
    roles: action.payload
});

const applySetCurrentRole = (state, action) => ({
    ...state,
    currentRole: action.payload
});

const applySetCurrentUser = (state, action) => ({
    ...state,
    currentUser: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.USERS}${events._LIST}_${FULFILLED}` : {
            return applySetUsers(state, action);
        }
        case `${events.USERS}${events._GET}_${FULFILLED}` : {
            return applySetCurrentUser(state, action);
        }
        case `${events.ROLES_LIST}_${FULFILLED}`: {
            return applySetRoles(state, action);
        }
        case `${events.ROLE_GET}_${FULFILLED}`: {
            return applySetCurrentRole(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

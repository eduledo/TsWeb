import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    locales: [],
    currentLocale: null,
};

const applySetLocales = (state, action) => ({
    ...state,
    locales: action.payload
});

const applySetCurrentLocale = (state, action) => ({
    ...state,
    currentLocale: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.LOCALES_LIST}_${FULFILLED}` : {
            return applySetLocales(state, action);
        }
        case `${events.LOCALE_GET}_${FULFILLED}`: {
            return applySetCurrentLocale(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;

import {combineReducers} from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import menuReducer from './menu';
import bussinessUnitReducer from './bussiness_unit';
import organizationReducer from './organization';
import localesReducer from './locale';
import locationReducer from './location';
import campaignsReducer from './campaign';
import resellerReducer from './reseller';
import alePresenceReducer from './ale_presence';

const rootReducer = combineReducers({
    sessionState: sessionReducer,
    userState: userReducer,
    menuState: menuReducer,
    organizationState: organizationReducer,
    bussinessUnitState: bussinessUnitReducer,
    localeState: localesReducer,
    locationState: locationReducer,
    campaignState: campaignsReducer,
    resellerState: resellerReducer,
    alePresenceState: alePresenceReducer,
});

export default rootReducer;

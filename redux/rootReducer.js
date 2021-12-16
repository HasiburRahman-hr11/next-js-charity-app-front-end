import {combineReducers} from 'redux';

import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    userInfo : userReducer
});

export default rootReducer;
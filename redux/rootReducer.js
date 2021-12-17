import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer
});

export default rootReducer;
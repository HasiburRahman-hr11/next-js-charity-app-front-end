import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import blogsReducer from './blogs/blogsReducer';
import casesReducer from './cases/casesReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    cases: casesReducer,
    blogs: blogsReducer
});

export default rootReducer;
import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from '@common/slices/user';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;

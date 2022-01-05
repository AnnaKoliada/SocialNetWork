import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-Reducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import commonReducer from './commonReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  commonReducer: commonReducer,
  authReducer: authReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

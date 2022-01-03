import { combineReducers, createStore } from 'redux';
import authReducer from './auth-Reducer';
import dialogsReducer from './dialogsReducer';
import fetchingReducer from './fetchingReducer';
import profileReducer from './profileReducer';
// import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
// import usersReducer from './usersReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  isFetching: fetchingReducer,
  authReducer: authReducer,
});
const store = createStore(reducers);

export default store;
// const state = {
//     profilePage: {
//         posts: [
//             { id: 1, post: 'number 1', countLike: 2 },
//             { id: 2, post: 'number 2', countLike: 5 },
//             { id: 3, post: 'number 3', countLike: 8 }

//         ]
//     },
//     dialogsPage: {
//         messages: [
//             { id: 1, message: 'Hi' },
//             { id: 2, message: 'Hi hi' },
//             { id: 3, message: 'Hi it is I' }
//         ],
//         dialogs: [
//             { id: 1, name: 'Anna' },
//             { id: 2, name: 'Kostya' },
//             { id: 3, name: 'Ksyusha' },
//             { id: 4, name: 'Zahar' },
//             { id: 5, name: 'Venya' },
//         ],

//     }

// }

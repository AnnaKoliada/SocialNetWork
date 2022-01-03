import { IAuth } from '../interface';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_AVATAR = 'SET_AUTH_USER_AVATAR';

const initialState: IAuth = {
  resultCode: null,
  messages: [],
  data: {
    id: null,
    email: null,
    login: null,
  },
  isAuth: false,
  avatar: null,
};

const authReducer = (state = initialState, action: { type: string; data: IAuth; avatar: string } ): IAuth => {
  switch (action?.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_AUTH_USER_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      };
  
     
    default:
      return state;
  }
  
};

export const setAuthUserData = (data: IAuth): { type: string, data: IAuth } => ({ type: SET_USER_DATA, data });

export const setAuthUserAvatar = (avatar: string): { type: string, avatar: string | null } =>({ type: SET_USER_DATA, avatar });
export default authReducer;

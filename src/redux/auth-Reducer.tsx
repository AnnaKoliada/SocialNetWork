import { authAPI, profileAPI } from '../api/api';
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

export const setAuthUserDataSuccess = (data: IAuth): { type: string, data: IAuth } => ({ type: SET_USER_DATA, data });

export const setAuthUserAvatarSuccess = (avatar: string): { type: string, avatar: string | null } =>({ type: SET_USER_DATA, avatar });

export const setAuthUserData = ()=>{
  return (dispatch: (arg0: { type: string; data?: IAuth; avatar?: string | null; }) => void)=>{
    authAPI.authMe().then(( data: IAuth ) => {
      if (data.resultCode === 0){
        dispatch(setAuthUserDataSuccess(data));
        const id = data.data.id;
        profileAPI.getProfile(id).then((dates) => {
          dispatch(setAuthUserAvatarSuccess(dates.photos.small));
        });
      }
    });
  };
};
export default authReducer;

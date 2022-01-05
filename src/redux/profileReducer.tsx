import { profileAPI } from '../api/api';
import { IUserData, IPost } from '../interface';
import { updateIsFetching } from './commonReducer';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA';

interface IState { posts: IPost[] | [], newPostText: string | null, userData: IUserData | null }

const initialState: IState = {
  posts: [
    { id: 1, post: 'number 1', likeCount: 2 },
    { id: 2, post: 'number 2', likeCount: 5 },
    { id: 3, post: 'number 3', likeCount: 8 },
  ],
  newPostText: 'I am new Post text',
  userData: null,
};

const profileReducer = (
  
  state = initialState,
  action: { type: string; newText: string | null; data: IUserData | null },
): IState => {
  switch (action?.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, post: state.newPostText, likeCount: 0 }],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE_DATA:
      return {
        ...state,
        userData: action.data,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (): { type: string } => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text: string): { type: string; newText: string } => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfileData = (data: IUserData): { type: string; data: IUserData } => ({
  type: SET_USER_PROFILE_DATA,
  data,
});

export const getUserProfileData = (userId: number | null)=>{
  return (dispatch: (arg0: { type: string; isFetching?: boolean; data?: IUserData; }) => void)=>{
    dispatch(updateIsFetching(true));
    profileAPI.getProfile(userId)
      .then((data) => {
        dispatch(setUserProfileData(data));
        dispatch(updateIsFetching(false));
      });
  };
};
export default profileReducer;

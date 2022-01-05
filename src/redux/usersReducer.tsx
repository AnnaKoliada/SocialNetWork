import { followAPI, userAPI } from '../api/api';
import { IUser, IUserPage } from '../interface';
import { updateDisabledFollowing, updateIsFetching } from './commonReducer';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const UPDATE_TOTALCOUNT = 'UPDATE_TOTALCOUNT';
const UPDATE_PAGESIZE = 'UPDATE_PAGESIZE';
const UPDATE_CURRENTPAGE = 'UPDATE_CURRENTPAGE';

const initialState: IUserPage = {
  users: [],
  totalCount: null,
  pageSize: 10,
  currentPage: 1,
};

const usersReducer = (
  state = initialState,
  action: { type: string; userId: number; users: IUser[]; number: number; isFetching: boolean },
): IUserPage => {
  switch (action?.type) {
    case FOLLOW:
      console.log('follow', {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      });
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }

          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }

          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };
    case UPDATE_PAGESIZE:
      return {
        ...state,
        pageSize: action.number,
      };
    case UPDATE_TOTALCOUNT:
      return {
        ...state,
        totalCount: action.number,
      };
    case UPDATE_CURRENTPAGE:
      return {
        ...state,
        currentPage: action.number,
      };
    default:
      return state;
  }
};

export const followSuccess = (userId: number): { type: string; userId: number } => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId: number): { type: string; userId: number } => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users: IUser[]): { type: string; users: IUser[] } => ({
  type: SET_USERS,
  users,
});
export const updateTotalCount = (number: number): { type: string; number: number } => ({
  type: UPDATE_TOTALCOUNT,
  number,
});
export const updatePageSize = (number: number): { type: string; number: number } => ({
  type: UPDATE_PAGESIZE,
  number,
});
export const updateCurrentPage = (number: number): { type: string; number: number } => ({
  type: UPDATE_CURRENTPAGE,
  number,
});

export const  getUsers = (currentPage: string | number, pageSize: any)=>{
  return (dispatch: (arg0: { type: string; isFetching?: boolean; users?: IUser[]; number?: number; }) => void) => {
    dispatch(updateIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(updateIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(updateTotalCount(response.totalCount));
    });
  };
};
export const unFollow = (userId: number)=>{

  return (dispatch: (arg0: any) => void)=>{
    dispatch(updateDisabledFollowing(true, userId ));
    followAPI.unfollow(userId).then(data=>{
      if (data.resultCode === 0){
        dispatch(unfollowSuccess(userId));
      }
    });
    dispatch(updateDisabledFollowing(false, userId ));

  };
};
export const follow = (userId: number)=>{

  return (dispatch: (arg0: any) => void)=>{
    dispatch(updateDisabledFollowing(true, userId ));
    followAPI.follow(userId).then(data=>{
      if (data.resultCode === 0){
        dispatch(followSuccess(userId));
      }
    });
    dispatch(updateDisabledFollowing(false, userId ));
  };
};

export default usersReducer;

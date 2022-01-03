import { IUser, IUserPage } from '../interface';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const UPDATE_TOTALCOUNT = 'UPDATE_TOTALCOUNT';
const UPDATE_PAGESIZE = 'UPDATE_PAGESIZE';
const UPDATE_CURRENTPAGE = 'UPDATE_CURRENTPAGE';
// const UPDATE_ISFETCHING = 'UPDATE_ISFETCHING';

const initialState: IUserPage = {
  users: [],
  totalCount: null,
  pageSize: 10,
  currentPage: 1,
  // isFetching: false,
};

const usersReducer = (
  state = initialState,
  action: { type: string; userId: number; users: IUser[]; number: number; isFetching: boolean },
): IUserPage => {
  switch (action?.type) {
    case FOLLOW:
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
    // case UPDATE_ISFETCHING:
    //   return {
    //     ...state,
    //     isFetching: action.isFetching,
    //   };
    default:
      return state;
  }
};

export const follow = (userId: number): { type: string; userId: number } => ({
  type: FOLLOW,
  userId,
});
export const unfollow = (userId: number): { type: string; userId: number } => ({
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
// export const updateIsFetching = (isFetching: boolean): { type: string; isFetching: boolean } => ({
//   type: UPDATE_ISFETCHING,
//   isFetching,
// });
export default usersReducer;

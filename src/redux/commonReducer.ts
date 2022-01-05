import { ICommon } from '../interface';

const UPDATE_IS_FETCHING = 'UPDATE_IS_FETCHING';
const UPDATE_IS_DISABLED_FOLLOWING = 'UPDATE_IS_DISABLED_FOLLOWING';


const initialState: ICommon = {
  isFetching: false,
  isDisabledFollowing: [],
};

const commonReducer = (
  state = initialState,
  action: { type: string; isFetching: boolean; isDisabledFollowing: boolean; id: number; },
): ICommon => {
  switch (action?.type) {
    case UPDATE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_IS_DISABLED_FOLLOWING:
      return {
        ...state,
        isDisabledFollowing: action.isDisabledFollowing
          ? [...state.isDisabledFollowing, action.id]
          : state.isDisabledFollowing.filter(id => id != action.id),
      };
    default:
      return state;
  }
};

export const updateIsFetching = (isFetching: boolean): { type: string; isFetching: boolean } => ({
  type: UPDATE_IS_FETCHING,
  isFetching,
});
export const updateDisabledFollowing = (isDisabledFollowing: boolean, id: number): { type: string; isDisabledFollowing: boolean; id: number } => ({
  type: UPDATE_IS_DISABLED_FOLLOWING, isDisabledFollowing, id,
});
export default commonReducer;

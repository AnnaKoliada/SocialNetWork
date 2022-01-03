const UPDATE_IS_FETCHING = 'UPDATE_ISFETCHING';

const initialState = {
  isFetching: false,
};

const fetchingReducer = (
  state = initialState,
  action: { type: string; isFetching: boolean },
): { isFetching: boolean }  => {
  switch (action?.type) {
    case UPDATE_IS_FETCHING:
      console.log(action.isFetching);
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const updateIsFetching = (isFetching: boolean): { type: string; isFetching: boolean } => ({
  type: UPDATE_IS_FETCHING,
  isFetching,
});
export default fetchingReducer;

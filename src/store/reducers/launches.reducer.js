import { launchesActionTypes } from '../actions/launches.actions';

const initialState = {
  launchTime: null,
};

const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case launchesActionTypes.FIND_CLOSEST_LAUNCH:
      return {
        ...state,
        launchTime: null,
      };

    case launchesActionTypes.FIND_CLOSEST_LAUNCH_SUCCESS:
      return {
        ...state,
        launchTime: action.payload,
      };

    default:
      return state;
  }
};

export default launchesReducer;

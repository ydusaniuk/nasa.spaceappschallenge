import { spaceportActionTypes } from '../actions/spaceport.actoins';
import requestStatus from '../../shared/requestStatus';

const initialState = {
  spaceports: null,
  spaceportsLoadStatus: requestStatus(),
};

const spaceportReducer = (state = initialState, action) => {
  switch (action.type) {
    case spaceportActionTypes.LOAD_SPACEPORTS_LIST:
      return {
        ...state,
        spaceports: null,
        spaceportsLoadStatus: requestStatus(true),
      };

    case spaceportActionTypes.LOAD_SPACEPORTS_LIST_SUCCESS:
      return {
        ...state,
        spaceports: action.payload,
        spaceportsLoadStatus: requestStatus(false, true),
      };

    case spaceportActionTypes.LOAD_SPACEPORTS_LIST_FAIL:
      return {
        ...state,
        spaceportsLoadStatus: requestStatus(false, false, action.payload),
      };

    default:
      return state;
  }
};

export default spaceportReducer;

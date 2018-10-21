import { userActionTypes } from '../actions/user.actions';
import requestStatus from '../../shared/requestStatus';

const initialState = {
  subscriptionToNewsfeedLoadStatus: requestStatus(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SUBSCRIBE_TO_NEWSFEED:
      return {
        ...state,
        subscriptionToNewsfeedLoadStatus: requestStatus(true),
      };

    case userActionTypes.SUBSCRIBE_TO_NEWSFEED_SUCCESS:
      return {
        ...state,
        subscriptionToNewsfeedLoadStatus: requestStatus(false, true),
      };

    case userActionTypes.SUBSCRIBE_TO_NEWSFEED_FAIL:
      return {
        ...state,
        subscriptionToNewsfeedLoadStatus: requestStatus(false, false, action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;

export const userActionTypes = {
  SUBSCRIBE_TO_NEWSFEED: 'SUBSCRIBE_TO_NEWSFEED',
  SUBSCRIBE_TO_NEWSFEED_SUCCESS: 'SUBSCRIBE_TO_NEWSFEED_SUCCESS',
  SUBSCRIBE_TO_NEWSFEED_FAIL: 'SUBSCRIBE_TO_NEWSFEED_FAIL',
};

const subscribeToNewsfeed = (email) => {
  return {
    type: userActionTypes.SUBSCRIBE_TO_NEWSFEED,
    payload: email,
  }
};

const subscribeToNewsfeedSuccess = () => {
  return {
    type: userActionTypes.SUBSCRIBE_TO_NEWSFEED_SUCCESS,
  }
};

const subscribeToNewsfeedFail = (error) => {
  return {
    type: userActionTypes.SUBSCRIBE_TO_NEWSFEED_SUCCESS,
    payload: error,
  }
};

export const userActions = {
  subscribeToNewsfeed,
  subscribeToNewsfeedSuccess,
  subscribeToNewsfeedFail
};

export default userActions;

import { takeEvery, all } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

import axios from 'axios';

import { userActionTypes, userActions } from '../actions/user.actions';
import { CONFIG } from '../../config/config';

export function* userSagas() {
  yield all([
    takeEvery(userActionTypes.SUBSCRIBE_TO_NEWSFEED, subscribeToNewsfeedSaga),
  ]);
}

function* subscribeToNewsfeedSaga(action) {
  try {
    yield axios.get(`${CONFIG.endpoints.rocketLaucher}/subscribe?email=${action.payload}`);

    yield put(userActions.subscribeToNewsfeedSuccess());
  } catch(err) {
    yield put(userActions.subscribeToNewsfeedFail(err));
  }
}

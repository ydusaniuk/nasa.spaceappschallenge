import { takeEvery, all } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

import { launchesActionTypes } from '../actions/launches.actions';
import launchesActions from '../actions/launches.actions';

export function* launchesSagas() {
  yield all([
    takeEvery(launchesActionTypes.FIND_CLOSEST_LAUNCH, findClosestLaunchSaga),
  ]);
}

function* findClosestLaunchSaga(action) {
  const closestLaunchDate = yield action.payload.map(port => port.missions.date)[0];
  yield put(launchesActions.findClosestLaunchSuccess(closestLaunchDate));
}

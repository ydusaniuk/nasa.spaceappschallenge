import { delay } from 'redux-saga';
import { takeEvery, all } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import axios from 'axios';

import spaceportActions, { spaceportActionTypes } from '../actions/spaceport.actoins';

export function* spaceportSagas () {
  yield all([
    takeEvery(spaceportActionTypes.LOAD_SPACEPORTS_LIST, loadSpaceportSaga),
  ]);
}

function* loadSpaceportSaga() {
  // imitate loading
  yield delay(1000);
  yield put(spaceportActions.loadSpaceportsListSuccess([
    {
      name: 'Vinnytsia',
      lat: 49.2331,
      lng: 28.4682,
    },
    {
      name: 'Other',
      lat: 28.4682,
      lng: 49.2331,
    },
  ]))
}

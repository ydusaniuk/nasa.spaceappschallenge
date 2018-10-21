import { takeEvery, all } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import axios from 'axios';

import spaceportActions, { spaceportActionTypes } from '../actions/spaceport.actoins';
import { CONFIG } from '../../config/config';

export function* spaceportSagas() {
  yield all([
    takeEvery(spaceportActionTypes.LOAD_SPACEPORTS_LIST, loadSpaceportSaga),
  ]);
}

function* loadSpaceportSaga() {
  try {
    const response = yield axios.get(`${CONFIG.endpoints.rocketLaucher}/events`);
    const ports = response.data.map((prop) => {
      return {
        ...prop,
        missions: {
          ...prop.missions,
          date: new Date(prop.missions.date),
        },
      }
    });

    yield put(spaceportActions.loadSpaceportsListSuccess(ports));
  } catch (err) {
    yield put(spaceportActions.loadSpaceportsListFail(err))
  }
}

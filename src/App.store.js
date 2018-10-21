import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import spaceportReducer from './store/reducers/spaceport.reducers';
import launchesReducer from './store/reducers/launches.reducer';

import { spaceportSagas } from './store/sagas/spaceport.sagas';
import { launchesSagas } from './store/sagas/launches.sagas';
import { userSagas } from './store/sagas/user.sagas';
import userReducer from './store/reducers/user.reducer';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({
  spaceports: spaceportReducer,
  launches: launchesReducer,
  users: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
);

// TODO: Run Sagas Here
sagaMiddleware.run(spaceportSagas);
sagaMiddleware.run(launchesSagas);
sagaMiddleware.run(userSagas);

export default store;

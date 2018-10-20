import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import spaceportReducer from './store/reducers/spaceport.reducers';
import { spaceportSagas } from './store/sagas/spaceport.sagas';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({
  spaceports: spaceportReducer,
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

export default store;

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({

});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
);

// TODO: Run Sagas Here
// sagaMiddleware.run(authSagas);

export default store;

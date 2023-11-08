import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import Config from 'react-native-config';

// Todo: add the reducer
const appReducer = combineReducers({});

const rootReducer = (state: any, action: any): any => {
  const { type } = action;

  switch (type) {
    case 'app.action.flushAll':
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};
const middleware = [];
const enhancers = [];

// Todo: push your custom middleware

const logEnabled = Config.DEBUG_REDUX_LOG === '1';
if (logEnabled) {
  const logger = createLogger({
    colors: {
      title: () => '#FC5A5A',
      nextState: () => '#82C43C',
    },
    diff: true,
    collapsed: true,
  });
  middleware.push(logger);
}

enhancers.push(applyMiddleware(...middleware));
const store = createStore(rootReducer, compose(...enhancers));

export const { dispatch } = store;

export default store;

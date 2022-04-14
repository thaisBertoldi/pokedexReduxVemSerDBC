import { compose, createStore } from 'redux';

import rootReducer from "./reducers"

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

export type RootState = ReturnType<typeof store.getState>

export default store;
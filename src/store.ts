import createSagaMiddleware from 'redux-saga';
import RootReducer from '../src/Store/reducers';
import RootSaga from '../src/Store/saga';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(RootSaga);

export default store;
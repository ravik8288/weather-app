import { configureStore } from '@reduxjs/toolkit';
import weatherReducder from './slice/weatherslice';
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './saga/weatherSaga';
let sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    weather: weatherReducder,
  }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga)


export default store;

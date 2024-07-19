import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import bookSlice from '../slice/book-slice';
import {APP_MODE} from '../../common/config';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['store_name'],
};

const reducers = combineReducers({
  book_store: bookSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: APP_MODE === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;

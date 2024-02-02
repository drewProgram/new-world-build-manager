// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['extractReducer', 'orderHistoryReducer']
// };

// const rootReducer = combineReducers({});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const serializableCheck = {
//   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
// };

// export const store =
//   process.env.VITE_MODE === 'develop'
//     ? configureStore({
//         reducer: persistedReducer,
//         middleware: gDM => gDM({ serializableCheck }).concat(logger)
//       })
//     : configureStore({
//         reducer: persistedReducer,
//         middleware: gDM => gDM({ serializableCheck })
//       });

// export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof store.getState>;

// export const persistor = persistStore(store);

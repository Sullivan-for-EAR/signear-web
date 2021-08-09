import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

import session from '@/modules/session';

const reducer = combineReducers({
  session,
});

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

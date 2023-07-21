import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { reducerPrefix as UI_REDUCER_PREFIX } from "./reducers/ui";

const store = configureStore({
  reducer: {
    [UI_REDUCER_PREFIX]: uiReducer,
  },
});


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
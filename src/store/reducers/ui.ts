import { createSlice } from "@reduxjs/toolkit";

export const reducerPrefix = "ui";

// ACTIONS

// REDUCER

interface uiState {
  isModalOpen: boolean;
}

const initialState: uiState = {
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    SET_MODAL_OPEN: (state) => {
      state.isModalOpen = true;
    },
    SET_MODAL_CLOSE: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { SET_MODAL_OPEN, SET_MODAL_CLOSE } = uiSlice.actions;
export default uiSlice.reducer;

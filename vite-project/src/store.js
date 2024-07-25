// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
  user: null,
  userAppointments: [],
};

// Slice de usuario
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUserAppointments(state, action) {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUser, setUserAppointments } = userSlice.actions;

// Crear el store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;

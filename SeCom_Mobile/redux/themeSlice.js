// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkColors: {
    primary: '#BB86FC',
    background: 'black',
    card: '#3c3c3c',
    text: 'white',
    border: '#555555',
    icon: 'white',
    iconActive: 'white',
  },
  lightColors: {
    primary: 'white',
    background: '#FFFFFF',
    card: 'white',
    text: 'black',
    border: '#CCCCCC',
    icon: 'black',
    iconActive: '#3c3c3c',
  },
  defaultColors: {
    primary: '#BB86FC',
    background: '#BB86FC',
    card: '#F5F5F5',
    text: 'white',
    border: '#CCCCCC',
    icon: 'white',
    iconActive: '#3c3c3c',
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeColors: (state, action) => {
      state.colors = action.payload;
    },
  },
});

export const { setThemeColors } = themeSlice.actions;

export default themeSlice.reducer;

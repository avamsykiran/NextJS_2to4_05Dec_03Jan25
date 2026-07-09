import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'light', // Fallback default for server compilation
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

const themeReducer = themeSlice.reducer;
const themeActions =  themeSlice.actions

export const { setTheme, toggleTheme } = themeActions;
export default themeReducer;
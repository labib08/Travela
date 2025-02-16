import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
interface ThemeState {
    mode: "light" | "dark";
  }

const initialState: ThemeState = {
    mode: savedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

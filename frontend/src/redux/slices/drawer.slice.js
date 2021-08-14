import { createSlice } from "@reduxjs/toolkit";

const drawer = localStorage.getItem("drawer")
  ? JSON.parse(localStorage.getItem("drawer"))
  : {
      expand: "",
    };

const drawerSlice = createSlice({
  name: "drawer",
  initialState: drawer,
  reducers: {
    setDrawer(state, action) {
      const { expand } = action.payload;
      state.expand = expand;
    },
  },
});

export const { setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;

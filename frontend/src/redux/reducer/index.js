import { combineReducers } from "@reduxjs/toolkit";

import drawerReducer from "../slices/drawer.slice";

export default combineReducers({
  drawer: drawerReducer,
});

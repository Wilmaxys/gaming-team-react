import { configureStore } from "@reduxjs/toolkit";
import serverReducer from "../slices/serverSlice";
import sidebarReducer from "../slices/sidebarSlice";
import teamspeakReducer from "../slices/teamspeakSlice";

export const store = configureStore({
  reducer: {
    server: serverReducer,
    sidebar: sidebarReducer,
    teamspeak: teamspeakReducer,
  },
});

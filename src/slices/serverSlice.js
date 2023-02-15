import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  players: [],
};

export const fetchPlayersAsync = createAsyncThunk(
  "server/fetchPlayers",
  async () => {
    const players =
      (await axios.get("http://localhost:8081/server"))?.data || [];
    return players;
  }
);

export const serverSlice = createSlice({
  name: "server",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(fetchPlayersAsync.fulfilled, (state, action) => {
      state.players = action.payload;
    });
  },
});

export const {} = serverSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlayers = (state) => state.server.players;

export default serverSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: { movies: [], songs: [] } };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.cartItems.movies.push(payload.movie);
    },
    removeMovie: (state, { payload }) => {
      state.cartItems.movies = state.cartItems.movies.filter(
        (movie) => movie !== payload.movie
      );
    },
    addSong: (state, { payload }) => {
      state.cartItems.songs.push(payload.song);
    },
    removeSong: (state, { payload }) => {
      state.cartItems.songs = state.cartItems.songs.filter(
        (song) => song !== payload.song
      );
    },
    clearAll: (state) => {
      state.cartItems.movies = [];
      state.cartItems.songs = [];
    },
  },
});
export const { addMovie, removeMovie, addSong, removeSong, clearAll } =
  cartSlice.actions;
export default cartSlice.reducer;

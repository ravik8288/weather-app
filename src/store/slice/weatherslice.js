import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: {},
  locations: [],
  selectedLocation: {},
};

const weartherSlice = createSlice({
  name: 'wather',
  initialState,
  reducers: {
    startLoader: (state) => {
      state.isLoading = true;
    },
    stopLoader: (state) => {
      state.isLoading = true;
    },
    getWeather: (state, action) => {
      state.weather = action.payload;
      state.isLoading = false;
    },
    getLocation: (state, action) => {
      state.locations = action.payload.results || [];
      state.selectedLocation = action.payload.results[0] || [];
      state.isLoading = false;
    },
  },
});

export const { getWeather, getLocation, stopLoader, startLoader } =
  weartherSlice.actions;
export default weartherSlice.reducer;

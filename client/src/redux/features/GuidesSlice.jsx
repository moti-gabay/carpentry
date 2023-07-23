import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGuides = createAsyncThunk('guides/getGuides', async (thunkAPI) => {
  try {
    const { data } = await axios.get('https://guide-api.cyclic.app/');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  guides: [],
  loading: true,
  error: null,
};

const GuidesSlice = createSlice({
  name: 'guides',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGuides.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getGuides.fulfilled, (state, action) => {
        state.guides = action.payload;
        state.loading = false;
      })
      .addCase(getGuides.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {},
});

export default GuidesSlice.reducer;
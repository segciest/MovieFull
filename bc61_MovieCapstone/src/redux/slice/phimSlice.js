import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';

export const getMovieAsyncThunk = createAsyncThunk(
  'phim/getMovieAsyncThunk',
  async (maPhim, thunkApi) => {
    const res = await quanLyPhimServ.layDanhSachPhim();
    // trả về kết quả cần lưu trữ vào trong redux
    console.log(res);
    return res.data.content;
  }
);
const initialState = {
  arrMovie: [],
};

const phimSlice = createSlice({
  name: 'phim',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Thành công
    builder.addCase(getMovieAsyncThunk.fulfilled, (state, action) => {
      console.log(action);
      state.arrMovie = action.payload;
    });
    // Thất bại
    builder.addCase(getMovieAsyncThunk.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const {} = phimSlice.actions;

export default phimSlice.reducer;

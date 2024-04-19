// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';

// Thunks
export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
    try {
        const { data } = await api.post("/api/users/login/", userData);
        localStorage.setItem(ACCESS_TOKEN, data.access_token);
        localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem('user', JSON.stringify(data.user))
        return data;
    } catch (error) {
        throw new Error('Failed to login. Please try again.'); // Add a specific error message if needed
    }
});

export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
  try {
    const { data } = await api.post("/api/users/register/", userData);
    return data
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to register. Please try again.');
  }
})
export const deleteUser = createAsyncThunk('user/deleteUser', async (userId) => {
  try {
    const { data } = await api.delete(`/api/users/${userId}/`);
    return data
  } catch (error) {
    return new Error(error)
  }
})

// Slice
const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess:false,
        error: null,
        LoggedUser: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.isSuccess = false;
            })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.isLoading = false;
                state.isError = false;
                state.LoggedUser = action.payload.user
                state.isSuccess = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.isSuccess = false;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.isSuccess = false;
            })
            .addCase(registerUser.fulfilled, (state,action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error;
                state.isSuccess = false
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.isSuccess = false;
            })
            .addCase(deleteUser.fulfilled, (state,action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.isSuccess = false
            })
    }
});

export default authSlice.reducer;

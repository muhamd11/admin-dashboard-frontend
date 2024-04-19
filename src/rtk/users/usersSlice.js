// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';


export const getUser = createAsyncThunk('user/getUser', async (user_id) => {
    try {
        const { data } = await api.get(`/api/users/${user_id}/`);
        return data;
    } catch (error) {
        throw new Error('Failed to get user data. Please try again.'); // Add a specific error message if needed
    }
});

export const updateUser = createAsyncThunk('user/updateUser', async ({ userId, userData }) => {
    try {
        const { data } = await api.put(`/api/users/${userId}/update/`, userData);
        return data;
    } catch (error) {
        throw new Error('Failed to update user data. Please try again.'); // Add a specific error message if needed
    }
})

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
    try {
        const { data } = await api.get(`/api/users/`);
        return data;
    } catch (error) {
        throw new Error('Failed to get user data. Please try again.'); // Add a specific error message if needed
    }
})

// Slice
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        user: null,
        users:null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.error = null;
                state.user = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isSuccess = true;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.user = null;
                state.isSuccess = false;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.user = null;
                state.isSuccess = false;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isSuccess = true;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.user = null;
                state.isSuccess = false;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
                state.users = null;
                state.isSuccess = false;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.users = null;
                state.isSuccess = false;
            })
    }
});

export default usersSlice.reducer;

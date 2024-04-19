// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';





export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  try {
    const { data } = await api.get('api/products/')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getProduct = createAsyncThunk('products/getProduct', async (productId) => {
  try {
    const { data } = await api.get(`api/products/${productId}/`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  try {
    const { data } = await api.delete(`api/products/${productId}/`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const addProduct = createAsyncThunk('products/addProduct', async (productData) => {
  try {
    const { data } = await api.post('api/products/', productData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ productId, productData }) => {
  try {
    const { data } = await api.put(`api/products/${productId}/`, productData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});



const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess:false,
        error: null,
        products: null,
        product: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.error = null;
            state.products = null;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.error = null;
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error =  action.error.message;
            state.products = null;
        })
        .addCase(getProduct.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.error = null;
            state.product = null;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.error = null;
            state.product = action.payload;
        })
        .addCase(getProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error =  action.error.message;
            state.product = null;
        })
        .addCase(deleteProduct.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.error = null;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.error = null;
        })
        .addCase(deleteProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error =  action.error.message;
        })
        .addCase(addProduct.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.error = null;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.error = null;
        })
        .addCase(addProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error =  action.error.message;
        })
        .addCase(updateProduct.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.error = null;
            state.product = null;
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.error = null;
            state.product = action.payload;
        })
        .addCase(updateProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error =  action.error.message;
            state.product = null;
        })
    }
});


export default productsSlice.reducer;





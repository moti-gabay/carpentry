import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGet, apiRequest } from '../../constants/Requests';
import { ADD_PRODUCT_ROUTE, DELETE_PRODUCT_ROUTE, EDIT_PRODUCT_ROUTE, PRODUCT_LIST_ROUTE, SET_PRODUCT_INSTOCK_ROUTE } from '../../constants/url';

export const productListRequest = createAsyncThunk(
    "/productListRequest",async (bodyData, thunkAPI) => {
        try {
            const {data} = await apiGet(PRODUCT_LIST_ROUTE,bodyData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
);

export const addProductRequest = createAsyncThunk(
    "/addProductRequest",async (bodyData, thunkAPI) => {
        console.log(bodyData);
        try {
            const {data} = await apiRequest(ADD_PRODUCT_ROUTE, "POST", bodyData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
);

export const deleteProductRequest = createAsyncThunk(
    "/deleteProductRequest",async (id,thunkAPI) => {
        try {
            const {data} = await apiRequest(DELETE_PRODUCT_ROUTE + id, "DELETE");
            return {data,id};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
)

export const editProductRequest = createAsyncThunk(
    "/editProductRequest",async (bodyData,thunkAPI) => {
        try {
            const {data} = await apiRequest(EDIT_PRODUCT_ROUTE + bodyData.id, "PUT", bodyData.data);
            return {data, bodyData};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
)

export const changeInStockRequest = createAsyncThunk(
    "/changeInStockRequest", async (bodyData,thunkAPI) => {
        try {
           const id = bodyData._id;
           const inStock = bodyData.inStock;
           const {data} = await apiRequest(SET_PRODUCT_INSTOCK_ROUTE + bodyData.inStock + "/" + bodyData._id, "PATCH");
           return {data, id, inStock};
        } catch (error) {
           return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
)



const initialState = {
    product: null,
    products: [],
    loading: false,
    error: null,
   // status: false,
}

const ProductSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder) =>{
        builder
        // products list (pending, fullfiled, rejected)
        .addCase(productListRequest.pending, (state,action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(productListRequest.fulfilled, (state,action) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload;
        }).addCase(productListRequest.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        // add product (pending, fullfiled, rejected)
        .addCase(addProductRequest.pending,(state,action) => {
            state.error = null;
            state.loading = true;
            })
        .addCase(addProductRequest.fulfilled,(state,action) => {
            state.error = null;
            state.products.push(action.payload);
            state.loading = false;
        })
        .addCase(addProductRequest.rejected,(state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
        // delete product (pending, fullfiled, rejected)
        .addCase(deleteProductRequest.pending, (state,action) =>{
            state.error = null;
            state.loading = true;
        })
        .addCase(deleteProductRequest.fulfilled, (state,action) =>{
            state.error = null;
            state.loading = false;
            state.products = state.products.filter(item => item._id !== action.payload.id)
        })
        .addCase(deleteProductRequest.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        // edit product (pending, fullfiled, rejected)
        .addCase(editProductRequest.pending,(state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(editProductRequest.fulfilled,(state,action) => {
            state.error = null;
            state.loading = false;
            const { id, data } = action.payload.bodyData;
            state.products = state.products.map(item =>
                item._id === id ? {...item, ...data} : item
            )
        })
        .addCase(editProductRequest.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // change inStock product (pending, fullfiled, rejected)
        .addCase(changeInStockRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(changeInStockRequest.fulfilled, (state,action) => {
            state.error = null;
            state.loading = false;
            state.products = state.products.map(item => (
                item._id === action.payload.id ? {...item, inStock:action.payload.inStock} : item
            ))
        })
        .addCase(changeInStockRequest.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })

    },
    reducers:{
        setProduct:(state, action) => {
            state.product = action.payload;
        },
        resetProduct:(state,action) => {
            state.product = null;
        },
        clearError:(state) =>{
            state.error = null;
        },
    }
})

export const {setProduct, resetProduct, clearError} = ProductSlice.actions;

export default ProductSlice.reducer
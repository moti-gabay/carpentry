import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGet, apiRequest } from '../../constants/Requests';
import { ADD_TO_CART_ROUTE, CHANGE_ITEM_AMOUNT_CART_ROUTE, DELETE_FROM_CART_ROUTE, DELETE_USER_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, TOKEN_KEY, USERS_LIST_ROUTE, USER_INFO_ROUTE } from '../../constants/url';

export const signUpRequest = createAsyncThunk(
    "/signUpRequest",async (bodyData, thunkAPI) => {
        try {
            const {data} = await apiRequest(SIGNUP_ROUTE, "POST", bodyData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
);
export const loginRequest = createAsyncThunk(
    "/loginRequest",async (bodyData,thunkAPI) => {
        try {
            const {data} = await apiRequest(LOGIN_ROUTE, "POST", bodyData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
)
export const usersListRequest = createAsyncThunk(
    "/usersListRequest",async (bodyData,thunkAPI) => {
        try {
            const {data} = await apiGet(USERS_LIST_ROUTE);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
)
export const userInfoRequest = createAsyncThunk(
    "/userInfoRequest",async (bodyData,thunkAPI) => {
        try {
            const {data} = await apiGet(USER_INFO_ROUTE);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err);
        }
    }
)
export const deleteUserRequest = createAsyncThunk(
    "/deleteUserRequest",async (id,thunkAPI) => {
        try {
            const {data} = await apiRequest(DELETE_USER_ROUTE + id, "DELETE");
            return {data, id};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err)
        }
    }
)
export const addItemToCartRequest = createAsyncThunk(
    "/addItemToCartRequest",async (bodyData,thunkAPI) => {
        try {
            const {data} = await apiRequest(ADD_TO_CART_ROUTE, "POST", bodyData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err)
        }
    }
)
export const changeItemAmountInCartRequest = createAsyncThunk(
    "/changeItemAmountInCartRequest",async ({id, amount},thunkAPI) => {
        try {
            console.log(id, amount);
            const {data} = await apiRequest(CHANGE_ITEM_AMOUNT_CART_ROUTE + id + "/" + amount , "PATCH");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err)
        }
    }
)
export const removeItemFromCartRequest = createAsyncThunk(
    "/removeItemFromCartRequest",async (id,thunkAPI) => {
        try {
            const {data} = await apiRequest(DELETE_FROM_CART_ROUTE + id, "DELETE");
            return {data, id};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg_err)
        }
    }
)

// initial state
const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
    status: false,
}

// slice in extra reducer
const UserAuthSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:(builder) =>{
        builder
        // signUp (pending, fullfilled, rejected)
        .addCase(signUpRequest.pending,(state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(signUpRequest.fulfilled,(state,action) => {
            state.error = null;
            state.loading = false;
            if (action.payload._id) {
                state.status = true;
            }
        })
        .addCase(signUpRequest.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = false;
        })
         // login (pending, fullfilled, rejected)
        .addCase(loginRequest.pending,(state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(loginRequest.fulfilled,(state,action) => {
           state.error = null;          
           if (action.payload.token) {
              localStorage.setItem(TOKEN_KEY, action.payload.token);
              state.loading = false;
              state.status = true;
           }   
        })
        .addCase(loginRequest.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.status = false;
        })
        // userInfo (pending, fullfilled, rejected)
        .addCase(userInfoRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(userInfoRequest.fulfilled, (state,action) => {
            state.error = null;
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(userInfoRequest.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
        // users list (pending, fullfilled, rejected)
        .addCase(usersListRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(usersListRequest.fulfilled, (state,action) => {
            state.error = null;
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(usersListRequest.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
        // delete user by admin (pending, fullfilled, rejected)
        .addCase(deleteUserRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(deleteUserRequest.fulfilled, (state,action) => {
            state.error = null;
            state.users = state.users.filter((user) => user._id !== action.payload.id);
            state.loading = false;  
        })
        .addCase(deleteUserRequest.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // add to cart by user (pending, fullfilled, rejected)
        .addCase(addItemToCartRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(addItemToCartRequest.fulfilled, (state,action) => {
            state.error = null;
            state.loading = false;
            state.user.cart.push(action.payload);
        })
        .addCase(addItemToCartRequest.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // change item amount in cart by user (pending, fullfilled, rejected)
        .addCase(changeItemAmountInCartRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(changeItemAmountInCartRequest.fulfilled, (state,action) => {
            state.error = null;
            state.loading = false;
            state.user.cart = action.payload;
        })
        .addCase(changeItemAmountInCartRequest.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // delete from cart by user (pending, fullfilled, rejected)
        .addCase(removeItemFromCartRequest.pending, (state,action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(removeItemFromCartRequest.fulfilled, (state,action) => {
            state.error = null;
            state.loading = false;
            state.user.cart = state.user.cart.filter(item => item._id !== action.payload.id)
        })
        .addCase(removeItemFromCartRequest.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // reset cart by user (pending, fullfilled, rejected)
    },
    // logout, clear error, reset status, --> all in reducers
    reducers:{
        clearError:(state) =>{
            state.error = null;
        },
        resetStatus:(state)=>{
            state.status = false;
        },
        logoutUser:(state) => {
            state.user = null;
            localStorage.removeItem(TOKEN_KEY);
        }
    }
})

export const {clearError, resetStatus, logoutUser} = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
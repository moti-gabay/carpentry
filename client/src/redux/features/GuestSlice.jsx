import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guestCart: [],
}

const GuestSlice = createSlice({
  name:"guestCart",
  initialState,
  reducers: {
    guestGetCart:(state, action) => {
      const guestCart = localStorage.getItem('guestCart');
      state.guestCart = guestCart ? JSON.parse(guestCart) : [];
    },  
    guestAddToCart:(state, action) => {
      let newProduct = action.payload;
      newProduct._id = Date.now();
      state.guestCart.push(newProduct);
      localStorage.setItem("guestCart", JSON.stringify(state.guestCart));
    },
    guestDeleteFromCart:(state, action) => {
      const productId = action.payload
      state.guestCart = state.guestCart.filter(product => product._id !== productId);
      console.log(state.guestCart);
      localStorage.setItem("guestCart", JSON.stringify(state.guestCart));
    },
    guestChangeItemAmount:(state,action) => {
      const productId = action.payload.id;
      const newAmount = action.payload.amount;
      const index = state.guestCart.findIndex(product => product._id == productId);
      const {thickness, length, width, pricePerCm, amount} = state.guestCart[index];
      state.guestCart[index].amount = newAmount;
      state.guestCart[index].price = Math.round((thickness * length * width * state.guestCart[index].amount * pricePerCm) * 100) / 100 ;
      localStorage.setItem("guestCart", JSON.stringify(state.guestCart));
    },
     guestResetCart:(state,action) => {
      localStorage.clear();
      state.guestCart = [];
     }
  },
});


export const {guestGetCart, guestAddToCart, guestDeleteFromCart, guestResetCart, guestChangeItemAmount } = GuestSlice.actions 
export default GuestSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Async thunk action to fetch guest cart from local storage
// export const guestGetCart = createAsyncThunk(
//   'guest/guestGetCart',
//   async (_, { getState }) => {
//     const guestCart = localStorage.getItem('guestCart');
//     return guestCart ? JSON.parse(guestCart) : [];
//   }
// );
// const guestSlice = createSlice({
//   name: 'guest',
//   initialState: {
//     guestCart: [],
//    // status: 'idle',
//     error: null
//   },
//   reducers: {
//     guestAddToCart: (state, action) => {
//       const newProduct = action.payload;
//       newProduct._id = Date.now();
//       state.guestCart.push(newProduct);
//       localStorage.setItem('guestCart', state.guestCart);
//     },
//     guestDeleteFromCart: (state, action) => {
//       const productId = action.payload;
//       state.guestCart = state.guestCart.filter(product => product._id !== productId);
//     },
//     guestResetCart: (state) => {
//       state.guestCart = [];
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(guestGetCart.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(guestGetCart.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.guestCart = action.payload;
//         console.log("sss");
//       })
//       .addCase(guestGetCart.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const { guestAddToCart, guestDeleteFromCart, guestResetCart} = guestSlice.actions;
// export default guestSlice.reducer;
import {configureStore} from '@reduxjs/toolkit'
import guidesReducer from './features/GuidesSlice'
import guestReducer from './features/GuestSlice'
import userAuthReducer from './features/UserAuthSlice' 
import productsReducer from './features/ProductSlice'


const myStore = configureStore({
    reducer:{
       guidesReducer,
       guestReducer,
       userAuthReducer,
       productsReducer
    }
})

export default myStore;
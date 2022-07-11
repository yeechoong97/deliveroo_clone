import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice'

export default store = configureStore({
    reducer: {
        basket: basketReducer
    }
})
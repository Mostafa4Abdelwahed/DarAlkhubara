import { configureStore } from '@reduxjs/toolkit'
import estateReducer from "./Slices/estateSlice"
import cityReducer from "./Slices/citySlice"
import articleReducer from "./Slices/articleSlice"

export const store = configureStore({
  reducer: {
    estate: estateReducer,
    city: cityReducer,
    article: articleReducer
  },
})


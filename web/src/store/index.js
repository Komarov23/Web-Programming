import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "../features/products/products.slice"
import commentsReducer from "../features/comments/comments.slice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        comments: commentsReducer
    },
})

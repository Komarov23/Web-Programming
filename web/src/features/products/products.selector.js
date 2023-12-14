import {createSelector} from "@reduxjs/toolkit";

const selectProductState = (state) => state.products;

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
)

export const selectProduct = (productId) => createSelector(
    selectProductState,
    (state) => state.products.find(({ id }) => id === productId)
)

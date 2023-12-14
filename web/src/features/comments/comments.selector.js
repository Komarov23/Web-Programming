import {createSelector} from "@reduxjs/toolkit";

const selectCommentsState = (state) => state.comments;

export const selectCommentsByProductId = (productId) => createSelector(
    selectCommentsState,
    (state) => state.comments.filter((comment) => comment.productId === productId)
)

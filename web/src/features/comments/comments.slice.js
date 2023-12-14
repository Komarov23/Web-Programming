import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
    name: 'products',
    initialState: {
        comments: []
    },
    reducers: {
        addComment: (state, { payload }) => {
            state.comments = [...state.comments, payload];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addComment } = commentsSlice.actions

export default commentsSlice.reducer

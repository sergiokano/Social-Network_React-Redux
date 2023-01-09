import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentsService";

const initialState = {
  comments: [],
  isLoading: false,
  comment:{}
};

export const createComment = createAsyncThunk("comments/create/", async (commentData) => {
    try {
      return await commentService.createComment(commentData);
    } catch (error) {
      console.error(error);
    }
  });

export const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
      reset: (state) => {
          state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
      builder
    .addCase(createComment.fulfilled, (state, action) => {
      state.comments = [action.payload.comment, ...state.comments];
  });

    },
  });
  
  export const { reset } = commentSlice.actions;
  export default commentSlice.reducer;
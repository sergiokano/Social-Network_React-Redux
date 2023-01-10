import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (_id) => {
  try {
    return await postsService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (description) => {
    try {
      return await postsService.getPostByName(description);
    } catch (error) {
      console.error(error);
    }
  }
);

export const createPost = createAsyncThunk("posts/create", async (postData) => {
  try {
    return await postsService.createPost(postData);
  } catch (error) {
    console.error(error);
  }
});

export const updatePost = createAsyncThunk(
  "posts/update",
  async (data, thunkAPI) => {
    try {
      return await postsService.updatePost(data);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addLike = createAsyncThunk("posts/addLike", async (_id) => {
  try {
      await postsService.addLike(_id);
      return await postsService.getAll();
  } catch (error) {
      console.error(error);
  }
});

export const removeLike = createAsyncThunk("post/removeLike", async(_id)=>{
  try{
    await postsService.removeLike(_id)
    return await postsService.getAll();
  }catch(error){
    console.error(error)
  }
})

export const deletePost = createAsyncThunk("posts/delete", async(_id)=>{
  try{
   await postsService.deletePost(_id)
   return await postsService.getAll();
  }catch(error){
    console.error(error)
  }
})

export const getUserInfo = createAsyncThunk("posts/conectedUser", async()=>{
  try{
   return await postsService.getUserInfo()
  }catch(error){
    console.error(error)
  }
})



export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;

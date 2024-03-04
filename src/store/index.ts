import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducer/chatReducer";

const store=configureStore({reducer:{chat:chatReducer},devTools:true})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
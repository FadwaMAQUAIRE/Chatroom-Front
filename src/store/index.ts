import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducer/chatReducer";
import settingsReducer from "./reducer/settingsReducer";

const store=configureStore({reducer:{chat:chatReducer,settings:settingsReducer},devTools:true})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
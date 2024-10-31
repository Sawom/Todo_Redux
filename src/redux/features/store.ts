import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import { baseApi } from "../api/api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath] : baseApi.reducer,
        todos: todoReducer,
    },
    // from docs => middleware
    middleware: (getDefaultMiddlewares)=>  getDefaultMiddlewares().concat(baseApi.middleware),
});

// 1ta reducer => 1ta state k handle kore
// prottekta action er jnno 1ta kore reducer thakbe.
// reducer e action define korbo
// reducer hisebe slice banabo. 
// slice bolte 1ta part, alada business logic handle kore. 1ta initial state set korte hobe.

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
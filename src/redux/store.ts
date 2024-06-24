import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/Authentication/authSlice";
import { dashboardSlice } from "../features/Dashboard/dashboardSlice"



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        dashboard: dashboardSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

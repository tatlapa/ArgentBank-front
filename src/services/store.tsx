import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)
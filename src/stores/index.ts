import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/features/api'
import { errorMiddleware } from '@/middlewares/errorMiddleware'
import routeReducer from '@/features/routeSlice'
import configReducer from '@/features/configSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    route: routeReducer,
    config: configReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(errorMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

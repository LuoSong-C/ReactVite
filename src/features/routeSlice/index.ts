import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RouteItem } from '@/global.d'

interface RouteState {
  routes: RouteItem[]
}

const initialState: RouteState = {
  routes: [],
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoutes: (state, action: PayloadAction<RouteItem[]>) => {
      state.routes = action.payload
    },
  },
})

export const { setRoutes } = routeSlice.actions
export default routeSlice.reducer

export const selectRoutes = (state: any) => state.route.routes

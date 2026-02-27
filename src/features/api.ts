import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RouteItem } from '@/global.d'
import { TEST_ROUTES } from '@/constants'
import { requestHeaders } from './header'
import { setRoutes } from './routeSlice'

interface IconConfigResponse {
  iconUrl: string
}

interface AppConfigResponse {
  name?: string
  version?: string
  apiUrl?: string
}

let baseUrl = '/mgt'

export const setBaseUrl = (url: string) => {
  baseUrl = url
}

export const getBaseUrl = () => baseUrl

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => requestHeaders(headers),
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['IconConfig', 'AppConfig', 'Routes'],
  endpoints: (builder) => ({
    getIconConfig: builder.query<IconConfigResponse, void>({
      query: () => ({
        url: '/icon/config',
        method: 'GET',
      }),
      providesTags: ['IconConfig'],
      transformResponse: (response: { data: IconConfigResponse }) => response.data,
    }),
    getAppConfig: builder.query<AppConfigResponse, void>({
      query: () => ({
        url: '/app/config',
        method: 'GET',
      }),
      providesTags: ['AppConfig'],
      transformResponse: (response: { data: AppConfigResponse }) => response.data,
    }),
    getRoutes: builder.query<RouteItem[], void>({
      queryFn: async (_, __, ___, baseQuery) => {
        const result = await baseQuery({
          url: '/routes',
          method: 'POST',
        })
        if (result.error) {
          return { data: TEST_ROUTES }
        }
        return { data: (result.data as { data: RouteItem[] }).data || TEST_ROUTES }
      },
      providesTags: ['Routes'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setRoutes(data))
        } catch {
          dispatch(setRoutes(TEST_ROUTES))
        }
      },
    }),
  }),
})

export const { useGetIconConfigQuery, useGetAppConfigQuery, useGetRoutesQuery } = api

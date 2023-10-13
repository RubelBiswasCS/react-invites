import { createApi } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../configs/app.config'
import { getAuthToken } from '../../utils/utils'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios from 'axios'
import type { AxiosError } from 'axios'

export const axiosBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<
    any,
    unknown,
    unknown
  > => async ({ url, method, data, params, headers, ...rest }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params, headers: { Authorization: `Bearer ${ getAuthToken() }`, ...headers }, ...rest })
      return { data: result?.data }
    } catch (axiosError: any) {
      const err: any = axiosError as AxiosError
      window.location.href = '/login'
      localStorage.clear()
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? {},
          message: err.message ?? ''
        },
      }
    }
  }

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({})
})

export default baseApi

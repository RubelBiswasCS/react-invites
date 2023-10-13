import { baseApi } from './baseApi'
import { API } from '../../configs/app.config'

export const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['Login'] })
  .injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<any, Partial<any>>({
            query: (body: any) => ({
                url: API.LOGIN,
                method: 'POST',
                data: body,
            }),
            transformResponse: (response: any, meta, arg) => {
                localStorage.setItem('token', response?.access_token ?? '')
                return response ?? null
            },
        })
    })
})

export const { useLoginMutation } = authApi
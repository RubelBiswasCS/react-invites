import { baseApi } from './baseApi'
import { API } from '../../configs/app.config'

export const homeApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['OnboardedUsers', 'InvitedUsers'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getOnboardedUsers: builder.query<any, any>({
        query: (options: any) => ({
          url: `${ API.ONBOARDED_USERS }`,
          method: 'GET',
          params: options?.params ?? {}
        }),
        transformResponse: (response: any, meta, arg) => {
            console.log({ response })
          if (!response || !response?.subscription) {
            return []
          }
          return response?.data ?? []
        },
        providesTags: ['OnboardedUsers']
      }),
      getInvitedUsers: builder.query<any, any>({
        query: (options: any) => ({
          url: `${ API.INVITED_USERS }`,
          method: 'GET',
          params: options?.params ?? {}
        }),
        transformResponse: (response: any, meta, arg) => {
          if (!response || !response?.data) {
            return []
          }
          return response?.data ?? []
        },
        providesTags: ['InvitedUsers']
      })
    })
  })

export const { useGetOnboardedUsersQuery, useGetInvitedUsersQuery } = homeApi
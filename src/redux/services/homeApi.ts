import { baseApi } from './baseApi'
import { API } from '../../configs/app.config'

export const homeApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['Accounts', 'Roles', 'OnboardedUsers', 'InvitedUsers'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAccounts: builder.query<any, any>({
        query: (options: any) => ({
          url: `${ API.ACCOUNTS }`,
          method: 'GET',
          params: options?.params ?? {}
        }),
        providesTags: ['Accounts']
      }),
      getRoles: builder.query<any, any>({
        query: (options: any) => ({
          url: `${ API.ACCOUNTS }/${ options?.uuid }/roles`,
          method: 'GET',
          params: options?.params ?? {}
        }),
        transformResponse: (response: any, meta, arg) => {
          if (!response) {
            return []
          }
          return response?.map((r: any, idx: any) => ({
            ...r,
            key: idx,
            label: r?.name ?? '',
            value: r?.id ?? ''
          }))
        },
        providesTags: ['Roles']
      }),
      inviteUser: builder.mutation<any, Partial<any>>({
        query: (body: any) => ({
            url: `${ API.ACCOUNTS }/${ body?.uuid }/invite-user`,
            method: 'POST',
            data: body?.data ?? {},
        })
    }),
      getOnboardedUsers: builder.query<any, any>({
        query: (options: any) => ({
          url: `${ API.ACCOUNTS }/${ options?.uuid }/users`,
          method: 'GET',
          params: options?.params ?? {}
        }),
        transformResponse: (response: any, meta, arg) => {
          if (!response) {
            return []
          }
          return response?.map((r: any, idx: any) => ({
            ...r,
            key: idx,
            fullname: `${r?.firstName ?? ''} ${ r?.lastName ?? '' }` 
          }))
        },
        providesTags: ['OnboardedUsers']
      }),
      getInvitedUsers: builder.query<any, any>({
        query: (options: any) => ({
          url: `${ API.ACCOUNTS }/${ options?.uuid }/pending-invites`,
          method: 'GET',
          params: options?.params ?? {}
        }),
        transformResponse: (response: any, meta, arg) => {
          if (!response) {
            return []
          }
          return response?.map((r: any, idx: any) => ({
            ...r,
            key: idx,
            invitedByUserName: r?.invitedBy?.username ?? '',
            invitedByName: `${r?.invitedBy?.firstName ?? ''} ${ r?.invitedBy?.lastName ?? '' }`  
          }))
        },
        providesTags: ['InvitedUsers']
      })
    })
  })

export const { useGetOnboardedUsersQuery, useGetRolesQuery, useInviteUserMutation, useGetInvitedUsersQuery, useGetAccountsQuery } = homeApi

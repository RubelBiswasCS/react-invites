import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isInviteUserModalOpen: false,
    selectedTab: 'Users'
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsInviteUserModalOpen: (state, action) => {
      state.isInviteUserModalOpen = action.payload
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload
    }
  }
})

export const { setIsInviteUserModalOpen, setSelectedTab } = homeSlice.actions
export default homeSlice.reducer

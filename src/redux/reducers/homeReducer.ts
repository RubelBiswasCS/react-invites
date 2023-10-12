import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isInviteUserModalOpen: false
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsInviteUserModalOpen: (state, action) => {
      state.isInviteUserModalOpen = action.payload
    }
  }
})

export const { setIsInviteUserModalOpen } = homeSlice.actions
export default homeSlice.reducer
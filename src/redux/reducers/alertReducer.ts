import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    alertState: null
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertState: (state, action) => {
      state.alertState = action.payload
    }
  }
})

export const { setAlertState } = alertSlice.actions
export default alertSlice.reducer

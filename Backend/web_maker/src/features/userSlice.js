import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
}

export const authSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
   setUserInfo: (state, action) => {
    state.name = action.payload.name
   },
   unSetUserInfo: (state, action) => {
    state.payload = action.payload.name
   }
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, unSetUserInfo } = authSlice.actions

export default authSlice.reducer
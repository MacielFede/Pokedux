import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  displayFavorites: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setDisplayFavorites: (state, action) => {
      state.displayFavorites = action.payload
    }
  }
})

export const { setLoading, setDisplayFavorites } = uiSlice.actions

export default uiSlice.reducer

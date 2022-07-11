import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification(state, action) {
      state = action.payload
      return state
    },
    removeNotification(state, action) {
      state = ''
      return state
    }
  },
})

export const { addNotification, removeNotification } = notificationSlice.actions

export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch(addNotification(`you voted '${message}'`))

    setTimeout(() => {
    dispatch(removeNotification())
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer

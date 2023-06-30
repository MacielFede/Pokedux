import { fromJS, setIn } from 'immutable'
import { SET_LOADING } from '../actions/types'

const initialState = fromJS({
  loading: true
})

export const uiOldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      // return { ...state, loading: action.payload }
      return setIn(state, ['loading'], action.payload)
    default:
      return state
  }
}

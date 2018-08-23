import initialState from './initialState'

// Constants
const types = {
  complete: 'COMPLETE',
  incomplete: 'INCOMPLETE'
}

export const setComplete = (id) => (dispatch) => {
  dispatch({
    type: types.complete,
    payload: id
  })
}

export const setIncomplete = (id) => (dispatch) => {
  dispatch({
    type: types.incomplete,
    payload: id
  })
}

// Reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'COMPLETE':
      return state.map(item => (
        item.id === payload
          ? { ...item, checked: true }
          : item
      ))
    case 'INCOMPLETE':
      return state.map(item => (
        item.id === payload
          ? { ...item, checked: false }
          : item
      ))
    default:
      return state
  }
}

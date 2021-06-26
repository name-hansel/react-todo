import { ADD_TASK, GET_TASKS } from '../actions/types'

const initialState = {
  loading: true,
  tasks: [], //id,task,tags,status
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, tasks: [action.payload, ...state.tasks], loading: false
      }
    case GET_TASKS:
      return {
        ...state, tasks: action.payload, loading: false
      }
    default:
      return state
  }
}
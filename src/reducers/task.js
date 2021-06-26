import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_EDIT_TASK, GET_TASKS, EDIT_TASK } from '../actions/types'

const initialState = {
  loading: true,
  tasks: [], //id,task,tags,status
  editTask: null
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
    case COMPLETE_TASK:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map(task => task.id === action.payload ? {
          ...task, isComplete: !task.isComplete
        } : task)
      }
    case SET_EDIT_TASK:
      return {
        ...state,
        loading: false,
        editTask: state.tasks.filter(task => task.id === action.payload ? task : null)[0]
      }

    case EDIT_TASK:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map(task => task.id === action.payload.id ? {
          ...task, text: action.payload.text, tags: action.payload.tags
        } : task)
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        loading: false
      }
    default:
      return state
  }
}
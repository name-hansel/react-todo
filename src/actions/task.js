import { v4 as uuidv4 } from 'uuid';

import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, GET_TASKS, SET_EDIT_TASK, EDIT_TASK, ADD_TAG, LOAD_TAGS, SET_TAG } from "./types";

export const addTask = ({ text, tags }) => dispatch => {
  const task = {
    id: uuidv4(),
    text,
    tags: tags === '' ? [] : tags.trim().split(','),
    isComplete: false
  }

  const tasksInLS = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.tasks) : []

  tasksInLS.unshift(task)

  localStorage.setItem('tasks', JSON.stringify(tasksInLS))

  dispatch({
    type: ADD_TASK,
    payload: task
  })

  dispatch({
    type: ADD_TAG,
    payload: task.tags
  })
}

export const getTasks = (tasks) => dispatch => {
  dispatch({
    type: GET_TASKS,
    payload: tasks
  })
}

export const deleteTask = (id) => dispatch => {
  const tasksInLS = JSON.parse(localStorage.tasks)
  localStorage.setItem('tasks', JSON.stringify(tasksInLS.filter(task => task.id !== id)))

  dispatch({
    type: DELETE_TASK,
    payload: id
  })
}

export const completeTask = (id) => dispatch => {
  const tasksInLS = JSON.parse(localStorage.tasks)
  localStorage.tasks = JSON.stringify(tasksInLS.map(task => task.id === id ? {
    ...task, isComplete: !task.isComplete
  } : task))

  dispatch({
    type: COMPLETE_TASK,
    payload: id
  })
}

export const setEditTask = (id) => dispatch => {
  dispatch({
    type: SET_EDIT_TASK,
    payload: id
  })
}

export const editATask = (id, { text, tags }) => dispatch => {
  tags = tags.trim().split(',')

  const tasksInLS = JSON.parse(localStorage.tasks)
  localStorage.tasks = JSON.stringify(tasksInLS.map(task => task.id === id ? {
    ...task, text, tags
  } : task))

  dispatch({
    type: EDIT_TASK,
    payload: {
      id, text, tags
    }
  })
}

export const loadTags = () => dispatch => {
  if (!localStorage.tasks || localStorage.tasks === null)
    return

  const tasksInLS = JSON.parse(localStorage.tasks)

  const tags = []
  const existingTags = ['Complete', 'Not Complete', 'All']

  tasksInLS.map(task => task.tags.map(tag => !tags.includes(tag) ? tags.unshift(tag) : null))

  existingTags.map(x => tags.unshift(x))

  dispatch({
    type: LOAD_TAGS,
    payload: tags
  })
}

export const setTag = (tag) => dispatch => {
  dispatch({
    type: SET_TAG,
    payload: tag
  })
}
import { v4 as uuidv4 } from 'uuid';

import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, GET_TASKS } from "./types";

export const addTask = ({ text, tags }) => dispatch => {
  const task = {
    id: uuidv4(),
    text,
    tags: tags.trim().split(','),
    isComplete: false
  }

  const tasksInLS = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.tasks) : []

  tasksInLS.unshift(task)

  localStorage.setItem('tasks', JSON.stringify(tasksInLS))

  dispatch({
    type: ADD_TASK,
    payload: task
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
  dispatch({
    type: COMPLETE_TASK,
    payload: id
  })
}
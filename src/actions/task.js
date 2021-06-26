import { v4 as uuidv4 } from 'uuid';

import { ADD_TASK, GET_TASKS } from "./types";

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
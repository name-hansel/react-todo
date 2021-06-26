import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addTask, editATask } from '../actions/task'

const TaskForm = ({ addTask, editTask, editATask }) => {
  useEffect(() => {
    if (editTask != null) {
      setTask({
        text: editTask.text,
        tags: editTask.tags.join()
      })
    }
  }, [editTask])

  const [task, setTask] = useState({
    text: '',
    tags: ''
  })

  return (
    <div className="main-one">
      <form onSubmit={e => {
        e.preventDefault()
        if (editTask === null)
          addTask(task)
        else
          editATask(editTask.id, task)
        setTask({ text: '', tags: '' })
      }}>
        <input
          type="text"
          name="todo"
          id=""
          className="input todo"
          placeholder="Enter your task..."
          value={task.text}
          onChange={e => setTask({ ...task, text: e.target.value })}
        />
        <div className="todo-form">
          <input
            type="text"
            name="tags"
            id=""
            className="input input-tags"
            placeholder="Enter the tags (Comma seperated)"
            value={task.tags}
            onChange={e => setTask({ ...task, tags: e.target.value })}
          />
          <button className="btn btn-plus">
            <i className="fa fa-plus fa-2x"></i>
          </button>
        </div>
      </form>
    </div>
  )
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  editTask: PropTypes.array.isRequired,
  editATask: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  editTask: state.task.editTask
})

export default connect(mapStateToProps, { addTask, editATask })(TaskForm)

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addTask } from '../actions/task'

const TaskForm = ({ addTask, tasks }) => {
  const [task, setTask] = useState({
    text: '',
    tags: ''
  })

  return (
    <div className="main-one">
      <form onSubmit={e => {
        e.preventDefault()
        addTask(task)
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
  tasks: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  tasks: state.task.tasks
})

export default connect(mapStateToProps, { addTask })(TaskForm)

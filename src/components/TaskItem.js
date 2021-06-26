import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteTask, completeTask, setEditTask, loadTags } from '../actions/task'

const TaskItem = ({ task: { id,
  text, tags, isComplete
}, deleteTask, completeTask, setEditTask, loadTags }) => {
  return (
    <div className="task-item-container">
      <div className="task-item-main">
        <div className="task-item-left">
          <button className="btn-small btn-edit" onClick={e => completeTask(id)}>
            <i className={!isComplete ? "far fa-square fa-lg" : "far fa-check-square fa-lg"}></i>
          </button>
          <p className={!isComplete ? "task-item-task" : "task-item-task done"}>{text}</p>
        </div>
        <div className="task-item-right">
          <button className="btn-small btn-edit" onClick={e => setEditTask(id)}>
            <i className="far fa-edit fa-lg"></i>
          </button>
          <button className="btn-small btn-edit" onClick={e => {
            deleteTask(id)
            loadTags()
          }}>
            <i className="far fa-trash-alt fa-lg"></i>
          </button>
        </div>
      </div>
      {tags !== null && tags.length > 0 ? (<div className="task-item-tags-container">
        <p className="task-item-tags">Tags: {tags.join()}</p>
      </div>) : ''}
    </div>
  )
}

TaskItem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
}

export default connect(null, { deleteTask, completeTask, setEditTask, loadTags })(TaskItem)

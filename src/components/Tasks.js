import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TaskItem from './TaskItem'

const Tasks = ({ tasks, currentTag }) => {
  return (
    <div className="todo-container">
      {
        tasks.length > 0 ? (
          <ul key='task-list'>
            {
              tasks.map(t => (t.isComplete && currentTag === 'Complete') || (!t.isComplete && currentTag === 'Not Complete') || (t.tags.includes(currentTag) || currentTag === 'All') ? (<li key={t.id} >
                <TaskItem task={t} />
              </li>) : '')
            }
          </ul>
        ) : (
          <h2 className="heading">No tasks yet. Add one!</h2>
        )
      }
    </div >
  )
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  currentTag: state.task.currentTag
})

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  currentTag: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Tasks)

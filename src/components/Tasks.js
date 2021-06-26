import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TaskItem from './TaskItem'

const Tasks = ({ tasks, tags }) => {
  return (
    <div className="todo-container">
      {
        tasks.length > 0 ? (
          <ul key='task-list'>
            {tasks.map(t => (
              <li key={t.id} ><TaskItem task={t} /></li>
            ))}
          </ul>
        ) : (
          <h2 className="heading">No tasks yet. Add one!</h2>
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  tags: state.task.tags
})

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, {})(Tasks)

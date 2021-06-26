import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TaskItem from './TaskItem'

const Tasks = ({ tasks }) => {

  return (
    <div className="todo-container">
      <ul>
        {tasks.map(t => (
          <li><TaskItem key={t.id} task={t} /></li>
        ))}
      </ul>
    </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  tasks: state.task.tasks
})

export default connect(mapStateToProps, {})(Tasks)

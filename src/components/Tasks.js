import React from 'react'
import PropTypes from 'prop-types'

const Tasks = props => {
  return (
    <div className="todo-container">
      <ul>
        <li>
          <div className="task-item-container">
            <div className="task-item-main">
              <div className="task-item-left">
                <button className="btn-small btn-edit">
                  <i className="far fa-square fa-lg"></i>
                </button>
                <p className="task-item-task">Task 1</p>
              </div>
              <div className="task-item-right">
                <button className="btn-small btn-edit">
                  <i className="far fa-edit fa-lg"></i>
                </button>
                <button className="btn-small btn-edit">
                  <i className="far fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="task-item-tags-container">
              <p className="task-item-tags">Tags: School, Study, Maths</p>
            </div>
          </div>
        </li>

        <li>
          <div className="task-item-container done-div">
            <div className="task-item-main">
              <div className="task-item-left">
                <button className="btn-small btn-edit">
                  <i className="far fa-check-square fa-lg"></i>
                </button>
                <p className="task-item-task done">Task 2</p>
              </div>
              <div className="task-item-right">
                <button className="btn-small btn-edit">
                  <i className="far fa-edit fa-lg"></i>
                </button>
                <button className="btn-small btn-edit">
                  <i className="far fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="task-item-tags-container">
              <p className="task-item-tags">Tags: School, Study, Maths</p>
            </div>
          </div>
        </li>

        <li>
          <div className="task-item-container">
            <div className="task-item-main">
              <div className="task-item-left">
                <button className="btn-small btn-edit">
                  <i className="far fa-square fa-lg"></i>
                </button>
                <p className="task-item-task">Task 3</p>
              </div>
              <div className="task-item-right">
                <button className="btn-small btn-edit">
                  <i className="far fa-edit fa-lg"></i>
                </button>
                <button className="btn-small btn-edit">
                  <i className="far fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="task-item-tags-container">
              {/* <p className="task-item-tags">Tags: School, Study, Maths</p> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

Tasks.propTypes = {

}

export default Tasks

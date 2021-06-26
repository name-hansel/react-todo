import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setTag } from '../actions/task'

const Tags = ({ tags, setTag, currentTag }) => {
  return (
    <section className="section tags">
      <h2 className="heading">TAGS</h2>
      <ul className="tags-list">
        {
          tags && tags.map(tag => (
            <li className="tag" key={tag}>
              <button className={
                tag === currentTag ? 'btn tag active-tag' : 'btn tag'
              } onClick={e =>
                setTag(tag)
              }>{tag}</button>
            </li>
          ))
        }
      </ul>
    </section >
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,

  setTag: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tags: state.task.tags,

  currentTag: state.task.currentTag
})

export default connect(mapStateToProps, { setTag })(Tags)

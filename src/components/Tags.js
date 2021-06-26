import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Tags = ({ tags }) => {
  return (
    <section className="section tags">
      <h2 className="heading">TAGS</h2>
      <ul className="tags-list">
        <li className="tag">
          <button className='btn tag active-tag'>All</button>
        </li>
        <li className="tag">
          <button className='btn tag'>Not Complete</button>
        </li>
        <li className="tag">
          <button className='btn tag'>Complete</button>
        </li>
        {
          tags && tags.map(tag => (
            <li className="tag" key={tag}>
              <button className='btn tag'>{tag}</button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  tags: state.task.tags
})

export default connect(mapStateToProps)(Tags)

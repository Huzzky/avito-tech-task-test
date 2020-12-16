import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import formatingDate from '../../../utils/formatingDate'

const ModalComments = ({ comments }) => {
  console.log(comments.length)
  if (comments.length === 0) {
    return <h2>Здесь нет комментариев. Ты можешь быть первым.</h2>
  } else {
    return comments.map((index, key) => {
      return (
        <div key={key}>
          <p>{formatingDate(index.date)}</p>
          <h3>{index.text}</h3>
        </div>
      )
    })
  }
}

ModalComments.propTypes = {
  comments: PropTypes.array,
}

const mapStoreToProps = (store) => {
  return {
    comments: store.PhotoAppReducer.dataComments.comments,
  }
}

export default connect(mapStoreToProps)(ModalComments)

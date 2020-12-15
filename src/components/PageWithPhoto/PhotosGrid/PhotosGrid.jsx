import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles/index.scss'

const PhotosGrid = ({ data }) => {
  return (
    <div className="block-photos">
      <div className="block-photos__block-grid">
        {data.map((index, key) => {
          console.log(index, key)
          return (
            <div key={key}>
              <img width="100%" src={index.url} alt={index.id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

PhotosGrid.propTypes = {
  data: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => {
  return {
    data: store.PhotoAppReducer.dataPhotos,
  }
}

export default connect(mapStateToProps)(PhotosGrid)

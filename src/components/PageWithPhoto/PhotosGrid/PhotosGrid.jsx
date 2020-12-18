import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles/_index.scss'
import { selectPhoto } from '../../../store/acitions/selectImage'

const PhotosGrid = memo(({ data, selectPhoto }) => {
  return (
    <div className="block-photos">
      <div className="block-photos__block-grid">
        {data.map((index, key) => {
          return (
            <div key={key}>
              <img
                onClick={() => {
                  selectPhoto(index.id)
                }}
                src={index.url}
                alt={index.id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
})

PhotosGrid.propTypes = {
  data: PropTypes.array,
  selectPhoto: PropTypes.func,
}

const mapStateToProps = (store) => {
  return {
    data: store.PhotoAppReducer.dataPhotos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectPhoto: (id) => dispatch(selectPhoto(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosGrid)

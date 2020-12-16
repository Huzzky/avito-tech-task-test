import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Header } from './components/Header/Header'
import PageWithPhotos from './components/PageWithPhoto/PageWithPhotos'
import { getPhotosFromApi } from './store/acitions/getAPI/getPhotosFromApi'

const App = (props) => {
  useLayoutEffect(() => {
    props.getPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null])

  return (
    <div className="App">
      <Header />
      <PageWithPhotos />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => dispatch(getPhotosFromApi()),
})

export default connect(null, mapDispatchToProps)(App)

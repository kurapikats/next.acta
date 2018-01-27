import React, { Component, Fragment } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

class MainLayout extends Component {
  componentDidMount() {
    $('body').addClass('animated fadeIn')
  }

  render() {
    return (
      <Fragment>
        <Header />

        {this.props.children}

        <Footer />

        <style jsx>{`
          body {
            opacity: 0;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default MainLayout
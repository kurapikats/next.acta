import React, { Component, Fragment } from 'react'
import Head from 'next/head'

import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'

class Header extends Component {
  componentDidMount() {
    $('.button-sidenav').sideNav({
      edge: 'right',
      closeOnClick: true,
      draggable: true,
    })
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Acta Medica Philippina : The National Health Science Journal</title>
          <meta name="description" content="Acta Medica Philippina Official Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        </Head>

        <NavBar />
        <SideNav />
      </Fragment>
    )
  }
}

export default Header
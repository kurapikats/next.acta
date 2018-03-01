import React, { Component } from 'react';
import Link from 'next/link';

class NavBar extends Component {
  componentDidMount() {
    $('.dropdown-button').dropdown({
      constrainWidth: false
    });
    $('.button-collapse').sideNav();

    $('.nav-wrapper .right').addClass('animated fadeIn');
    $('.scrollspy').scrollSpy();
  }

  render() {
    return (
      <div id="top" className="scrollspy navbar-fixed">
        <ul id="archives" className="dropdown-content">
          <li>
            <a href="#!">1989 - 2007</a>
          </li>
          <li>
            <a href="#!">2017</a>
          </li>
          <li>
            <a href="#!">2016</a>
          </li>
          <li>
            <a href="#!">2015</a>
          </li>
          <li>
            <a href="#!">2014</a>
          </li>
          <li>
            <a href="#!">2013</a>
          </li>
          <li>
            <a href="#!">2012</a>
          </li>
          <li>
            <a href="#!">2011</a>
          </li>
          <li>
            <a href="#!">2010</a>
          </li>
          <li>
            <a href="#!">2019</a>
          </li>
          <li>
            <a href="#!">2008</a>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper maroon">
            <Link prefetch href="/">
              <a
                style={{ marginLeft: 10 }}
                className="brand-logo left waves-effect"
                prefetch
                href="#"
              >
                AMP Logo
              </a>
            </Link>
            <ul className="right">
              <li>
                <Link prefetch href="/page-2">
                  <a className="waves-effect">Subscriptions</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/page-2">
                  <a className="waves-effect">Membership</a>
                </Link>
              </li>
              <li>
                <a href="#contact" className="waves-effect">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="dropdown-button"
                  href="#!"
                  data-activates="archives"
                >
                  Archives<i className="material-icons right">
                    arrow_drop_down
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  data-activates="slide-out"
                  className="button-sidenav waves-effect"
                >
                  <i className="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <style jsx>{`
          .nav-wrapper .right {
            opacity: 0;
          }
          .maroon {
            background-color: #600521;
          }
        `}</style>
      </div>
    );
  }
}

export default NavBar;

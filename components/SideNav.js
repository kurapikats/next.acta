import React, { Fragment } from 'react';
import Link from 'next/link';

const SideNav = () => (
  <Fragment>
    <ul id="slide-out" className="side-nav">
      <li>
        <div className="user-view">
          <div className="background bg">&nbsp;</div>
          <a href="#!user">
            <img
              className="circle"
              src="/static/img/onin-profile-pic.jpg"
              alt="Onin"
            />
          </a>
          <a href="#!name">
            <span className="white-text name">
              Jesus B. Nana (0908 215 0659)
            </span>
          </a>
          <a href="#!email">
            <span className="white-text email">jesus.nana@gmail.com</span>
          </a>
        </div>
      </li>
      <li>
        <a href="#software-development" className="waves-effect right-align">
          Home
        </a>
      </li>
      <li>
        <Link prefetch href="/page-2">
          <a className="waves-effect right-align">Message from the Editor</a>
        </Link>
      </li>
      <li>
        <a href="#professional-attributes" className="waves-effect right-align">
          Guest Editorials
        </a>
      </li>
      <li>
        <a href="#work-experiences" className="waves-effect right-align">
          Editorial Board
        </a>
      </li>
      <li>
        <a href="#certifications" className="waves-effect right-align">
          Editorial Staff
        </a>
      </li>
      <li>
        <a href="#projects" className="waves-effect right-align">
          About Us
        </a>
      </li>
      <li>
        <a href="#educational-attainments" className="waves-effect right-align">
          Peer Reviewers
        </a>
      </li>
      <li>
        <a href="#character-references" className="waves-effect right-align">
          Instructions to Authors
        </a>
      </li>
      <li>
        <a href="#character-references" className="waves-effect right-align">
          Specialty Issues
        </a>
      </li>
      <li>
        <a href="#contact" className="waves-effect right-align">
          Logout
        </a>
      </li>
    </ul>
    <style jsx>{`
      .bg {
        background-color: #600521;
        background-image: radial-gradient(
            white,
            rgba(255, 255, 255, 0.2) 2px,
            transparent 40px
          ),
          radial-gradient(
            white,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 30px
          ),
          radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
          radial-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.1) 2px,
            transparent 30px
          );
        background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
        background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
      }
    `}</style>
  </Fragment>
);

export default SideNav;

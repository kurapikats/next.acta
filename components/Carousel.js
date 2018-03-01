import React, { Component, Fragment } from 'react';

export default class Carousel extends Component {
  componentDidMount() {
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true
    });
  }

  render() {
    return (
      <div className="carousel carousel-slider">
        <a className="carousel-item" href="#one!">
          <img src="/static/img/1.jpg" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src="/static/img/2.jpg" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src="/static/img/3.jpg" />
        </a>
        <a className="carousel-item" href="#four!">
          <img src="/static/img/4.jpg" />
        </a>
      </div>
    );
  }
}

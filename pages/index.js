import React, { Component, Fragment } from 'react';

import MainLayout from '../layouts/MainLayout';
import CurrentIssue from '../components/CurrentIssue';
import Carousel from '../components/Carousel';
import NewsEvents from '../components/NewsEvents';
import Annoucement from '../components/Annoucement';

export default class Home extends Component {
  render() {
    return (
      <MainLayout>
        <div className="row">
          <div className="col s12 m12 l6">
            <Carousel />
          </div>
          <div className="col s12 m6 l3">
            <NewsEvents />
          </div>
          <div className="col s12 m6 l3">
            <Annoucement />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l9">
            <CurrentIssue />
          </div>
          <div className="col s12 m12 l3">
            <img
              className="materialboxed"
              data-caption="A sample image 5"
              width="100%"
              src="/static/img/5.jpg"
            />

            <div className="card horizontal">
              <div className="card-image" style={{ width: '42%' }}>
                <img src="/static/img/7.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    A Case of a 53 year-old Woman with SLE-Dermatomyositis
                    Overlap.
                  </p>
                  <br />
                  <p className="right-align">Agnes D. Mejia, MD</p>
                </div>
                <div className="card-action right-align">
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l4">
            <div className="card blue-grey">
              <div className="card-content white-text">
                <span className="card-title">Commentary</span>
                <p>
                  Do we really need a Policy on Folic Acid Supplementation and
                  Fortification?
                </p>
                <p className="right-align">Carmencita D. Padilla</p>
              </div>
              <div className="card-action right-align">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l4">
            <div className="card blue-grey">
              <div className="card-content white-text">
                <span className="card-title">Special Article</span>
                <p>
                  Volunteer Youth Leaders for Health - Philippines: Providing a
                  Mechanism for Youth Empowerment towards Advocacy for Birth
                  Defects Prevention and Care
                </p>
                <p className="right-align">Carmencita D. Padilla</p>
              </div>
              <div className="card-action right-align">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l4">
            <div className="card blue-grey">
              <div className="card-content white-text">
                <span className="card-title">Invited Article</span>
                <p>A Review of Craniofacial Syndromes</p>
                <p className="right-align">Michelle D. Lingao</p>
              </div>
              <div className="card-action right-align">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

import React from 'react';

export default () => (
  <footer id="contact" className="page-footer blue section scrollspy">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <p className="grey-text text-lighten-4">
            PM 202, 2nd Floor, Paz Mendoza Building, UP College of Medicine<br />
            University of the Philippines, College of Medicine<br />
            547 Pedro Gil Street, P.O Box 593<br />
            Manila 1000, Philippines
          </p>

          <p>
            Telefax #: (632) 353-0990<br />
            E-mail:{' '}
            <a
              href="mailto:editor@actamedicaphilippina.com.ph"
              className="white-text"
            >
              editor@actamedicaphilippina.com.ph
            </a>
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Follow Us on</h5>
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Facebook
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Twitter
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Youtube
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                RSS Feed
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        &copy; 2009 - 2018 All Rights Reserved
        <a className="grey-text text-lighten-4 right" href="#!">
          ISSN 2094-9278
        </a>
      </div>
    </div>
  </footer>
);

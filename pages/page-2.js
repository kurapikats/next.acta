import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import MainLayout from '../layouts/MainLayout';

export default class Home extends Component {
  render() {
    return (
      <MainLayout>
        <nav>
          <div className="nav-wrapper green darken-2">
            <div className="row">
              <div className="col s12">
                <Link href="/">
                  <a className="breadcrumb">Home</a>
                </Link>
                <a className="breadcrumb">Message from the Editor</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col s12 m12 l12">
            <h4>Thoughts for an Ending – Part 1</h4>
            <p>
              <img
                className="circle"
                style={{ float: 'left', marginRight: 10 }}
                src="http://www.actamedicaphilippina.com.ph/sites/default/files/pictures/dr-avila.png"
              />
              This is the last editorial I am to write for the Acta Medica
              Philippina. I have written about fifty of them. Most of them dealt
              with publication and editorial issues in our country, and the
              difficulties that one has to deal with in trying to come up with a
              journal of international caliber and good enough to be at par with
              the rest of them. Medical journal publication in a third world
              country like the Philippines, particularly in a university and
              government setting is full of challenges. These challenges need
              not even be there, if only the needs and requirements, and
              importance of such an endeavor are clearly understood. And these
              are the things that an editor must deal with, in addition to the
              grind of administering research articles that must be evaluated on
              his or her desk on a daily basis.
            </p>
            <p>
              The lack of a culture of publication is an important issue in this
              country which has to be faced and dealt with. Researchers and
              thesis writers are everywhere, which is actually a good thing. The
              problem is converting these voluminous tomes into actual research
              articles that is in publishable form. This is where many authors
              balk at the prospect of converting their thick manuscripts into
              concise to the point articles. But these are the forms that are
              widely distributed and read. And this is what our researchers and
              writers must learn to do. Perhaps we should hire professionals who
              are good at doing this and convert all these theses into more
              manageable pieces of information and abstracts. Perhaps we should
              require these researchers to prepare two types of written reports:
              a thesis-type and a journal-type ready to publish form. Perhaps we
              should also teach them how to follow “instructions to authors”
              while we’re at it.
            </p>
            <p>
              The Acta receives dozens of articles per month, more than at any
              time in its more than 75 years of existence. We have always
              reiterated that one of the most important requirements is that the
              instructions to authors that we have must be followed strictly.
              Actually, this is the first thing that an author must pay
              attention to everytime he wants to publish an article in a
              particular journal. Unfortunately, despite our pleadings and
              reminders, this is hardly ever followed in the Acta, which causes
              considerable delays (the articles are returned and authors are
              asked to comply!). In other big-time journals, failure to follow
              is tantamount to immediate rejection. But we still don’t have that
              luxury in the Acta and we patiently remind our valuable
              contributors that we have standards that need to be followed since
              we are already indexed internationally, and that basic minimal
              publication requirements must be met!
            </p>
            <p>
              The troublesome areas are the bibliographic entries and the
              ethical clearances required for the articles that are submitted.
              There are just too many errors and omissions in the bibliographic
              entries that appear to have been done so hurriedly; page entries
              are missing, volumes are wrong, and website citations are not up
              to date. The ethics requirements is another problem; actually,
              many articles that involve human subjects have not been cleared by
              an ethics committee! One wonders if this is again, an offshoot of
              the absence of a publication culture in our midst. (second part of
              this article to follow in the last quarter issue).
            </p>
            <p className="right-align">
              <strong>Jose Ma. C. Avila, MD</strong>
              <br />
              Editor-in-Chief
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }
}

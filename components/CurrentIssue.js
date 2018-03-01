import React, { Component, Fragment } from 'react';

export default class CurrentIssue extends Component {
  componentDidMount() {
    $('ul.tabs').tabs();
    $('.tooltipped').tooltip({ delay: 50 });
  }

  render() {
    return (
      <Fragment>
        <div className="col s12">
          <h5 className="">Volume 51 No. 3 (Genetics Issue)</h5>
          <ul className="tabs">
            <li className="tab">
              <a href="#original_article" className="blue-text">
                Original Articles
              </a>
            </li>
            {/* <li className="tab">
              <a href="#commentary" className="blue-text">
                Commentary
              </a>
            </li>
            <li className="tab">
              <a href="#special_article" className="blue-text">
                Special Article
              </a>
            </li>
            <li className="tab">
              <a href="#invited_article" className="blue-text">
                Invited Article
              </a>
            </li> */}
            <li className="tab">
              <a href="#case_reports" className="blue-text">
                Case Reports
              </a>
            </li>
          </ul>
        </div>
        {/*
        <div id="commentary" className="col s12">
          <ul className="collection">
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id_carmencita_david_padilla.jpg"
                alt=""
                data-tooltip="Carmencita D. Padilla"
                className="circle tooltipped"
              />
              <span className="title">
                Do we really need a Policy on Folic Acid Supplementation and
                Fortification?
              </span>
              <p>Carmencita D. Padilla</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="special_article" className="col s12">
          <ul className="collection">
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id_carmencita_david_padilla.jpg"
                alt=""
                data-tooltip="Carmencita D. Padilla"
                className="circle tooltipped"
              />
              <span className="title">
                Volunteer Youth Leaders for Health - Philippines:<br />
                Providing a Mechanism for Youth Empowerment towards Advocacy for
                Birth Defects Prevention and Care
              </span>
              <p>Carmencita D. Padilla</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="invited_article" className="col s12">
          <ul className="collection">
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-mich-lingao.jpg"
                alt=""
                data-tooltip="Michelle D. Lingao"
                className="circle tooltipped"
              />
              <span className="title">A Review of Craniofacial Syndromes</span>
              <p>Michelle D. Lingao</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
          </ul>
        </div>
        */}
        <div id="original_article" className="col s12">
          <ul className="collection">
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-eva-cutiongco-delapaz.jpg"
                alt=""
                data-tooltip="Eva Maria Cutiongco-de la Paz"
                className="circle tooltipped"
              />
              <span className="title">
                The Prevalence of CYP2D6 Gene Polymorphisms among Filipinos and
                their use as Biomarkers for Lung Cancer Risk
              </span>
              <p>Eva Maria Cutiongco-de la Paz</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-michelle-abadingo.jpg"
                alt=""
                data-tooltip="Michelle E. Abadingo"
                className="circle tooltipped"
              />
              <span className="title">
                Etiology of Hydrops Fetalis at the Philippine General Hospital:
                A Retrospective Study
              </span>
              <p>Michelle E. Abadingo and Maria Melanie Liberty B. Alcausin</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id_carmencita_david_padilla.jpg"
                alt=""
                data-tooltip="Carmencita D. Padilla"
                className="circle tooltipped"
              />
              <span className="title">
                Birth Defects at the Outpatient Department of the Philippine
                General Hospital from 2000-2010
              </span>
              <p>Carmencita D. Padilla</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-ebner-bon-maceda.jpg"
                alt=""
                data-tooltip="Ebner Bon G. Maceda"
                className="circle tooltipped"
              />
              <span className="title">
                Prevalence of Birth Defects among Neonates Born at the
                Philippine General Hospital from 2011 to 2014
              </span>
              <p>Ebner Bon G. Maceda</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="case_reports" className="col s12">
          <ul className="collection">
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-mary-ann-abacan.jpg"
                alt=""
                data-tooltip="Mary Ann R. Abacan"
                className="circle tooltipped"
              />
              <span className="title">
                Two Filipino Children with Oromandibular Limb Hypogenesis
                Spectrum
              </span>
              <p>Mary Ann R. Abacan</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle">folder</i>
              <img
                src="/static/img/ids/id-maryn-anne-chiong.jpg"
                alt=""
                data-tooltip="Mary Anne D. Chiong"
                className="circle tooltipped"
              />
              <span className="title">
                Late Infantile Neuronal Ceroid Lipofuscinosis in a Filipino
                Child with Epilepsy and Progressive Neurodegeneration
              </span>
              <p>Mary Anne D. Chiong</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-cristine-lopez.jpg"
                alt=""
                data-tooltip="Cristine P. Lopez"
                className="circle tooltipped"
              />
              <span className="title">
                L-2-Hydroxyglutaric Aciduria – a Rare Type of Organic Aciduria
                Presenting as Seizures and<br /> Developmental Delay in a
                Filipino Child
              </span>
              <p>Cristine P. Lopez</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="/static/img/ids/id-ma-am-joy-tumulak.jpg"
                alt=""
                data-tooltip="Ma-Am Joy R. Tumulak"
                className="circle tooltipped"
              />
              <span className="title">
                A Case of Beals Syndrome in a Filipino Child
              </span>
              <p>Ma-Am Joy R. Tumulak</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">file_download</i>
              </a>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .collection-item .title {
            font-weight: bold;
          }
        `}</style>
      </Fragment>
    );
  }
}

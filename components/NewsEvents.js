export default () => (
  <div className="card sticky-action">
    <div className="card-image">
      <img src="/static/img/6.jpg" />
      <span className="card-title">News and Events</span>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        AMP Mobile Apps<i className="material-icons right">more_vert</i>
      </span>
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to use
        effectively.
      </p>
    </div>
    <div className="card-action right-align">
      <a href="#">Read more</a>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
        AMP Mobile Apps<i className="material-icons right">close</i>
      </span>
      <p>additional content here... </p>
    </div>
  </div>
);

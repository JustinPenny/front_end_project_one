import './feature.css';

const Feature = ({ title, text }) => (
  <div className="content__features-container__feature">
    <div className="content__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="content__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
import "./most-popular.css";

export default function MonstPopular(props) {
  return(
    <div className="section-wrapper rounded-5 mt-5">
      <div className="section-header">
        <h4 className="fs-2 fw-bolder">
          <span className="text-decoration-underline">Most Popular </span>
          <em className="text-decoration-none">Right Now</em>
        </h4>
      </div>
      <div className="row popular-items">
        <div className="col-md-6 col-lg-3 item">
          <div className="item-card rounded-5">
            
          </div>
        </div>
      </div>
    </div>
  );
}
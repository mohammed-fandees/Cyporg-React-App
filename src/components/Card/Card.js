import "./card.css";

import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="col-md-6 col-lg-3 item">
      <div className="item-card rounded-5 mb-4">
        <div className="image overflow-hidden rounded-4">
          <img className="img-fluid" src={props.img} />
        </div>
        <div className="text mt-3 d-flex justify-content-between">
          <h4 className="text-capitalize">
            {props.name}{" "}
            <span className="mt-2 fw-normal d-block">{props.type}</span>
          </h4>
          <ul>
            <li>
              <FaStar className="star" /> {props.rate}
            </li>
            <li>
              <FaDownload className="download" /> {props.downloads}M
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

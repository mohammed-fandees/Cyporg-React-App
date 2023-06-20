import "./card.css";

import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import GameMainDetails from "../GameMainDetails/GameMainDetails";

export default function Card(props) {
  return (
    <div className="col-md-6 col-lg-3 item">
      <div className="item-card rounded-5 mb-4">
        <div className="image overflow-hidden rounded-4">
          <img className="img-fluid" src={props.img} />
        </div>
        <div className="text mt-3 d-flex justify-content-between">
          <GameMainDetails name={props.name} type={props.type} />
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

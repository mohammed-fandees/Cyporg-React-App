import { FaDownload } from "react-icons/fa";
import { GameMainDetails, All } from "../index";
import "./top-downloaded-games.css";

export default function TopDownloadedGames(props) {
  return (
    <li className="col-12 pb-4 mb-4 game-item">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-sm-3 d-flex justify-content-center mb-3 mb-md-0">
          <div className="image rounded-4 overflow-hidden">
            <img className="img-fluid" src={props.img} alt={props.alt} />
          </div>
        </div>

        <div className="col-xl-6 col-lg-5 col-sm-7 d-flex justify-content-center">
          <div className="game-data flex-column">
            <GameMainDetails name={props.name} type={props.type} />
            <All mode="row" className="d-flex flex-row" rate={props.rate} downloads={props.downloads} />
          </div>
        </div>

        <div className="col-xl-2 col-lg-2 col-sm-2 d-flex justify-content-center">
          <div className="mt-3">
            <a className="download-button d-flex justify-content-center align-items-center rounded-pill " href=" #">
              <FaDownload />
            </a>
          </div>
        </div>

      </div>
    </li>
  );
}

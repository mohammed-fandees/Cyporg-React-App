import "./game.css";

import { GamesLibraryData } from "../../data/GamesLibraryData";
import { MainButton, GameMainDetails } from "../../components/index";



export default function Game(props) {
  
  let gameState;
  GamesLibraryData.map(game => {
    gameState = game.state? "installed" : "not installed";
  });
  
  return (
    <div className="game-item mb-3 pb-3">
      <ul className="row d-flex align-items-center">
        <li className="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-start align-items-center mt-3 mt-lg-0">
          <div className="image overflow-hidden rounded-4">
            <img className="img-fluid" src={props.img} />
          </div>
        </li>
        <li className="col-lg-2 col-md-6 col-sm-6 mt-3 mt-lg-0 text-center text-md-start">
          <GameMainDetails name={props.name} type={props.type} />
        </li>

        <li className="col-lg-2 col-md-6 col-sm-6 mt-3 mt-lg-0 text-center text-md-start">
          <h4 className="text-capitalize">
            date added
            <span className="mt-2 fw-normal d-block">{props.date_added}</span>
          </h4>
        </li>
        <li className="col-lg-2 col-md-6 col-sm-6 mt-3 mt-lg-0 text-center text-md-start">
          <h4 className="text-capitalize">
            hours played
            <span className="mt-2 fw-normal d-block">{props.hours_played}</span>
          </h4>
        </li>
        <li className="col-lg-2 col-md-6 col-sm-6 mt-3 mt-lg-0 text-center text-md-start">
          <h4 className="text-capitalize">
            currently
            <span className="mt-2 fw-normal d-block">{gameState}</span>
          </h4>
        </li>
        <li className="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-start align-items-center mt-3 mt-lg-0">
          <MainButton class="second-btn d-block text-capitalize" reference="#">install</MainButton>
        </li>
      </ul>
    </div>
  )
}
import "./game.css";

import { GamesLibraryData } from "../../data/GamesLibraryData";
import { MainButton, GameMainDetails } from "../../components/index";
import { OtherDetails } from "../GameMainDetails/GameMainDetails";


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
        <OtherDetails value={props.date_added}>date added</OtherDetails>
        <OtherDetails value={props.hours_played}>hours played</OtherDetails>
        <OtherDetails value={gameState}>currently</OtherDetails>
        <li className="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-start align-items-center mt-3 mt-lg-0">
          <MainButton class="second-btn d-block text-capitalize" reference="#">install</MainButton>
        </li>
      </ul>
    </div>
  )
}
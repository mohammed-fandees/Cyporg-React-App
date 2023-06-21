import "./game.css";

import { MainButton, GameMainDetails } from "../../components/index";
import { OtherDetails } from "../GameMainDetails/GameMainDetails";


export default function Game(props) {
  
  
  let gameState = props.state, 
    state, 
    mode;
  
  if (gameState) {
    state = "installed";
    mode = "installed";
  } else {
    state = "not installed";
    mode = "install"
  }

  let item = <OtherDetails value={state}>currently</OtherDetails>
  
  return (
    <div className="game-item mb-3 pb-3">
      <ul className="row d-flex align-items-center">
        <li className="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-start align-items-center mt-3 mt-lg-0">
          <div className="image overflow-hidden rounded-4">
            <img className="img-fluid" alt="game-img" src={props.img} />
          </div>
        </li>
        <li className="col-lg-2 col-md-6 col-sm-6 mt-3 mt-lg-0 text-center text-md-start">
          <GameMainDetails name={props.name} type={props.type} />
        </li>
        <OtherDetails value={props.date_added}>date added</OtherDetails>
        <OtherDetails value={props.hours_played}>hours played</OtherDetails>
        {item}
        <li className="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-start align-items-center mt-3 mt-lg-0">
          <MainButton class={`second-btn d-block text-capitalize ${mode}`} reference="#">{mode}</MainButton>
        </li>
      </ul>
    </div>
  )
}
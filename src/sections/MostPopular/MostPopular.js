import "./most-popular.css";
import { Card } from "../index";

// Images
import img1 from "../../assets/imgs/popular-01.jpg";
import img2 from "../../assets/imgs/popular-02.jpg";
import img3 from "../../assets/imgs/popular-03.jpg";
import img4 from "../../assets/imgs/popular-04.jpg";
import img5 from "../../assets/imgs/popular-05.jpg";
import img6 from "../../assets/imgs/popular-06.jpg";
import img7 from "../../assets/imgs/popular-07.jpg";
import img8 from "../../assets/imgs/popular-08.jpg";


export default function MonstPopular(props) {
  return(
    <div className="section-wrapper rounded-5 mt-5">
      <div className="section-header mb-4">
        <h4 className="fs-2 fw-bolder">
          <span className="text-decoration-underline">Most Popular </span>
          <em className="text-decoration-none">Right Now</em>
        </h4>
      </div>
      <div className="row popular-items">
       <Card name="fortnite" type="sandbox" rate="4.8" downloads="2.3" img={img1}></Card>
       <Card name="pubg" type="battle-X" rate="4.6" downloads="1.8" img={img2}></Card>
       <Card name="dota 2" type="stream-X" rate="4.9" downloads="3.1" img={img3}></Card>
       <Card name="CS-GO" type="legendary" rate="4.7" downloads="8.4" img={img4}></Card>
       <Card name="minin craft" type="legendary" rate="4.0" downloads="1.7" img={img5}></Card>
       <Card name="eagles fly" type="matrix" rate="3.9" downloads="1.0" img={img6}></Card>
       <Card name="warface" type="max 3D" rate="4.1" downloads="4.3" img={img7}></Card>
       <Card name="warcraft" type="legend" rate="4.2" downloads="5.5" img={img8}></Card>
      </div>
    </div>
  );
}
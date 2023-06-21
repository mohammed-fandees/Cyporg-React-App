import "./details-content.css";
import { Container, SectionWrapper } from "../index";
import { GameMainDetails, PlayButton, All } from "../../components/index";

import fortnite from "../../assets/imgs/feature-left.jpg"
import liveStream from "../../assets/imgs/feature-right.jpg"

export default function DetailsContent() {
  return (
    <main>
    <div className="container text-white">
      <Container>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <div className="image rounded-5 overflow-hidden">
              <img src={fortnite} className="img-fluid" alt="fortnite"/>
            </div>
          </div>
          <div className="col-lg-8">
              <div className="image rounded-5 overflow-hidden position-relative">
                <PlayButton reference="/#"></PlayButton>
                <img src={liveStream} className="img-fluid" alt="Live Now"/>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="fortnite-details my-5 text-center text-uppercase fw-bolder">fortnite details</h2>
          </div>
        </div>
        <SectionWrapper>
          <div className="row">
            <div className="col-lg-6">
              <SectionWrapper class="section-wrapper-card">
                <div className="d-flex justify-content-between">
                  <GameMainDetails name="Fortnite" type="Sandbox" />
                  <All rate="4.8" downloads="2.3" />
                </div>
              </SectionWrapper>
            </div>
            <div className="col-lg-6">
              <SectionWrapper class="section-wrapper-card">

              </SectionWrapper>
            </div>
          </div>
        </SectionWrapper>
      </Container>
    </div>
  </main>
  )
}

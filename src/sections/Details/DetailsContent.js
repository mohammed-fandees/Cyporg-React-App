import "./details-content.css";
import { Container, SectionHeader, SectionWrapper } from "../index";
import { GameMainDetails, PlayButton, All, SideDetails, DetailsImages, MainButton, RelatedGames } from "../../components/index";
import { SideDetailsData, DetailsImagesData, RelatedGamesData} from "../../data/index";

import fortnite from "../../assets/imgs/feature-left.jpg"
import liveStream from "../../assets/imgs/feature-right.jpg"

export default function DetailsContent() {
  let items = SideDetailsData.map(item => {
    return <SideDetails icon={item.icon} content={item.content} />;
  });

  let images = DetailsImagesData.map(image => {
    return <DetailsImages key={image.id} img={image.img_url} alt={image.alt} />
  });

  let games = RelatedGamesData.map(game => {
    return <RelatedGames img={game.img_url} alt={game.alt} name={game.name} 
            type={game.type} rate={game.rate} downloads={game.downloads} />
  });

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
                <PlayButton reference=" #"></PlayButton>
                <img src={liveStream} className="img-fluid" alt="Live Now"/>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="fortnite-details m-0 mt-5 text-center text-uppercase fw-bolder">fortnite details</h2>
          </div>
        </div>
        <SectionWrapper>
          <div className="row">
            <div className="column col-lg-6">
              <SectionWrapper class="section-wrapper-card mb-4">
                <div className="d-flex justify-content-between">
                  <GameMainDetails name="Fortnite" type="Sandbox" />
                  <All rate="4.8" downloads="2.3" />
                </div>
              </SectionWrapper>
            </div>
            <div className="column col-lg-6">
              <SectionWrapper class="section-wrapper-card mb-4">
                <ul>
                  <div className="row">
                    {items}
                  </div>
                </ul>
              </SectionWrapper>
            </div>
            {images}
            <p className="col-12">
              Cyborg Gaming is free HTML CSS website template provided by TemplateMo. 
              This is Bootstrap v5.2.0 layout. You can make a
              <a className="color-white" href=" #"> small contribution via PayPal </a>to info [at] 
              templatemo.com and thank you for supporting. If you want to get the PSD source files, 
              please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, 
              sed doers eiusmod lisum hored tempor.
            </p>
            <div className="col">
              <MainButton class="second-btn d-block mt-4 text-center" reference=" #">download fortnite now!</MainButton>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeader title="other related" subtitle="games" />
          <div className="row">
            {games}
          </div>
        </SectionWrapper>
      </Container>
    </div>
  </main>
  )
}

import "./home-content.css";
import { MainButton } from "../../components/index";
import { Container, MostPopular, GamesLibrary } from "../index";

export default function HomeContent() {
  return(
    <main>
      <div className="container">
        <Container>
          <div className="main-banner rounded-5">
            <div className="row">
              <div className="col-md-9 col-lg-7">
                <h6 className="fs-4 mb-4 fw-normal text-white">Welcome To Cyporg</h6>
                <h4 className="text-uppercase text-white mb-4">
                  <span className="">browse</span>
                   our popular games here
                </h4>
                <MainButton reference="#">Browse Now</MainButton>
              </div>
            </div>
          </div>
          <MostPopular />
          <GamesLibrary />
        </Container>
      </div>
    </main>
  );
}
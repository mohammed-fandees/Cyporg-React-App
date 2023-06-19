import "./main.css";
import { MainButton } from "../../components/index";
import { Container, MostPopular } from "../index";

function Main() {
  return(
    <main>
      <div className="container">
        <Container>
          <div className="main-banner rounded-5">
            <div className="row">
              <div className="col-md-9 col-lg-7">
                <h6 className="fs-4 mb-4 fw-normal text-white">Welcome To Cyporg</h6>
                <h4 className="text-uppercase text-white mb-4"><span className="">browse</span> our popular games here</h4>
                <MainButton direct="#">Browse Now</MainButton>
              </div>
            </div>
          </div>
          <MostPopular>

          </MostPopular>
        </Container>
      </div>
    </main>
  );
}

export default Main;
import "./profile-content.css";
import profileImg from "../../assets/imgs/profile.jpg"
import { Container, SectionWrapper } from "../index";
import { ProfileDetails, SectionHeader, Clips, MainButton, Game } from "../../components/index";
import { ProfileDetailsData, ClipsData, MainGamesLibraryData } from "../../data/index";

export default function ProfileContent(props) {

  const details = ProfileDetailsData.map(detail => {
    return <ProfileDetails key={detail.id} var={detail.var} val={detail.val} />
  })

  const clips = ClipsData.map(clip => {
    return <Clips key={clip.id} img={clip.img_url} alt={clip.alt} title={clip.title} views={clip.views} />
  });
  
  const games = MainGamesLibraryData.map(game => {
    return <Game key={game.id} name={game.name} type={game.type} img={game.img} 
    date_added={game.date_added} hours_played={game.hours_played} state={game.state} />
  })

  return (
    <main className="profile">
      <div className="container">
        <Container>
          <SectionWrapper>
            <div className="row text-white">
              <div className="col-lg-4 col-md-12">
                <div className="image overflow-hidden rounded-5">
                  <img className="img-fluid" src={profileImg} alt="profile-img" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <span className="state main-btn px-3 py-2 mb-3 rounded-pill d-inline-block">
                  Offline
                </span>
                <h4 className="fw-bolder mb-4 fs-4">Alan Smithee</h4>
                <p>
                  You Haven't Gone Live yet. Go Live By Touching The Button Below.
                </p>
                <div className="main-button mt-4">
                  <a className="second-btn px-4 py-2 d-inline-block rounded-pill" href=" #">Start Live Stream</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <ul className="profile-details rounded-5">
                  {details}
                </ul>
              </div>
              <div className="col-12">
                <hr className="my-4" />
              </div>
              <div className="col-12">
                <SectionHeader title="your most popular" subtitle=" clips" />
              </div>
              {clips}
              <div className="col-12 text-center mt-3">
                <MainButton reference=" #">load more clips</MainButton>
              </div>
            </div>
          </SectionWrapper>
          <SectionWrapper>
            <SectionHeader title="your gaming" subtitle="library" />
            {games}
          </SectionWrapper>
        </Container>
      </div>
    </main>
  )
}

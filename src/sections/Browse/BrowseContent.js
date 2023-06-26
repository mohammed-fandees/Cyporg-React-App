import "./browse-content.css";
import { Container, SectionWrapper } from "../index";
import { MainButton, SectionHeader, SlideCard, TopDownloadedGames, ServicesCards, LiveStreams } from "../../components/index";
import { SlideCardData, TopDownloadedGamesData, ServicesCardsData, LiveStreamsData } from "../../data/index";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function BrowseContent() {
  let items = SlideCardData.map(item => {
    return <SlideCard key={item.id} img={item.img_url} name={item.name} type={item.type} 
          streaming={item.streaming} rate={item.rate} downloads={item.downloads} />
  });

  let games = TopDownloadedGamesData.map(game => {
    return <TopDownloadedGames key={game.id} name={game.name} type={game.type} rate={game.rate} downloads={game.downloads} img={game.img_url} alt={game.alt} />
  });

  let cards = ServicesCardsData.map(card => {
    return <ServicesCards key={card.id} img={card.img_url} alt={card.alt} title={card.title} text={card.text} />
  });

  let streams = LiveStreamsData.map(stream => {
    return <LiveStreams key={stream.id} img={stream.img_url} userImg={stream.userImg} alt={stream.alt} userAlt={stream.userAlt} 
          views={stream.views} gameName={stream.gameName} userName={stream.userName} desc={stream.desc} />
  });

  return (
    <main className="browse">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-lg-8">
              <SectionWrapper class="overflow-hidden">
                <SectionHeader title="featured" subtitle="games" class="d-flex justify-content-between">
                  <div className="owl-nav d-flex align-items-center">
                    <MdOutlineArrowBackIos />
                    <MdOutlineArrowForwardIos />
                  </div>
                </SectionHeader>
                <div className="row flex-nowrap">
                  {items}
                </div>
              </SectionWrapper>
            </div>
            <div className="col-lg-4">
              <SectionWrapper button="view all games">
                <SectionHeader title="top" subtitle="downloaded" />
                <ul>
                  {games}
                </ul>
              </SectionWrapper>
            </div>
          </div>
          <SectionHeader class="text-center my-5" title="how to start your" subtitle="live stream" />
          <div className="row">
            {cards}
            <div className="col-12 text-center mt-5">
              <MainButton reference="/profile">go to profile</MainButton>
            </div>
          </div>
          <SectionWrapper button="discover all streams">
            <SectionHeader title="Most Popular" subtitle=" live streams" />
            <div className="row">
              {streams}
            </div>
          </SectionWrapper>
        </Container>
      </div>
    </main>
  );
}

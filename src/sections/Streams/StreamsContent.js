import "./streams-content.css"
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TopStreamsers, SlideCard, LiveStreams } from "../../components/index";
import { Container, SectionWrapper, SectionHeader } from "../index";
import { TopStreamersData, SlideCardData, PopularLiveStreamsData } from "../../data/index";

export default function StreamsContent(props) {
  
  let items = SlideCardData.map(item => {
    return <SlideCard key={item.id} img={item.img_url} name={item.name} type={item.type} 
    streaming={item.streaming} rate={item.rate} downloads={item.downloads} />
  });
  
  let num= 1;
  let streamers = TopStreamersData.map(streamer => {
    return <TopStreamsers key={streamer.id} userName={streamer.userName} img={streamer.img_url} alt={streamer.alt} num={num++} />
  });

  let streams = PopularLiveStreamsData.map(stream => {
    return <LiveStreams key={stream.id} img={stream.img_url} userImg={stream.userImg} alt={stream.alt} userAlt={stream.userAlt} 
          views={stream.views} gameName={stream.gameName} userName={stream.userName} desc={stream.desc} />
  });

  return (
    <main className="streams">
      <div className="container">
        <Container>
          <div className="row ">
            <div className="col-lg-8">
              <SectionWrapper class="overflow-hidden">
                <SectionHeader title="live" subtitle="streams" class="d-flex justify-content-between">
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
              <SectionWrapper>
                <SectionHeader title="top" subtitle="streamers" />
                <ul className="overflow-scroll top-streamers">
                  {streamers}
                </ul>
              </SectionWrapper>
            </div>
          </div>
          <SectionWrapper button="load more streams">
            <SectionHeader title="most popular" subtitle="live streams" />
            <div className="row">
              {streams}
            </div>
          </SectionWrapper>
        </Container>
      </div>
    </main>
  );
}

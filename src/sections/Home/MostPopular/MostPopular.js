import "./most-popular.css";
import { Card, SectionHeader, SectionWrapper } from "../../index";
import { MostPopularData }from "../../../data/index";

export default function MonstPopular() {
  const cards = MostPopularData.map(card => {
    return <Card key={card.id} name={card.name} type={card.type} rate={card.rate} downloads={card.downloads} img={card.img}></Card>
  });

  return(
    <SectionWrapper button="discover popular">
      <SectionHeader title="most popular" subtitle="right now" />
      <div className="row popular-items">
        {cards}
      </div>
    </SectionWrapper>
  );
}
import "./games-library.css";
import { SectionHeader, SectionWrapper } from "../../index";
import { Game } from "../../../components/index";
import { GamesLibraryData } from "../../../data/index";
export default function GamesLibrary() {
  const games = GamesLibraryData.map(game => {
    return (
      <Game key={game.id} name={game.name} type={game.type} img={game.img} 
      date_added={game.date_added} hours_played={game.hours_played} state={game.state} />
    );
  });
  
  return (
    <SectionWrapper button="view your library">
      <SectionHeader title="your gaming" subtitle="library" />
      {games}
    </SectionWrapper>
  )
}

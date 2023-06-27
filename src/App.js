import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import {Header, Footer} from "./sections/index";
import { Home, Browse, Details, Streams, Profile } from "./Routes/index";
import "./master.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/details" element={<Details />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

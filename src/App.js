import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import {Header, Footer} from "./sections/index";
import { Home, Browse } from "./Routes";
import "./master.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

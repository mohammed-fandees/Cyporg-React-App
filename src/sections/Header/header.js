import logo from "../../assets/imgs/logo.png";
import profile from "../../assets/imgs/profile-header.jpg"

import NavItems from "../../components/NavItems/NavItems";

import "./header.css";

function Header() {
  return(
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <a className="navbar-brand me-1 me-xl-5" href="#"><img className="me-0 me-xl-5"  src={logo}></img></a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i className="bi bi-list text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItems direct="#" customClass="active">Home</NavItems>
            <NavItems direct="#">Browse</NavItems>
            <NavItems direct="#">Details</NavItems>
            <NavItems direct="#">Streams</NavItems>
            <NavItems direct="#" customClass="rounded-pill profile">Profile <img className="img-flued rounded-pill ms-1" src={profile} /></NavItems>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
import logo from "../../assets/imgs/logo.png";
import "./header.css";
import NavItem from "../../components/NavItems/NavItems";
import { NavbarData } from "../../data/index";

function Header() {

  const navLinks = NavbarData.map(link => {
    let image;
    link.img? image = <img src={link.img_url} className="img-fluid rounded-pill ms-1" alt="profile" /> : image = "";

    return(
      <NavItem key={link.id} reference={link.reference} class={link.class}>{link.content}{image}</NavItem>
    );
  })
  return(
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <a className="navbar-brand me-1 me-xl-5" href="/">
          <img className="me-0 me-xl-5" alt="logo" src={logo} />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i className="bi bi-list text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
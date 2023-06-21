import profile from "../assets/imgs/profile-header.jpg"

export const NavbarData = [
  {id: "navbar-link-1", img: false, content: "home", class: "active", reference: "/"},
  {id: "navbar-link-2", img: false, content: "browse", class: "", reference: "/browse"},
  {id: "navbar-link-3", img: false, content: "details", class: "", reference: "/details"},
  {id: "navbar-link-4", img: false, content: "stream", class: "", reference: "/stream"},
  {id: "navbar-link-5", img: true, img_url: profile, content: "profile", class: "rounded-pill profile", reference: "/profile"},
]
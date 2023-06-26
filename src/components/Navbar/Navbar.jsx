import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import react from "../../assets/react.svg";

function Navbar() {
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const pathname = useLocation();
  // console.log(pathname);

  const isActive = () => {
    window.scrollY > 50 ? setActive(true) : setActive(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Sahy Liana",
    isSeller: true,
  };
  return (
    <div
      className={
        active || pathname.pathname !== "/" ? "navbar active" : "navbar"
      }
    >
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {currentUser?.isSeller && <span>Become a seller</span>}
          {currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={react} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/myGigs">
                        <span>Gigs</span>
                      </Link>
                      <Link className="link" to="/add">
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    <span>Orders</span>
                  </Link>
                  <Link className="link" to="/messages">
                    <span>Messages</span>
                  </Link>
                  <Link className="link" to="/">
                    <span>Log out</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname.pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              <span>Graphics & Design</span>
            </Link>
            <Link className="link" to="/">
              <span>Video & Animation</span>
            </Link>
            <Link className="link" to="/">
              <span>Wrting & Translation</span>
            </Link>
            <Link className="link" to="/">
              <span>All Services</span>
            </Link>
            <Link className="link" to="/">
              <span>Digital Marketing</span>
            </Link>
            <Link className="link" to="/">
              <span>Music and Audio</span>
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;

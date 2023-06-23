import React from "react";
import "./Featured.scss";
import search from "../../assets/search.png";
import man from "../../assets/man.png";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input type="text" placeholder="Try building mobil app" />
              <button>Search</button>
            </div>
          </div>
          <div className="popular">
            <span>Popular</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;

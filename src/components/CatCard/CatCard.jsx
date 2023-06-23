import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function Slide({ item }) {
  return (
    <div className="catCard">
      {/* <div className="container"></div> */}
      <Link to="/gigs?cat-design">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </Link>
    </div>
  );
}

export default Slide;

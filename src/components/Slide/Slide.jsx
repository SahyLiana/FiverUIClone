import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../CatCard/CatCard";
import { cards } from "../../data";

function Slide({ slidesToShow, children, arrowsScroll }) {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={5}>
          {/* {cards.map((card) => (
            <CatCard key={card.id} item={card} />
          ))} */}
          {children}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;

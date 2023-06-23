import React from "react";
import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/CatCard/CatCard";
import { cards } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;

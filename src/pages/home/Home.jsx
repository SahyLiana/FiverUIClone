import React from "react";
import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/CatCard/CatCard";
import { cards, projects } from "../../data";
import check from "../../assets/check.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure
              optio nesciunt molestiae repudiandae pariatur tempore possimus
              incidunt a sed molestias corrupti alias corporis odit nulla
              perspiciatis, in nostrum atque?
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure
              optio nesciunt molestiae repudiandae pariatur tempore possimus
              incidunt a sed molestias corrupti alias corporis odit nulla
              perspiciatis, in nostrum atque?
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure
              optio nesciunt molestiae repudiandae pariatur tempore possimus
              incidunt a sed molestias corrupti alias corporis odit nulla
              perspiciatis, in nostrum atque?
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure
              optio nesciunt molestiae repudiandae pariatur tempore possimus
              incidunt a sed molestias corrupti alias corporis odit nulla
              perspiciatis, in nostrum atque?
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr business</h1>
            <h1>A business solution desigend for teams</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repellat hic assumenda deserunt, soluta amet similique
              perspiciatis ut, fuga mollitia sit quae odio, non saepe
              necessitatibus dolorum quam blanditiis! Vero?
            </p>
            <div className="title">
              <img src={check} alt="" />
              COnnect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src={check} alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              controls
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;

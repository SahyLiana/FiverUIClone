import React from "react";
import "./Gig.scss";
import star from "../../assets/star.png";
import Slider from "infinite-react-carousel";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import clock from "../../assets/clock.png";
import recycle from "../../assets/recycle.png";
import greenCheck from "../../assets/greencheck.png";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVER - GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Sahy Liana</span>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider className="slider" slidesToShow={1} arrowsScroll={1}>
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About this page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
            et ipsam quaerat ducimus facilis id aliquam a deserunt deleniti
            recusandae eum excepturi nisi, atque rem ea! Alias sit tempora
            porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nesciunt, et ipsam quaerat ducimus facilis id aliquam a deserunt
            deleniti recusandae eum excepturi nisi, atque rem ea! Alias sit
            tempora porro. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nesciunt, et ipsam quaerat ducimus facilis id aliquam a
            deserunt deleniti recusandae eum excepturi nisi, atque rem ea! Alias
            sit tempora porro.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img
                className="pp"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aung 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                asperiores! Molestias nihil nam perferendis eveniet accusantium
                quaerat error, veritatis nisi dolores nostrum, ratione sapiente
                aspernatur ipsa quia tempora commodi ipsum.
              </p>
            </div>
          </div>
          <div className="reviews">
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum quam quo et non autem dolores, inventore fuga maiores
                similique voluptates earum necessitatibus eum? Asperiores
                pariatur enim similique officia nisi magnam. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Fugiat expedita porro
                exercitationem sed voluptatum amet modi corrupti at commodi
                nostrum ut blanditiis iusto tempora dicta explicabo, suscipit
                nihil laudantium? Ut!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={like} />
                <span>Yes</span>
                <img src={dislike} />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum quam quo et non autem dolores, inventore fuga maiores
                similique voluptates earum necessitatibus eum? Asperiores
                pariatur enim similique officia nisi magnam. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Fugiat expedita porro
                exercitationem sed voluptatum amet modi corrupti at commodi
                nostrum ut blanditiis iusto tempora dicta explicabo, suscipit
                nihil laudantium? Ut!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={like} />
                <span>Yes</span>
                <img src={dislike} />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum quam quo et non autem dolores, inventore fuga maiores
                similique voluptates earum necessitatibus eum? Asperiores
                pariatur enim similique officia nisi magnam. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Fugiat expedita porro
                exercitationem sed voluptatum amet modi corrupti at commodi
                nostrum ut blanditiis iusto tempora dicta explicabo, suscipit
                nihil laudantium? Ut!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={like} />
                <span>Yes</span>
                <img src={dislike} />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum quam quo et non autem dolores, inventore fuga maiores
                similique voluptates earum necessitatibus eum? Asperiores
                pariatur enim similique officia nisi magnam. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Fugiat expedita porro
                exercitationem sed voluptatum amet modi corrupti at commodi
                nostrum ut blanditiis iusto tempora dicta explicabo, suscipit
                nihil laudantium? Ut!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={like} />
                <span>Yes</span>
                <img src={dislike} />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src={clock} />
              <span>2 days Deleviry</span>
            </div>
            <div className="item">
              <img src={recycle} />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src={greenCheck} alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src={greenCheck} alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src={greenCheck} alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src={greenCheck} alt="" />
              <span>Prompt writing</span>
            </div>
          </div>
          <button className="button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;

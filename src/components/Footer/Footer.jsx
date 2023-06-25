import React from "react";
import "./Footer.scss";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import language from "../../assets/language.png";
import coin from "../../assets/coin.png";
import accessibility from "../../assets/accessibility.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Foot1</span>
            <span>Foot2</span>
            <span>Foot3</span>
            <span>Foot4</span>
            <span>Foot5</span>
            <span>Foot6</span>
            <span>Foot7</span>
            <span>Foot8</span>
            <span>Foot9</span>
            <span>Foot10</span>
            <span>Foot11</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Foot1</span>
            <span>Foot2</span>
            <span>Foot3</span>
            <span>Foot4</span>
            <span>Foot5</span>
            <span>Foot6</span>
            <span>Foot7</span>
            <span>Foot8</span>
            <span>Foot9</span>
            <span>Foot10</span>
            <span>Foot11</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Foot1</span>
            <span>Foot2</span>
            <span>Foot3</span>
            <span>Foot4</span>
            <span>Foot5</span>
            <span>Foot6</span>
            <span>Foot7</span>
            <span>Foot8</span>
            <span>Foot9</span>
            <span>Foot10</span>
            <span>Foot11</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Foot1</span>
            <span>Foot2</span>
            <span>Foot3</span>
            <span>Foot4</span>
            <span>Foot5</span>
            <span>Foot6</span>
            <span>Foot7</span>
            <span>Foot8</span>
            <span>Foot9</span>
            <span>Foot10</span>
            <span>Foot11</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Foot1</span>
            <span>Foot2</span>
            <span>Foot3</span>
            <span>Foot4</span>
            <span>Foot5</span>
            <span>Foot6</span>
            <span>Foot7</span>
            <span>Foot8</span>
            <span>Foot9</span>
            <span>Foot10</span>
            <span>Foot11</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiver</h2>
            <span>&copy; fiver International Ltd, 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
            <div className="link">
              <img src={language} alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src={coin} alt="" />
              <span>USD</span>
            </div>

            <img src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

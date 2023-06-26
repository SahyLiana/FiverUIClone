import React from "react";
import "./Add.scss";

function Add() {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="eg. I will do someting I am really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="carts">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Brief Description to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="eg. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your servce"
            ></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Add Features</label>
            <input type="number" min={1} />
            <label htmlFor="">Price</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;

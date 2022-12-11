import React from "react";

const Shop = () => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20220421/e9eX/626059d1aeb26921af31dce1/-1117Wx1400H-460930572-white-MODEL.jpg"
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="justify-content-center">
            <button className="btn btn-primary mx-2">-</button>
            Add to cart
            <button className="btn btn-primary mx-2">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
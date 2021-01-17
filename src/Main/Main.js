import React, {useEffect, useState} from "react";

import "./Main.css";
import data from "./productData.json";

const Main = () => {
  const [cartItem, setCartItem] = useState([]);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    console.log(cartItem);
    save();
  });

  const save = () => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };
  const addToCart = (data) => {
    let itemDetails = {
      name: data.name,
      price: data.Price,
      imageUrl: data.imageUrl,
      brandName: data.brandName,
      quantity: 1,
    };

    setCartItem((arr) => [...arr, itemDetails]);
    console.log(cartItem);
  };
  return (
    <div className="main container col-12">
      <div className="d-flex main-container justify-content-center">
        {data.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card mb-4">
                <img
                  src={item.imageUrl}
                  className="card-img-top im-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.brandName}</p>
                  <p className="card-text">{item.Price}</p>

                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
const Cart = () => {
  const [itemList, setitemList] = useState([]);
  const [saveLaterItems, setSaveLater] = useState([]);
  const [update, setUpdate] = useState(false);
  const [exist, setExist] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let saveLater = JSON.parse(localStorage.getItem("saveLater"));

    setSaveLater(saveLater);
    totalPrice();
  }, [itemList]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart"));
    setitemList(data);
  }, [update]);

  const checkExist = (itemName) => {
    if (localStorage.getItem(itemName) != null) {
      return true;
    }
  };
  const totalPrice = () => {
    itemList.map((data) => {
      setTotal(data.quantity * data.price);
    });
  };

  const add = (itemNo) => {
    setUpdate(!update);

    let itemAdded = (itemList[itemNo].quantity += 1);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(itemList));
  };

  const remove = (itemNo) => {
    setUpdate(!update);

    itemList.splice(itemNo, 1);
    localStorage.setItem("cart", JSON.stringify(itemList));
  };

  const saveLater = (itemNo) => {
    setUpdate(!update);

    localStorage.setItem("saveLater", JSON.stringify([itemList[itemNo]]));
  };
  return (
    <>
      <Navbar />

      <div className="main container col-12">
        <div className="d-flex main-container justify-content-around">
          <div className="cart col-7">
            <h1>My Cart {itemList.length}</h1>
            {itemList.map((data, index) => {
              return (
                <div className="d-flex justify-content-start">
                  <img
                    src={data.imageUrl}
                    className="image-fluid cart-img me-5 mb-5"
                    alt=""
                  />
                  <div>
                    <h2>Name - {data.name}</h2>
                    <h2>Price -{data.price}</h2>
                    <h2>Quatity - {data.quantity}</h2>
                    <button
                      onClick={() => add(index)}
                      className="btn btn-lg btn-primary me-3"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => remove(index)}
                      className="btn btn-lg btn-primary me-3"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => saveLater(index)}
                      className="btn btn-lg btn-primary"
                    >
                      Save Later
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary col-5 ">
            <h2>Total - {total}</h2>
          </div>
        </div>

        {/* {saveLaterItems.map((data, index) => {
          return (
            <div className="d-flex justify-content-start">
              <img
                src={data.imageUrl}
                className="image-fluid cart-img me-5 mb-5"
                alt=""
              />
              <div>
                <h2>Name - {data.name}</h2>
                <h2>Price -{data.price}</h2>
                <h2>Quatity - {data.quantity}</h2>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default Cart;

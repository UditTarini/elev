import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar theme-color navbar-expand-lg ">
      <div className="container-fluid">
        <img
          width="75"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Flipkart"
          title="Flipkart"
          className="me-3"
        />
        <form className="d-flex">
          <input
            className="form-control search me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn text-white btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item text-white">
              <a className="nav-link active " aria-current="page" href="#">
                More
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

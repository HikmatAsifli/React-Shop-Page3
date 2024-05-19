import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={logo} alt="" />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/admin" className="nav-link px-2 link-dark">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/admin/add" className="nav-link px-2 link-dark">
              Add Products
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="nav-link px-2 link-dark">
              Products
            </Link>
          </li>
          <li>
            <Link to="/basket" className="nav-link px-2 link-dark">
              Basket
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="#">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to="#">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

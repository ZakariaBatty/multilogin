import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/multilogin.png';
import { isLogin } from '../../helpers/Item';

const Header = () => {
  return (
    // NAVBAR START
    <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark mt-2">
      <div className="container">
        <a href="/" className="navbar-brand me-lg-5">
          <img
            style={{ width: '116px' }}
            src={logo}
            alt="logo"
            className="logo-dark"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="mdi mdi-menu"></i>
        </button>
        {/* MENUS */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* left Menu */}
          <ul className="navbar-nav me-auto align-items-center">
            <li className="nav-item mx-lg-1">
              <a className="nav-link" href="/help-center">
                Help Center
              </a>
            </li>
            <li className="nav-item mx-lg-1">
              <a className="nav-link" href="/security">
                Security
              </a>
            </li>
            <li className="nav-item mx-lg-1">
              <a className="nav-link" href="/use-cases">
                Use Cases
              </a>
            </li>
            <li className="nav-item mx-lg-1">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
          {/* right Menu */}
          <ul className="navbar-nav ms-auto align-items-center">
            <a className="btn-extension mr-1" type="button" href="#">
              Install Chrome Extension
            </a>
            {isLogin ? (
              <li className="nav-item me-0">
                <a className="btn-black mr-1" type="button" href="/register">
                  Register
                </a>
                <a className="btn-black" type="button" href="/login">
                  Login
                </a>
              </li>
            ) : (
              <li className="dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none me-0"
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    padding: '.45rem 2rem',
                  }}
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="account-user-name">
                    <i className="uil-user-circle"></i> zbatty@gmail.com
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                  <a
                    href="/my-account/subscription-and-billing"
                    className="dropdown-item notify-item"
                  >
                    <i className="mdi mdi-account-circle me-1"></i>
                    <span>My Account</span>
                  </a>
                  <a href="/help-center" className="dropdown-item notify-item">
                    <i className="mdi mdi-lifebuoy me-1"></i>
                    <span>Support</span>
                  </a>
                  <button href="/logout" className="dropdown-item notify-item">
                    <form
                      style={{ display: 'none' }}
                      id="logout_form"
                      action="/logout"
                      method="post"
                    ></form>
                    <i className="mdi mdi-logout me-1"></i>
                    <span>Logout</span>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    // NAVBAR
    // START HERO
    // NAVBAR END
  );
};

export default Header;

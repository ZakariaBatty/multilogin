import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/multilogin.png';

const Header = () => {
  return (
    // NAVBAR START
    <nav class="navbar navbar-expand-lg py-lg-3 navbar-dark mt-2">
      <div class="container">
        <a href="/" class="navbar-brand me-lg-5">
          <img style={{width: "116px"}} src={logo} alt="logo" class="logo-dark" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="mdi mdi-menu"></i>
        </button>
        {/* MENUS */}
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          {/* left Menu */}
          <ul class="navbar-nav me-auto align-items-center">
            <li class="nav-item mx-lg-1">
              <a class="nav-link" href="/help-center">
                Help Center
              </a>
            </li>
            <li class="nav-item mx-lg-1">
              <a class="nav-link" href="/security">
                Security
              </a>
            </li>
            <li class="nav-item mx-lg-1">
              <a class="nav-link" href="/use-cases">
                Use Cases
              </a>
            </li>
            <li class="nav-item mx-lg-1">
              <a class="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
          {/* right Menu */}
          <ul class="navbar-nav ms-auto align-items-center">
            <a
              class="btn-extension mr-1"
              type="button"
              href="https://chrome.google.com/webstore/detail/sendwin/egbbhjdlibgbfdcmjmjkhcpfgbkeefgn"
            >
              Install Chrome Extension
            </a>
            <li class="nav-item me-0">
              <a class="btn-black mr-1" type="button" href="/register">
                Register
              </a>
              <a class="btn-black" type="button" href="/login">
                Login
              </a>
            </li>
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

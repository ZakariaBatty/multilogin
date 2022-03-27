import React from 'react';
import './Footer.css';
import logo from '../../assets/images/multilogin.png';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const Footer = () => {
  return (
    <>
      {/* <!-- START FOOTER --> */}
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 me-5">
              <img src={logo} alt="" className="logo-dark" />
              <p className="text-muted mt-2">
                Sendwin is a tool developed by Techrosh LLC to multi-login
                platform to manage multiple accounts from one browser.
              </p>

              <div className="row mt-4">
                <div className="col-xl">
                  <h4>About Us</h4>
                  <address className="text-muted ps-0">
                    Company Name - <strong>Techrosh LLC</strong>
                    <br />
                    Address -{' '}
                    <strong>
                      1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
                    </strong>
                    <br />
                    Primary contact -{' '}
                    <a href="#" target="_blank">
                      <span className="__cf_email__" data-cfemail="">
                        [email&#160;protected]
                      </span>
                    </a>
                  </address>
                </div>
              </div>
            </div>

            <div className="col-lg-2 mt-3 mt-lg-0 text-start me-5">
              <h4 className="text-light">Products</h4>
              <ul className="list-unstyled ps-0 mb-0 mt-3">
                <li className="mt-2">
                  <a href="/security" className="text-muted">
                    Security
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/refer" className="text-muted">
                    Refer
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/leaderboard" className="text-muted">
                    Refer Leader Board
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/affiliate" className="text-muted">
                    Affliliate
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/contact-us" className="text-muted">
                    Contact us
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/privacy-policy" className="text-muted">
                    Privacy policy
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/terms-of-services" className="text-muted">
                    Terms of services
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 mt-3 mt-lg-0 text-start">
              <h4 className="text-light">Community</h4>
              <p className="text-muted ps-0 mb-3 p-color">
                Join our Community Group for updates and others
              </p>
              <a className="btn-white" href="#" target="_blank">
                Go to Facebook group ↗︎
              </a>
              <button
                className="btn-white roadmap"
                style={{ marginTop: '20px' }}
              >
                Latest Updates and Roadmap
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="text-start">
                <p className="text-muted mt-4 mb-0">
                  All rights reseved 2021. Techrosh LLC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- END FOOTER -->  */}
    </>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <>
      {/* <!-- START FOOTER --> */}
      <footer class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 me-5">
              <img src={logo} alt="" class="logo-dark" />
              <p class="text-muted mt-2">
                Sendwin is a tool developed by Techrosh LLC to multi-login
                platform to manage multiple accounts from one browser.
              </p>

              <div class="row mt-4">
                <div class="col-xl">
                  <h4>About Us</h4>
                  <address class="text-muted ps-0">
                    Company Name - <strong>Techrosh LLC</strong>
                    <br />
                    Address -{' '}
                    <strong>
                      1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
                    </strong>
                    <br />
                    Primary contact -{' '}
                    <a href="#" target="_blank">
                      <span class="__cf_email__" data-cfemail="">
                        [email&#160;protected]
                      </span>
                    </a>
                  </address>
                </div>
              </div>
            </div>

            <div class="col-lg-2 mt-3 mt-lg-0 text-start me-5">
              <h4 class="text-light">Products</h4>
              <ul class="list-unstyled ps-0 mb-0 mt-3">
                <li class="mt-2">
                  <a href="/security" class="text-muted">
                    Security
                  </a>
                </li>
                <li class="mt-2">
                  <a href="/refer" class="text-muted">
                    Refer
                  </a>
                </li>
                <li class="mt-2">
                  <a href="/leaderboard" class="text-muted">
                    Refer Leader Board
                  </a>
                </li>
                <li class="mt-2">
                  <a href="/affiliate" class="text-muted">
                    Affliliate
                  </a>
                </li>
                <li class="mt-2">
                  <a href="/contact-us" class="text-muted">
                    Contact us
                  </a>
                </li>
                <li class="mt-2">
                  <a href="/privacy-policy" class="text-muted">
                    Privacy policy
                  </a>
                </li>
                <li class="mt-2">
                  <a href="/terms-of-services" class="text-muted">
                    Terms of services
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 mt-3 mt-lg-0 text-start">
              <h4 class="text-light">Community</h4>
              <p class="text-muted ps-0 mb-3 p-color">
                Join our Community Group for updates and others
              </p>
              <a class="btn-white" href="#" target="_blank">
                Go to Facebook group ↗︎
              </a>
              <button class="btn-white roadmap" style={{ marginTop: '20px' }}>
                Latest Updates and Roadmap
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="text-start">
                <p class="text-muted mt-4 mb-0">
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

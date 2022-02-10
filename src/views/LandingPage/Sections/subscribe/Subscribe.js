import React from 'react';
import './Subscribe.css';
import BgImage from '../../../../assets/images/bg-image.svg';

const Subscribe = () => {
  return (
    <>
      {/* <!-- START SUBSCRIBE --> */}
      <section class="py-5">
        <div class="container">
          <div class="row pb-3 align-items-center">
            <div class="col-lg-6">
              <h1 class="fw-bold">Subscribe us!</h1>
              <p class="text-muted mt-3">
                With more than 300.000 users SendWin is the most popular multi
                login platform. We protect your data with enterprise grade
                security solutions.
              </p>

              <div class="d-flex mt-4">
                <input
                  type="email"
                  id="subscribe_email"
                  class="form-control mr-2"
                  placeholder="Your email address"
                />
                <a href="#" type="button" class="btn-subscribe">
                  Subscribe
                </a>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
              <img src={BgImage} class="img-fluid" alt="" height="20" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SUBSCRIBE --> */}
    </>
  );
};

export default Subscribe;

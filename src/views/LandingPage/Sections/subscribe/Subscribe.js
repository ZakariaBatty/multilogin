import React from 'react';
import './Subscribe.css';
import BgImage from '../../../../assets/images/bg-image.svg';

const Subscribe = () => {
  return (
    <>
      {/* <!-- START SUBSCRIBE --> */}
      <section className="py-5">
        <div className="container">
          <div className="row pb-3 align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold">Subscribe us!</h1>
              <p className="text-muted mt-3">
                With more than 300.000 users SendWin is the most popular multi
                login platform. We protect your data with enterprise grade
                security solutions.
              </p>

              <div className="d-flex mt-4">
                <input
                  type="email"
                  id="subscribe_email"
                  className="form-control mr-2"
                  placeholder="Your email address"
                />
                <a href="#" type="button" className="btn-subscribe">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <img src={BgImage} className="img-fluid" alt="" height="20" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SUBSCRIBE --> */}
    </>
  );
};

export default Subscribe;

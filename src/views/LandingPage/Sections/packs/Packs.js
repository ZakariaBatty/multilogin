import React, { useState } from 'react';
import './Packs.css';
import { Link } from 'react-router-dom';
import ConIonicMdCheckmark from '../../../../assets/images/blogs/Icon-ionic-md-checkmark.svg';

const Packs = () => {
  const [pack, setPack] = useState(false);

  const changePack = (event) => {
    event.preventDefault();
    console.log(pack);
  };
  return (
    <>
      {/* <!-- START PRICING --> */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-3">
                <h1 className="mt-0 pricing-heading">
                  Choose the plan best suited for you
                </h1>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="btn-monthly mr-2 pricing-button pricing-monthly"
                  >
                    Monthly
                  </Link>
                  <Link
                    to="#"
                    onClick={event =>changePack()}
                    className="btn-black pricing-button pricing-yearly mr-2"
                  >
                    Yearly
                  </Link>
                  <Link to="/compare-plans" className="btn-black mr-2">
                    Compare Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row mt-5 pt-5 monthly-price-cards price-card-container"
            style={{ display: 'flex' }}
          >
            <div className="col-md-4">
              <div className="card card-pricing" style={{ marginTop: '3rem' }}>
                <div className="card-body text-center">
                  <h1 className="rating-headline">Free</h1>
                  <h1 className="card-pricing-price">
                    $0.00 <span>/ mo</span>
                  </h1>
                  <p>
                    Sync your sessions between across devices. Share sessions
                    with your friends, teams without sharing email and password.
                  </p>
                  <ul className="card-pricing-features">
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Sync between devices
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Multi tab isolation
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Session sharing
                    </li>
                  </ul>
                  <a className="btn-buy-now-solid mt-4 mb-4" href="/register">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-pricing">
                <div className="card-body text-center">
                  <h1 className="rating-headline">Pro</h1>
                  <h2 className="card-pricing-price">
                    $2.99 <span>/ mo</span>
                  </h2>
                  <p>
                    Boost your productivity with bookmark, bulk session creation
                    and session timers. Assign different proxies automatically
                    to your sessions.
                  </p>
                  <ul className="card-pricing-features">
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Everything from free plan
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Commercial use
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Proxy support
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Cart timer
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Bulk session
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Bookmarks
                    </li>
                  </ul>
                  <Link to="#" className="btn-buy-now-solid mt-4 mb-4">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-pricing card-pricing-recommended">
                <div className="card-body text-center">
                  <div className="card-pricing-plan-tag">
                    <img
                      src={ConIonicMdCheckmark}
                      className="mr-1"
                      alt="icon"
                    />
                    Most Favourite
                  </div>
                  <h1 className="rating-headline">Pro Plus</h1>
                  <h2 className="card-pricing-price" style={{ color: 'black' }}>
                    $6.99 <span>/ mo</span>
                  </h2>
                  <p style={{ color: 'black' }}>
                    Unlock full features with one click session share, session
                    block, website session access, session share under one roof
                    with making every session appear to have been started from
                    different browsers on different computers.
                  </p>
                  <ul className="card-pricing-features">
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Everything from Pro plan
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Session share a
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Website session access
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Blur sessions
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      One click all session share
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Block sessions
                    </li>
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Automatic proxy assign
                    </li>
                  </ul>
                  <Link to="" className="btn-buy-now-solid mt-4 mb-4">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* second pack */}
          <div
            className="row mt-5 pt-5 yearly-price-cards price-card-container"
            style={{ display: 'none' }}
          >
            <div className="col-md-4">
              <div className="card card-pricing" style={{ marginTop: '3rem' }}>
                <div className="card-body text-center">
                  <h1 className="rating-headline">Free</h1>
                  <h1 className="card-pricing-price">
                    $0.00 <span>/ mo</span>
                  </h1>
                  <p>
                    Sync your sessions between across devices. Share accounts
                    with your friends, teams without sharing email and password
                  </p>
                  <ul className="card-pricing-features">
                    <li>
                      <img
                        src={ConIonicMdCheckmark}
                        className="mr-1"
                        alt="icon"
                      />
                      Sync between devices
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Multi tab isolation
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Session sharing
                    </li>
                  </ul>
                  <a className="btn-buy-now-solid mt-4 mb-4" href="/register">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-pricing">
                <div className="card-body text-center">
                  <h1 className="rating-headline">Pro</h1>
                  <h2 className="card-pricing-price">
                    $2.49 <span>/ mo</span>
                  </h2>
                  <p>
                    Boost your productivity with bookmark, bulk session creation
                    and session timers. Assign different proxies automatically
                    to your sessions.
                  </p>
                  <ul className="card-pricing-features">
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        alt="icon"
                        className="mr-1"
                      />
                      Everything from free plan
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        alt="icon"
                        className="mr-1"
                      />
                      Commercial use
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        alt="icon"
                        className="mr-1"
                      />
                      Proxy support
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        alt="icon"
                        className="mr-1"
                      />
                      Cart timer
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        alt="icon"
                        className="mr-1"
                      />
                      Bulk session
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        alt="icon"
                        className="mr-1"
                      />
                      Bookmarks
                    </li>
                  </ul>
                  <Link to="#" className="btn-buy-now-solid mt-4 mb-4">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-pricing card-pricing-recommended">
                <div className="card-body text-center">
                  <div className="card-pricing-plan-tag">
                    <img
                      src="../assets/images/Icon-awesome-star.svg"
                      alt="icon"
                      className="mr-1"
                    />
                    Most Favourite
                  </div>
                  <h1 className="rating-headline">Pro Plus</h1>
                  <h2 className="card-pricing-price">
                    $6.49 <span>/ mo</span>
                  </h2>
                  <p>
                    Unlock full features with one click session share, session
                    block, website session access, session share under one roof
                    with making every session appear to have been started from
                    different browsers on different computers.
                  </p>
                  <ul className="card-pricing-features">
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Everything from Pro plan
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Session share a
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Website session access
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Blur sessions
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      One click all session share
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Block sessions
                    </li>
                    <li>
                      <img
                        src="../assets/images/Icon-ionic-md-checkmark.svg"
                        className="mr-1"
                        alt="icon"
                      />
                      Automatic proxy assign
                    </li>
                  </ul>
                  <Link to="" className="btn-buy-now-solid mt-4 mb-4">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END PRICING -->  */}
    </>
  );
};

export default Packs;

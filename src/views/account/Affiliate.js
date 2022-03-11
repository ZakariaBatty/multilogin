import React from 'react';

import copy from '../../assets/images/copy.svg';

const Affiliate = () => {
  return (
    <>
      <div className="content-main">
        <div>
          <section className="py-5">
            <div className="container">
              <div className="row py-1">
                <div>
                  <ul className="nav nav-tabs nav-bordered">
                    <li className="nav-item">
                      <a
                        className="nav-link active py-2 bill-subs active active"
                        href="/my-account"
                      >
                        Billing and Subscription
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  py-2" href="/my-account/upgrade">
                        Upgrade Account
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  py-2"
                        href="/my-account/account-security"
                      >
                        Account Security
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  py-2"
                        href="/my-account/affiliate"
                      >
                        Affiliate
                      </a>
                    </li>
                    <li className="nav-item" style={{ display: 'none' }}>
                      <a className="nav-link  py-2" href="/my-account/sessions">
                        Sessions
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div>
                      <div style={{ float: 'right' }}>
                        <a href="#">Schedule a demo</a>
                      </div>
                      <h4 class="tab-title">Affiliate</h4>
                      <div class="row">
                        <div class="col-md-6">
                          <div
                            style={{
                              border: '1px solid rgb(221, 221, 221)',
                              borderRadius: '5px',
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 'bold',
                                padding: '20px',
                                borderBottom: '1px solid rgb(221, 221, 221)',
                              }}
                            >
                              Referral Code
                            </div>
                            <div style={{ padding: '20px' }}>
                              <div class="input-group">
                                <output class="form-control text-center">
                                  ZYHBW6XU
                                </output>
                                <div class="input-group-append">
                                  <span
                                    class="input-group-text"
                                    style={{
                                      background: ' rgb(255, 255, 255)',
                                    }}
                                  >
                                    <img src={copy} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                            style={{
                              border: ' 1px solid rgb(221, 221, 221)',
                              borderRadius: '5px',
                            }}
                          >
                            <div style={{ padding: '20px' }}>
                              <div>
                                <div style={{ textAlign: 'center' }}>
                                  <div style={{ fontSize: '50px' }}>0</div>
                                  <div style={{ fontSize: '20px' }}>
                                    Referred
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <h4 class="tab-title">Achievements</h4>
                          <div>
                            <div
                              class="text-center"
                              style={{
                                padding: '10px 20px',
                                border: '1px solid rgb(221, 221, 221)',
                                borderRadius: '5px',
                              }}
                            >
                              No achievements yet
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr-line mt-5" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Affiliate;

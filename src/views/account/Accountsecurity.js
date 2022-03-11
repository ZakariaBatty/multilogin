import React from 'react';

const Accountsecurity = () => {
  return (
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
                    <a className="nav-link  py-2" href="/my-account/affiliate">
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
                    <h4 class="tab-title">Account security</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div
                          style={{
                            border: '1px solid rgb(221, 221, 221)',
                            borderadius: '35px',
                          }}
                        >
                          <div style={{ padding: '20px' }}>
                            <div>
                              <div class="btn-extension mr-1">
                                Change Password
                              </div>
                            </div>
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
  );
};

export default Accountsecurity;

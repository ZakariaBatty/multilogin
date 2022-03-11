import React from 'react';
import './Profile.css';

const Profile = props => {
  const { children, ...rest } = props;
  return (
    <>
      <div className="content-main" rest={{ ...rest }}>
        <div>
          <section className="py-5">
            <div className="container">
              <div className="row py-1">
                <div>
                  <ul className="nav nav-tabs nav-bordered">
                    <li className="nav-item">
                      <a
                        className="nav-link py-2 bill-subs active"
                        href="/my-account/"
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
                  <div className="tab-content">{children}</div>
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

export default Profile;

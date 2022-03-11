import React from 'react';
import './Profile.css';

const Profile = () => {
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
                        href="/my-account/subscription-and-billing"
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
                  <div className="tab-content">
                    <div>
                      <h4 className="tab-title">Billing and Subscription</h4>
                      <h4 style={{ padding: '0px 20px' }}>
                        Active Subscription
                      </h4>
                      <table className="table table-centered mt-3">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th className="text-center">Source</th>
                            <th className="text-center">End</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Free</td>
                            <td className="text-center">Registration</td>
                            <td className="text-center">N/A</td>
                          </tr>
                        </tbody>
                      </table>
                      <h4 style={{ padding: '0px 20px' }}>Transactions</h4>
                      <div>
                        <div className="text-start" style={{ padding: '1rem' }}>
                          No transactions found
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

export default Profile;

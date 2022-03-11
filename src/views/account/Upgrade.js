import React from 'react';
import './Upgrade';

const Upgrade = () => {
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
                  <div className="tab-content">
                    <div>
                      <div className="row align-items-center">
                        <div className="col-md">
                          <h4 className="tab-title">Upgrade account</h4>
                        </div>
                        <div className="col-md">
                          <h4
                            className="float-end current-package"
                            style={{ visibility: 'visible' }}
                          >
                            <h4 style={{ textAlign: 'right' }}>
                              <h4 className="float-end current-package">
                                Free
                              </h4>
                            </h4>
                          </h4>
                        </div>
                      </div>
                      <table className="table table-centered mt-3">
                        <thead>
                          <tr>
                            <th>Plan</th>
                            <th className="text-center">Duration</th>
                            <th className="text-center">Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Pro</td>
                            <td className="text-center">1 month(s)</td>
                            <td className="text-center">2.99 / month</td>
                            <td className="text-center">
                              <a className="btn-monthly mr-2 pricing-button pricing-monthly">
                                Upgrade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Pro Plus</td>
                            <td className="text-center">1 month(s)</td>
                            <td className="text-center">6.99 / month</td>
                            <td className="text-center">
                              <a className="btn-monthly mr-2 pricing-button pricing-monthly">
                                Upgrade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Pro</td>
                            <td className="text-center">12 month(s)</td>
                            <td className="text-center">2.29 / month</td>
                            <td className="text-center">
                              <a className="btn-monthly mr-2 pricing-button pricing-monthly">
                                Upgrade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Pro Plus</td>
                            <td className="text-center">12 month(s)</td>
                            <td className="text-center">6.49 / month</td>
                            <td className="text-center">
                              <a className="btn-monthly mr-2 pricing-button pricing-monthly">
                                Upgrade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Upgrade;

import React from 'react';
import './Upgrade';

const Upgrade = () => {
  return (
    <>
      {/* <Profile> */}
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
                <h4 className="float-end current-package">Free</h4>
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
                <a
                  className="btn-monthly mr-2 pricing-button pricing-monthly"
                  target="_blank"
                  href="https://multiplelogin.com/members/buy/L29BD8laG9yx"
                >
                  Upgrade
                </a>
              </td>
            </tr>
            <tr>
              <td>Pro Plus</td>
              <td className="text-center">1 month(s)</td>
              <td className="text-center">6.99 / month</td>
              <td className="text-center">
                <a
                  className="btn-monthly mr-2 pricing-button pricing-monthly"
                  target="_blank"
                  href="https://multiplelogin.com/members/buy/DbNWW7LymtVC"
                >
                  Upgrade
                </a>
              </td>
            </tr>
            <tr>
              <td>Pro</td>
              <td className="text-center">12 month(s)</td>
              <td className="text-center">2.29 / month</td>
              <td className="text-center">
                <a
                  className="btn-monthly mr-2 pricing-button pricing-monthly"
                  target="_blank"
                  href="https://multiplelogin.com/members/buy/TEcVQqwGJjPO"
                >
                  Upgrade
                </a>
              </td>
            </tr>
            <tr>
              <td>Pro Plus</td>
              <td className="text-center">12 month(s)</td>
              <td className="text-center">6.49 / month</td>
              <td className="text-center">
                <a
                  className="btn-monthly mr-2 pricing-button pricing-monthly"
                  target="_blank"
                  href="https://multiplelogin.com/members/buy/FXyOrTLOq3HE"
                >
                  Upgrade
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Upgrade;

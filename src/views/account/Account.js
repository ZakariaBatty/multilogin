import React from 'react';

const Account = () => {
  return (
    <div>
      <h4 className="tab-title">Billing and Subscription</h4>
      <h4 style={{ padding: '0px 20px' }}>Active Subscription</h4>
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
  );
};

export default Account;

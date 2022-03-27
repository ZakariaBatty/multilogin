import React from 'react';

const Account = props => {
  const subs = () => {
    if (
      props?.userInfo?.subscriptions[1] &&
      !props?.userInfo?.subscriptions[2]
    ) {
      return (
        <tr>
          <td>Pro</td>
          <td className="text-center">Purchase</td>
          <td className="text-center">{props?.userInfo?.subscriptions[1]}</td>
        </tr>
      );
    } else if (
      props?.userInfo?.subscriptions[1] &&
      props?.userInfo?.subscriptions[2]
    ) {
      return (
        <tr>
          <td>Pro plus</td>
          <td className="text-center">Purchase</td>
          <td className="text-center">{props?.userInfo?.subscriptions[2]}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>Free</td>
          <td className="text-center">Registration</td>
          <td className="text-center">N/A</td>
        </tr>
      );
    }
  };
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
        <tbody>{subs()}</tbody>
      </table>
      <h4 style={{ padding: '0px 20px' }}>Transactions</h4>
      {!props?.userInfo?.subscriptions[1] ? (
        <div>
          <div className="text-start" style={{ padding: '1rem' }}>
            No transactions found
          </div>
        </div>
      ) : (
        <table className="table table-centered mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th className="text-center">name</th>
              <th className="text-center">Amont</th>
            </tr>
          </thead>
          <tbody>
            {props?.userInfo?.subscriptions[1] ? (
              <tr>
                <td>{props?.userInfo?.subscriptions[2]}</td>
                <td className="text-center">{props?.userInfo.name_l}</td>
                <td className="text-center">2.99</td>
              </tr>
            ) : null}
            {props?.userInfo?.subscriptions[2] ? (
              <tr>
                <td>{props?.userInfo?.subscriptions[2]}</td>
                <td className="text-center">{props?.userInfo.name_l}</td>
                <td className="text-center">2.99</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Account;

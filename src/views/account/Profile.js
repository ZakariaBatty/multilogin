import React, { useState } from 'react';
import './Profile.css';
import Upgrade from './Upgrade';
import Account from './Account';
import Accountsecurity from './Accountsecurity';
import Affiliate from './Affiliate';

const Profile = props => {
  const [upgrade, setUpgrade] = useState(false);
  const [account, setAccount] = useState(true);
  const [accountsecurity, setAccountsecurity] = useState(false);
  const [affiliate, setAffiliate] = useState(false);

  const ChangeClass = name => {
    // e.preventDefault();
    let a = name;
    if (a === 'Billing') {
      document.getElementById('item2').classList.remove('active');
      document.getElementById('item3').classList.remove('active');
      document.getElementById('item4').classList.remove('active');
      document.getElementById('item1').classList.add('active');
      setUpgrade(false);
      setAccount(true);
      setAccountsecurity(false);
      setAffiliate(false);
    }
    if (a === 'Upgrade') {
      document.getElementById('item1').classList.remove('active');
      document.getElementById('item3').classList.remove('active');
      document.getElementById('item4').classList.remove('active');
      document.getElementById('item2').classList.add('active');
      setUpgrade(true);
      setAccount(false);
      setAccountsecurity(false);
      setAffiliate(false);
    }
    if (a === 'Account') {
      document.getElementById('item1').classList.remove('active');
      document.getElementById('item2').classList.remove('active');
      document.getElementById('item4').classList.remove('active');
      document.getElementById('item3').classList.add('active');
      setUpgrade(false);
      setAccount(false);
      setAccountsecurity(true);
      setAffiliate(false);
    }
    if (a === 'Affiliate') {
      document.getElementById('item1').classList.remove('active');
      document.getElementById('item2').classList.remove('active');
      document.getElementById('item3').classList.remove('active');
      document.getElementById('item4').classList.add('active');
      setUpgrade(false);
      setAccount(false);
      setAccountsecurity(false);
      setAffiliate(true);
    }
  };

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
                        id="item1"
                        className="nav-link py-2 bill-subs active "
                        href="/my-account"
                        onClick={() => ChangeClass('Billing')}
                      >
                        Billing and Subscription
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        id="item2"
                        className="nav-link py-2"
                        href="#"
                        onClick={() => ChangeClass('Upgrade')}
                      >
                        Upgrade Account
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        id="item3"
                        className="nav-link  py-2"
                        href="#"
                        onClick={() => ChangeClass('Account')}
                      >
                        Account Security
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        id="item4"
                        className="nav-link  py-2"
                        href="#"
                        onClick={() => ChangeClass('Affiliate')}
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
                    {account && account === true ? <Account /> : null}
                    {upgrade && upgrade === true ? <Upgrade /> : null}
                    {accountsecurity && accountsecurity === true ? (
                      <Accountsecurity />
                    ) : null}
                    {affiliate && affiliate === true ? <Affiliate /> : null}
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

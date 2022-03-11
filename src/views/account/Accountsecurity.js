import React from 'react';
import Profile from './Profile';

const Accountsecurity = () => {
  return (
    <Profile>
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
                  <div class="btn-extension mr-1">Change Password</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Profile>
  );
};

export default Accountsecurity;

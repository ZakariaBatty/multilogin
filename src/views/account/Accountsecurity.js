import React from 'react';

const Accountsecurity = () => {
  return (
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
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  class="btn-extension mr-1"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header d-flex">
              <h5 class="modal-title" id="exampleModalLabel">
                Change password
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-group" style={{ marginBottom: '20px' }}>
                <label>Current Password</label>
                <input class="form-control" type="password" />
              </div>
              <div class="form-group" style={{ marginBottom: '20px' }}>
                <label>New Password</label>
                <input class="form-control" type="password" />
              </div>
              <div class="form-group" style={{ marginBottom: '20px' }}>
                <label>Confirm Password</label>
                <input class="form-control" type="password" />
              </div>
              <div
                style={{ color: 'rgb(128, 0, 0)', margin: '10px 0px' }}
              ></div>
            </div>
            <div class="modal-footer bo-top-border">
              <button class="btn-black">Okay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountsecurity;

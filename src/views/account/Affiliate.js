import React from 'react';
import copy from '../../assets/images/copy.svg';
import Profile from './Profile';

const Affiliate = () => {
  return (
    <>
      <div>
        <div style={{ float: 'right' }}>
          <a href="#">Schedule a demo</a>
        </div>
        <h4 class="tab-title">Affiliate</h4>
        <div class="row">
          <div class="col-md-6">
            <div
              style={{
                border: '1px solid rgb(221, 221, 221)',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  padding: '20px',
                  borderBottom: '1px solid rgb(221, 221, 221)',
                }}
              >
                Referral Code
              </div>
              <div style={{ padding: '20px' }}>
                <div class="input-group">
                  <output class="form-control text-center">ZYHBW6XU</output>
                  <div class="input-group-append">
                    <span
                      class="input-group-text"
                      style={{
                        background: ' rgb(255, 255, 255)',
                      }}
                    >
                      <img src={copy} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              style={{
                border: ' 1px solid rgb(221, 221, 221)',
                borderRadius: '5px',
              }}
            >
              <div style={{ padding: '20px' }}>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '50px' }}>0</div>
                    <div style={{ fontSize: '20px' }}>Referred</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <h4 class="tab-title">Achievements</h4>
            <div>
              <div
                class="text-center"
                style={{
                  padding: '10px 20px',
                  border: '1px solid rgb(221, 221, 221)',
                  borderRadius: '5px',
                }}
              >
                No achievements yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliate;

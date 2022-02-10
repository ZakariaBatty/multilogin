import React from 'react';
import './Help.css';
import SwitchAccount from '../../../../assets/images/blogs/SwitchAccount.svg';
import ShareSessionDevice from '../../../../assets/images/blogs/ShareSessionDevice.svg';
import MultiLogin from '../../../../assets/images/blogs/MultiLogin.svg';
import SessionIsolationTab from '../../../../assets/images/blogs/SessionIsolationTab.svg';
import DifferentBrowsers from '../../../../assets/images/blogs/DifferentBrowsers.svg';
import ProxyAddon from '../../../../assets/images/blogs/ProxyAddon.svg';
import ProtectSessionPriavacy from '../../../../assets/images/blogs/ProtectSessionPriavacy.svg';
import BlurFeature from '../../../../assets/images/blogs/BlurFeature.svg';
import SesssionTimer from '../../../../assets/images/blogs/SesssionTimer.svg';
import WeProtectPrivacy from '../../../../assets/images/blogs/WeProtectPrivacy.svg';
import RockSolidSecurity from '../../../../assets/images/blogs/RockSolidSecurity.svg';
import BookmarkFavSession from '../../../../assets/images/blogs/BookmarkFavSession.svg';

const Help = () => {
  return (
    <>
      {/* START Write High end something */}
      <section
        class="py-5 text-appear-container"
        style={{ marginTop: ' 130px' }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <h1 class="mt-0">Sendwin will help you</h1>
              </div>
            </div>
          </div>
          <div class="text-appear" style={{ opacity: '1' }}>
            <div class="row mt-4 pt-4 ">
              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img src={SwitchAccount} alt="" height="48" class="mb-2" />
                    <h3 class="mb-3">Switch accounts with ease</h3>
                    <p>
                      Switch between multiple account easily with just one click
                      access using Sendwin.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={ShareSessionDevice}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Share Session across device</h3>
                    <p>
                      Share all sessions across all your device with just one
                      click using Sendwin.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img src={MultiLogin} alt="" height="48" class="mb-2" />
                    <h3 class="mb-3">Mutiple login made easy</h3>
                    <p>
                      Speed up your productivity pipeline by 80% and work by 60%
                      using Sendwin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-1">
              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={SessionIsolationTab}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Session isolation on every tab</h3>
                    <p>
                      {' '}
                      Easily isolate and test more copy variations to decrease
                      your workload.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={DifferentBrowsers}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Different browser in single window</h3>
                    <p>
                      No more need for secondary browsers, private sessions, let
                      Sendwn handle these for you..
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={BookmarkFavSession}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Bookmark your favourite sessions</h3>
                    <p>
                      Save your favourite sessions account and most used
                      accounts directly in your browser tab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img src={ProxyAddon} alt="" height="48" class="mb-2" />
                    <h3 class="mb-3">Premium Proxy addon</h3>
                    <p>
                      Protect pages that you don’t feel like sharing like
                      account, billing pages without permission.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={ProtectSessionPriavacy}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Protect every Session Pages</h3>
                    <p>
                      Protect pages that you don’t feel like sharing like
                      account, billing pages without permission.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={BlurFeature}
                      alt="blur-features"
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Blur sessions tabs with ease</h3>
                    <p>
                      {' '}
                      Blur any selected text or page and Hide sensitive
                      information on a web page.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-1">
              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img src={SesssionTimer} alt="" height="48" class="mb-2" />
                    <h3 class="mb-3">Session timer for session share</h3>
                    <p class="">
                      Display Set timer on every session so you can see when you
                      run out time.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={WeProtectPrivacy}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">We protect your privacy </h3>
                    <p>
                      We do not use shared storage,so other tabs and websites
                      therefore cannot monitor your activity.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-pricing card-h-100">
                  <div class="card-body">
                    <img
                      src={RockSolidSecurity}
                      alt=""
                      height="48"
                      class="mb-2"
                    />
                    <h3 class="mb-3">Rock solid security</h3>
                    <p>
                      AES-256 for symmetric operations and RSA 2048 bit for
                      asymmetric operations to for every sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END Write High end something */}
    </>
  );
};

export default Help;

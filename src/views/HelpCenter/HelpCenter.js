import React from 'react';
import './HelpCenter.css';
import Youtube from '../../assets/images/youtube.png';

const HelpCenter = () => {
  return (
    <>
      {/* <!-- START HOW IT WORKS 1 --> */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <h1 className="mt-3 mb-5 text-center how-it-works-headline">
              Help Center
            </h1>
            <div className="card" style={{ color: 'black' }}>
              <div className="card-body">
                <h4>
                  Knowledge base
                  <a style={{ float: 'right' }} href>
                    <img
                      style={{ height: '1.5rem' }}
                      alt="icon"
                      src={Youtube}
                    />
                    &nbsp;<span>Watch video tutorial</span>
                  </a>
                </h4>

                <div className="row">
                  <div className="col">
                    <div className="mt-3">
                      <h5 className="m-0 pb-2">
                        <a
                          className="text-dark"
                          data-bs-toggle="collapse"
                          href="#getting-started"
                          role="button"
                          aria-expanded="true"
                          aria-controls="todayTasks"
                        >
                          <i className="uil uil-angle-down font-18"></i>Getting
                          Started <span className="text-muted">(4)</span>
                        </a>
                      </h5>

                      <div className="collapse show" id="getting-started">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  1. How to install SendWin for Chrome?
                                </a>
                              </div>
                            </div>

                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  2. How to install SendWin for Opera?
                                </a>
                              </div>
                            </div>

                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  3. How to install Sendwin for Edge?
                                </a>
                              </div>
                            </div>

                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  4. How many sessions can I have with the Free
                                  Plan?
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mt-3">
                      <h5 className="m-0 pb-2">
                        <a
                          className="text-dark"
                          data-bs-toggle="collapse"
                          href="#proxies"
                          role="button"
                          aria-expanded="true"
                          aria-controls="todayTasks"
                        >
                          <i className="uil uil-angle-down font-18"></i>Proxies
                          <span className="text-muted">(2)</span>
                        </a>
                      </h5>

                      <div className="collapse show" id="proxies">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  1. How to setup Proxy?
                                </a>
                              </div>
                            </div>

                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  2. How to setup Proxy for session?
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mt-3">
                      <h5 className="m-0 pb-2">
                        <a
                          className="text-dark"
                          data-bs-toggle="collapse"
                          href="#sessions"
                          role="button"
                          aria-expanded="true"
                          aria-controls="todayTasks"
                        >
                          <i className="uil uil-angle-down font-18"></i>Sessions{' '}
                          <span className="text-muted">(10)</span>
                        </a>
                      </h5>

                      <div className="collapse show" id="sessions">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  1. How to use multiple websites in the same
                                  session?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  2. How to open multiple sessions at once?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  3. How to move multiple sessions into a group?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  4. How to share all session?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  5. How to use block page feature in sessions?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  6. How to use block page for shared user?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  7. How to create Temporary sessions?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  8. How to change landing page url?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  9. How to share a session?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  10. How to open Sendwin in Incognito mode?
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mt-3">
                      <h5 className="m-0 pb-2">
                        <a
                          className="text-dark"
                          data-bs-toggle="collapse"
                          href="#issues"
                          role="button"
                          aria-expanded="true"
                          aria-controls="todayTasks"
                        >
                          <i className="uil uil-angle-down font-18"></i>
                          Potential issues{' '}
                          <span className="text-muted">(3)</span>
                        </a>
                      </h5>

                      <div className="collapse show" id="issues">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  1. How to get console log on Chrome?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  2. I'm being logged out, what can I do?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  className="help-center-a-tag"
                                  target="_blank"
                                >
                                  3. I have issues with Web Whatsapp, Google and
                                  Twitter.
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mt-3">
                      <h5 className="m-0 pb-2">
                        <a
                          className="text-dark"
                          data-bs-toggle="collapse"
                          href="#questions"
                          role="button"
                          aria-expanded="true"
                          aria-controls="todayTasks"
                        >
                          <i className="uil uil-angle-down font-18"></i>Other
                          questions <span className="text-muted">(4)</span>
                        </a>
                      </h5>

                      <div className="collapse show" id="questions">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  1. How can I set cart timer?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  2. How can i check extension version?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  3. Does Sendwin Support mobile devices?
                                </a>
                              </div>
                            </div>
                            <div className="row justify-content-sm-between">
                              <div className="col-sm mb-2 mb-sm-0">
                                <a
                                  href
                                  target="_blank"
                                  className="help-center-a-tag"
                                >
                                  4. What does Commercial license mean?
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
        </div>
      </section>
      {/* <!-- END HOW IT WORKS 1 --> */}
    </>
  );
};

export default HelpCenter;

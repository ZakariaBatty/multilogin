import React from 'react';
import './Compare.css';
import ConIonicMdCheckmark from 'assets/images/blogs/Icon-ionic-md-checkmark.svg';
import { Link } from 'react-router-dom';

const Compare = () => {
  return (
    <>
      {/* <!-- START HOW IT WORKS 1 --> */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <h1 className="mt-3 mb-5 text-center how-it-works-headline">
              Compare our Plans!
            </h1>
            <div className="card" style={{ width: '80%' }}>
              <div className="card-body">
                <table
                  className="table table-centered mb-0"
                  style={{ color: 'black' }}
                >
                  <thead style={{ fontSize: 'larger' }}>
                    <tr>
                      <th></th>
                      <th className="text-center">Free Plan</th>
                      <th className="text-center">Pro Plan</th>
                      <th className="text-center">Pro Plus Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sync between devices</td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Multi tab isolation</td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Session sharing</td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Guest session</td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Works on Latest Chrome</td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Commercial use</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Proxy support</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Cart timer</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Proxy per session</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bulk session creation</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bookmarks session</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Session share link</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Session Icons</td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Website session access</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Blur sessions</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>One click all session share</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Block sessions</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Automatic proxy assign to all session</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Automatic proxy assignment to new session</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <img
                          src={ConIonicMdCheckmark}
                          alt="icon"
                          style={{ width: '17px' }}
                        />
                      </td>
                    </tr>
                    <tr style={{ border: 'transparent' }}>
                      <td></td>
                      <td></td>
                      <td className="text-center">
                        <Link className="btn-black" to="/pricing">
                          Buy Now
                        </Link>
                      </td>
                      <td className="text-center">
                        <Link className="btn-black" to="/pricing">
                          Buy Now
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Compare;

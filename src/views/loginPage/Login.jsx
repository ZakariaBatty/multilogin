import React, { useState } from 'react';
import './Login.css';
import { saveAuthToLocalStorage } from '../../helpers/Item';

const Login = () => {
  const [login, setLogin] = useState({
    pass: '',
    login: '',
    _key: 'OrJA5IxBeH71YbeV3ecL',
  });

  var data = new URLSearchParams();
  data.append('_key', login._key);
  data.append('login', login.login);
  data.append('pass', login.pass);

  const handleInputChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handelSubmit = async e => {
    console.log(data);
    e.preventDefault();
    await fetch('https://sendy.degentle.com/api/login', {
      withCredentials: true,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: data.toString(),
    })
      .then(res => {
        return new Promise(resolve => {
          if (!res.id) {
            resolve('fail');
          }
          saveAuthToLocalStorage(res);
          console.log(res);
          console.log(res.id);
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      {/* <!-- START HOW IT WORKS 1 --> */}
      <section class="py-5">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-xxl-4 col-lg-5">
              <div class="card login-card">
                <div class="card-body">
                  <h1 class="login-page-header mb-3">Let's sign you in</h1>
                  <form onSubmit={handelSubmit}>
                    <div>
                      <div class="mb-3">
                        <label for="emailaddress" class="form-label">
                          Email address
                        </label>
                        <input
                          onChange={event => handleInputChange(event)}
                          class="form-control"
                          name="login"
                          type="email"
                          id="emailaddress"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div class="mb-4 secret-fields">
                        <label for="password" class="form-label">
                          Password
                        </label>
                        <div class="input-group input-group-merge">
                          <input
                            onChange={event => handleInputChange(event)}
                            type="password"
                            id="password"
                            class="form-control"
                            name="pass"
                            placeholder="Enter your password"
                          />
                          <div
                            class="input-group-text"
                            data-password="false"
                            id="pass-eye"
                          >
                            <span class="password-eye"></span>
                          </div>
                        </div>
                        <div style={{ color: '#800' }} id="error-message"></div>
                      </div>
                      <div class="mb-3 mb-0 text-center">
                        <button
                          type="submit"
                          class="btn-black"
                          id="submit-button"
                          style={{ width: '100%', padding: '0.7rem 2rem' }}
                        >
                          Log In
                        </button>
                      </div>
                    </div>
                  </form>
                  <div class="mt-3 text-center">
                    <p>
                      Don't have an account?
                      <a href="/register" class="ms-1">
                        <b>Register</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="hr-line" />
        </div>
      </section>

      {/* <!-- END FOOTER --> */}
    </>
  );
};

export default Login;

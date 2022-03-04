import React, { useState } from 'react';
import './Login.css';
// import axios from 'axios';
// axios.defaults.withCredentials = true;

const Login = () => {
  const [login, setLogin] = useState({
    pass: '',
    login: '',
    _key: '9c2t3Y8pXc8eOZ2MIh2g',
  });
  const [error, setError] = React.useState(false);

  const handleInputChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handelSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('https://sendy.degentle.com/api/login', {
        withCredentials: true,
        method: 'POST',
        login,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        console.log(response.json());
      }
      console.log('test');
    } catch (error) {
      console.log(error.response.data);
      console.log(error);

      // error && setError(error.response.data);
    }
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
                          name="pass"
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
                            name="login"
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

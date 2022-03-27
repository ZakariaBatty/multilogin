import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    pass: '',
    name_f: '',
    name_l: '',
  });

  var data = new URLSearchParams();
  data.append('_key', 'OrJA5IxBeH71YbeV3ecL');
  data.append('login', login.email);
  data.append('email', login.email);
  data.append('pass', login.pass);
  data.append('name_f', login.name_f);
  data.append('name_l', login.name_l);

  const handleInputChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handelSubmit = async e => {
    e.preventDefault();
    await fetch(`https://sendy.degentle.com/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: data.toString(),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('register', res);
        if (res.ok !== false) {
          return new Promise(resolve => {
            resolve('success');
            navigate('/login');
          });
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      {/* <!-- START HOW IT WORKS 1 --> */}
      <section class="py-5">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-xxl-5 col-lg-6">
              <div class="card login-card">
                <div class="card-body">
                  <h1 class="login-page-header mb-3">
                    Let's register yourself
                  </h1>
                  <form onSubmit={handelSubmit} class="register-form">
                    <div class="mb-3">
                      <label for="Firstname" class="form-label">
                        First Name
                      </label>
                      <input
                        onChange={event => handleInputChange(event)}
                        name="name_f"
                        class="form-control"
                        type="text"
                        id="fullname"
                        required
                        placeholder="Enter your First name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="Lastname" class="form-label">
                        Last Name
                      </label>
                      <input
                        onChange={event => handleInputChange(event)}
                        name="name_l"
                        class="form-control"
                        type="text"
                        id="fullname"
                        required
                        placeholder="Enter your Last Name"
                      />
                    </div>

                    <div class="mb-3">
                      <label for="emailaddress" class="form-label">
                        Email address
                      </label>
                      <input
                        onChange={event => handleInputChange(event)}
                        class="form-control"
                        type="email"
                        id="emailaddress"
                        required=""
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div class="mb-3 secret-fields">
                      <label for="password" class="form-label">
                        Password
                      </label>
                      <div class="input-group input-group-merge">
                        <input
                          onChange={event => handleInputChange(event)}
                          type="password"
                          id="password"
                          class="form-control"
                          placeholder="Enter your password"
                          name="pass"
                        />
                        {/* <div class="input-group-text" data-password="false">
                          <span class="password-eye"></span>
                        </div> */}
                      </div>
                    </div>

                    <div class="mb-4 secret-fields">
                      <label for="password" class="form-label">
                        Confirm Password
                      </label>
                      <div class="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          placeholder="Confirm your password"
                          name="confirm_password"
                        />
                        {/* <div class="input-group-text" data-password="false">
                          <span class="password-eye"></span>
                        </div> */}
                      </div>
                      <div style={{ color: '#800' }}></div>
                    </div>
                    {/* <div class="mb-4">
                      <label for="reffer-code" class="form-label">
                        Refer Code
                      </label>
                      <div class="input-group input-group-merge">
                        <input
                          type="text"
                          id="refer-code"
                          class="form-control"
                          placeholder="Refer Code"
                          name="refer_code"
                        />
                      </div>
                      <div style={{ color: '#800' }} id="error-message"></div>
                    </div> */}

                    <div class="mb-3 mb-0 text-center">
                      <button
                        class="btn-black"
                        type="submit"
                        style={{ width: '100%', padding: ' .7rem 2rem' }}
                        id="submit-button"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div class="mt-3 text-center">
                    <p>
                      Already have an account?
                      <a href="/login" class="ms-1">
                        <b>Login</b>
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
      {/* <!-- END HOW IT WORKS 1 --> */}
    </>
  );
};

export default Register;

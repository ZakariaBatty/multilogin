// save to local storage
export const saveAuthToLocalStorage = jwt => {
  localStorage.setItem('jwt', JSON.stringify(jwt));
};

// check if logged
export const isLogin = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

// logout
export const logout = cb => {
  localStorage.removeItem('jwt');
  document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  cb();
};

// authentication
export const checkAuth = authId => {
  return isLogin().auth._id === authId;
};

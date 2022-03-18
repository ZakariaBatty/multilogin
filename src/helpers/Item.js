// save to local storage
export const saveAuthToLocalStorage = userInfo => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

// check if logged
export const isLogin = () => {
  if (localStorage.getItem('userInfo')) {
    return true;
  } else {
    return false;
  }
};

// logout
export const logout = cb => {
  localStorage.removeItem('userInfo');
  document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  cb();
};

// authentication
export const checkAuth = authId => {
  return isLogin().auth._id === authId;
};

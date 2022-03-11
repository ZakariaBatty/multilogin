import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

//@ pages
import LandingPage from 'views/LandingPage/LandingPage';
import HelpCenter from 'views/HelpCenter/HelpCenter';
import Security from 'views/Security/Security';
import UseCases from 'views/UseCases/UseCases';
import { NavBar, Footer } from './components/';
import Pricing from 'views/Pricing/Pricing';
import Compare from 'views/Compare/Compare';
import PrivacyPolicy from 'views/PrivacyTerm/PrivacyPolicy';
import TermsServices from 'views/PrivacyTerm/TermsServices';
import Login from 'views/loginPage/Login';
import Register from 'views/loginPage/Register';
import Profile from 'views/account/Profile';
import Upgrade from 'views/account/Upgrade';
import Accountsecurity from 'views/account/Accountsecurity';
import Affiliate from 'views/account/Affiliate';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/security" element={<Security />} />
      <Route path="/Use-cases" element={<UseCases />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/compare-plans" element={<Compare />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-services" element={<TermsServices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-account" element={<Profile />} />
      <Route path="/my-account/upgrade" element={<Upgrade />} />
      <Route
        path="/my-account/account-security"
        element={<Accountsecurity />}
      />
      <Route path="/my-account/affiliate" element={<Affiliate />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

import React from "react";
// import { Fragment } from "react";
import {
  Login,
  SignUp,
  Navbar,
  Home,
  Welcome,
  CustomerDetails,
  ServiceProviderDetails,
  ShopProfile,
  Notification,
  Search,
  Passwordresetmail,
  Checkemail,
  Resetpassword,
} from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/customerdata" element={<CustomerDetails />} />
          <Route path="/passwordresetmail" element={<Passwordresetmail />} />
          <Route path="/checkemail" element={<Checkemail />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route
            path="/serviceproviderdetails"
            element={<ServiceProviderDetails />}
          />
          <Route path="/home" element={<Navbar />}>
            <Route path="" element={<Home />} />
            <Route path="shopprofile" element={<ShopProfile />} />
            <Route path="notification" element={<Notification />} />
            <Route path="search" element={<Search />} />
          </Route>
          {/* <Route path="/home" element={<Footer />} /> */}
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  Bookingpage,
  Customerprofile,
} from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [userindetifier, setUserIdentifier] = useState("");

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/welcome"
              element={<Welcome setuser={setUserIdentifier} />}
            />
            <Route path="/customerdata" element={<CustomerDetails />} />
            <Route path="/passwordresetmail" element={<Passwordresetmail />} />
            <Route path="/checkemail" element={<Checkemail />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route
              path="/serviceproviderdetails"
              element={<ServiceProviderDetails />}
            />

            <Route
              path="/home"
              element={<Navbar userindefier={userindetifier} />}
            >
              <Route path="" element={<Home />} />
              <Route path="bookingpage" element={<Bookingpage />} />
              <Route path="customerprofile" element={<Customerprofile />} />
              <Route path="shopprofile" element={<ShopProfile />} />
              <Route path="notification" element={<Notification />} />
              <Route path="search" element={<Search />} />
            </Route>

            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default App;

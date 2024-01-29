import "./App.css";

import { Route, Routes } from "react-router";

import UserProvider from "./context/UserProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";

import Signin from "./pages/public/views/Signin";
import Signup from "./pages/public/views/Signup";
import ForgotPassword from "./pages/public/views/ForgotPassword";
import ResetPassword from "./pages/public/views/ResetPassword";
import EmailActivation from "./pages/public/views/EmailActivation";

import Protected from "./components/Protected";

import Dashboard from "./pages/private/views/Dashboard";
import CreateShortUrl from "./pages/private/views/CreateShortUrl";
import TableDisplay from "./pages/private/views/TableDisplay";

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route
            path="/resetPassword/:dataString"
            element={<ResetPassword />}
          />
          <Route
            path="/emailActivation/:activationId"
            element={<EmailActivation />}
          />

          <Route path="*" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Protected redirect={<Home />}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/createUrlShorts"
            element={
              <Protected redirect={<Home />}>
                <CreateShortUrl />
              </Protected>
            }
          />
          <Route
            path="/summary"
            element={
              <Protected redirect={<Home />}>
                <TableDisplay />
              </Protected>
            }
          />
        </Routes>

        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;

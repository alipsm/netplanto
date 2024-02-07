import { Navigate, Route, Routes } from "react-router";
import Welcome from "./pages/welcome";
import AccountOperation from "./components/accountOperation";
import Login from "./pages/accountOperation/login";
import SignUp from "./pages/accountOperation/signUp";
import ForgotPassword from "./pages/accountOperation/forgetPassword";
import ResetPassword from "./pages/accountOperation/resetPassword";
import Scan from "./pages/dashboard/scan";
import Dashboard from "./components/dashboard";
import RegisterQrcode from "./pages/dashboard/registerQrcode";
import LoadingPage from "./components/loading";
import Search from "./pages/dashboard/search";

function App() {
  return (
    <>
      <div className=" w-screen h-screen overflow-hidden">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="scan" element={<Scan />} />
            <Route path="search" element={<Search />} />
            <Route path="registerQrcode" element={<RegisterQrcode />} />
            <Route path="*" element={<Scan />} />
          </Route>
          <Route path="/accountOperation" element={<AccountOperation />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="resetPassword" element={<ResetPassword />} />
          </Route>
          <Route path="/" element={<Welcome />} />
          <Route path="loading" element={<LoadingPage />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
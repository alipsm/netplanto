import { Navigate, Route, Routes } from "react-router";
import Welcome from "./pages/welcome";
import AccountOperation from "./components/accountOperation";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

function App() {
  return (
    <>
      <div className=" w-screen h-screen">

          <Routes>
            <Route path="/accountOperation" element={<AccountOperation/>}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            </Route>
            <Route path="/" element={<Welcome />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Routes>
      </div>
    </>
  );
}

export default App;

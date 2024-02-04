import { Navigate, Route, Routes } from "react-router";
import Welcome from "./pages/welcome";

function App() {
  return (
    <>
      <div className=" w-screen h-screen">

          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Routes>
      </div>
    </>
  );
}

export default App;

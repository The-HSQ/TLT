import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LoginPage, SignupPage } from "./components/auth/AuthPages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

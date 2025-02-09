import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LoginPage, SignupPage } from "./components/auth/AuthPages";
import Dash_Home from "./pages/Dashboard/Dash_Home";
import { Toaster } from "react-hot-toast";
import OtpPage from "./components/auth/OtpPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Blog from "./pages/Blog";
import Layout from "./components/routes/Layout";
import Features from "./pages/Features";
import Resources from "./pages/Resources";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />

        {/* Routes Wrapped in Layout (Header & Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Route>

        {/* Dashboard Route (No Layout) */}
        <Route path="/dashhome" element={<Dash_Home />} />
      </Routes>
    </div>
  );
}

export default App;

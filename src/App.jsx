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
import Demo from "./pages/Demo";
import KnowledgeDetailPage from "./pages/KnowledgeDetailPage";
import StatDetailPage from "./pages/StatDetailPage";
import UsagePage from "./pages/UsagePage";
import StatPage from "./pages/StatPage";
import UsageDetailPage from "./pages/UsageDetailPage";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />

        <Route path="/demo" element={<Demo />} />
        {/* Routes Wrapped in Layout (Header & Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/stats" element={<StatPage />} />
          <Route path="/usage" element={<UsagePage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/knowledge/:slug" element={<KnowledgeDetailPage />} />
          <Route path="/stats/:slug" element={<StatDetailPage />} />
          <Route path="/usage/:slug" element={<UsageDetailPage />} />
        </Route>

        {/* Dashboard Route (No Layout) */}
        <Route path="/dashhome" element={<Dash_Home />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./components/auth/AuthPages";
import { Toaster } from "react-hot-toast";
import OtpPage from "./components/auth/OtpPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import CompanyPage from "./pages/CompanyPage";
import PricingPage from "./pages/PricingPage";
import Blog from "./pages/Blog";
import Layout from "./routes/Layout";
import Features from "./pages/CompanyPage";
import Demo from "./pages/Demo";
import KnowledgeDetailPage from "./pages/KnowledgeDetailPage";
import StatDetailPage from "./pages/StatDetailPage";
import UsagePage from "./pages/UsagePage";
import StatPage from "./pages/StatPage";
import UsageDetailPage from "./pages/UsageDetailPage";
import DashHome from "./pages/Dashboard/DashHome";
import Content from "./pages/Dashboard/Content";
import Chat from "./pages/Dashboard/Chat";
import KnowledgeBase from "./pages/Dashboard/KnowledgeBase";
import VoiceOver from "./pages/Dashboard/VoiceOver";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/stats" element={<StatPage />} />
          <Route path="/usage" element={<UsagePage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/knowledge/:slug" element={<KnowledgeDetailPage />} />
          <Route path="/stats/:slug" element={<StatDetailPage />} />
          <Route path="/usage/:slug" element={<UsageDetailPage />} />
        </Route>

        {/* Dashboard Route (No Layout) */}
        <Route path="/dashboard" element={<DashHome />} />
        <Route path="/content" element={<Content />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/voice-over" element={<VoiceOver />} />
      </Routes>
    </div>
  );
}

export default App;

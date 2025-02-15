import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage, SignupPage } from "./components/auth/AuthPages";
import { Toaster } from "react-hot-toast";
import OtpPage from "./components/auth/OtpPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Blog from "./pages/Blog";
import Layout from "./routes/Layout";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Demo from "./pages/Demo";
import KnowledgeDetailPage from "./pages/KnowledgeDetailPage";
import StatDetailPage from "./pages/StatDetailPage";
import UsagePage from "./pages/UsagePage";
import StatPage from "./pages/StatPage";
import UsageDetailPage from "./pages/UsageDetailPage";
import DashHome from "./pages/Dashboard/DashHome";
import Analytics from "./pages/Dashboard/Content";
import Settings from "./pages/Dashboard/KnowledgeBase";
import Content from "./pages/Dashboard/Content";
import Chat from "./pages/Dashboard/Chat";
import KnowledgeBase from "./pages/Dashboard/KnowledgeBase";
import VoiceOver from "./pages/Dashboard/VoiceOver";
import SolutionPage from "./pages/SolutionPage";

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
          <Route path="/resources" element={<Resources />} />
          <Route path="/solutions" element={<SolutionPage />} />
          {/* <Route path="/pricing" element={<Resources />} /> */}

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

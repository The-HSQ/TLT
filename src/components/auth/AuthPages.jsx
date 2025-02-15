import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { loginSchema } from "../../schema/loginSchema";
import { signupSchema } from "../../schema/signupSchema";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login, signup } from "../../features/authSlice";

// Header Component for Login/Signup
const Header = ({ btnTitle }) => {
  return (
    <header className="fixed top-0 left-0 bg-white z-[100000] w-full flex border-b border-gray-300 justify-center items-center px-[1rem] md:px-[2rem] lg:px-[2.5rem] py-4">
      {/* <div className="container flex justify-between items-center"> */}
      <div className=" custom-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="cursor-pointer text-4xl font-bold">TLT</h1>
        </Link>

        {/* Navigation Button */}
        <Link
          to={btnTitle === "Login" ? "/signup" : "/login"}
          className="tracking-[1px] flex justify-center items-center gap-2 bg-btn text-white px-6 py-2 rounded-full transition font-semibold"
        >
          {btnTitle === "Login" ? "Sign Up" : "Login"}
          <ArrowRight size={17} />
        </Link>
      </div>
    </header>
  );
};

// Auth Layout Wrapper
export const AuthLayout = ({ children, title }) => {
  const location = useLocation();
  const isOTP = location.pathname === "/otp";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let message;
  switch (title) {
    case "Login":
      message = "Access your account to continue.";
      break;
    case "Sign Up":
      message = "Create a new account to get started!";
      break;
    case "Enter OTP":
      message = "Enter the OTP sent to your email.";
      break;
    default:
      message = "Welcome! Please proceed with the necessary action.";
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        {title === "Enter OTP" ? "" : <Header btnTitle={title} />}
        <div className=" mt-[70px] w-full flex justify-center py-6 lg:py-20 2xl:py-64">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md bg-[#6724C5] sm:bg-white sm:shadow-2xl rounded-2xl sm:border border-gray-200 p-8"
          >
            <h2 className="text-3xl font-extrabold text-center text-white sm:text-gray-800 mb-4">
              {title}
            </h2>
            <p className="text-gray-100 sm:text-gray-600 text-sm text-center mb-8">
              {message}
            </p>
            {children}
          </motion.div>
        </div>
        {title === "Enter OTP" ? "" : <Footer />}
      </div>
    </>
  );
};

// Reusable Stylish Input Component
export const StylishInput = ({ label, type, register, error, disabled }) => (
  <div className="relative">
    <input
      type={type}
      {...register}
      placeholder={label}
      autoComplete="true"
      disabled={disabled}
      className={`peer w-full rounded-lg border-2 px-4 pt-6 pb-2 text-white sm:text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm ${error ? "border-red-500" : "border-gray-300"
        }`}
      id={label}
    />
    <label
      htmlFor={label}
      className="absolute left-3 top-[5px] hover:cursor-text text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[5px] peer-focus:text-indigo-500 peer-focus:text-sm"
    >
      {label}
    </label>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

// Login Page
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const resultMatch = await dispatch(
        login({ ...data, provider: "credentials" })
      );

      if (login.rejected.match(resultMatch)) {
        toast.error("Username not found");
        return;
      }

      if (login.fulfilled.match(resultMatch)) {
        toast.success("Login Successful! Redirecting to Dashboard...");
        localStorage.setItem("token", resultMatch.payload.details.access_token);
        navigate("/dashhome");
      }
    } catch (error) {
      toast.error("Login failed: " + error.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <StylishInput
          label="Username"
          type="text"
          register={register("username")}
          error={errors.username}
          disabled={loading}
        />
        <StylishInput
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password}
          disabled={loading}
        />
        <p className="text-center text-wrap text-gray-100 sm:text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className=" text-balance text-blue-500">
            Sign up
          </Link>
        </p>
        <motion.button
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg py-3 font-medium transition shadow-lg ${loading ? "bg-gray-400 text-black cursor-not-allowed" : "bg-indigo-600 cursor-pointer text-white hover:bg-indigo-700"
            }`}
        >
          {loading ? "Loading..." : "Login"}
        </motion.button>
      </form>
    </AuthLayout>
  );
};

// Signup Page
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(signupSchema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const resultMatch = await dispatch(signup(data));

      if (signup.rejected.match(resultMatch)) {
        toast.error("Email already exists.");
        return;
      }

      if (signup.fulfilled.match(resultMatch)) {
        toast.success("Signup successful! Enter OTP to verify.");
        navigate("/otp", { state: { email: data.email } });
      }
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <AuthLayout title="Sign Up">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <StylishInput
          label="Username"
          type="text"
          disabled={loading}
          register={register("username")}
          error={errors.username}
        />
        <StylishInput
          label="Email"
          type="email"
          disabled={loading}
          register={register("email")}
          error={errors.email}
        />
        <StylishInput
          label="Password"
          type="password"
          disabled={loading}
          register={register("password")}
          error={errors.password}
        />
        <StylishInput
          label="Confirm Password"
          type="password"
          disabled={loading}
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />
        <p className=" text-center text-white sm:text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
        <motion.button
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading} // Disable button while loading
          className={` w-full rounded-lg py-3 hover:cursor-pointer font-medium transition shadow-lg ${loading
            ? " bg-gray-400 text-black cursor-not-allowed "
            : " bg-indigo-600 text-white hover:bg-indigo-700 "
            }`}
        >
          {loading ? "Loading..." : "Sign Up"}
        </motion.button>
      </form>
    </AuthLayout>
  );
};

export { LoginPage, SignupPage };

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { loginSchema } from "../schema/loginSchema";
import { signupSchema } from "../schema/signupSchema";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { ArrowRight } from "lucide-react";
=======
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login, signup } from "../../features/authSlice";
>>>>>>> 8d33dbb (Second commit)

// header for signup and login
const Header = ({ btnTitle }) => {
  return (
<<<<<<< HEAD
    <header className=" relative flex justify-center items-center px-5 py-4 ">
=======
    <header className=" fixed top-0 left-0 bg-white z-[100000] w-full flex justify-center items-center px-5 py-4 ">
>>>>>>> 8d33dbb (Second commit)
      <div className="container flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center justify-center gap-10">
          {/* Logo */}
          <Link to='/'>
            <h1 className="cursor-pointer text-4xl font-bold ">TLT</h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <Link to={btnTitle === 'Login' ? '/signup' : '/login'} className=" tracking-[1px] text-center flex justify-center items-center gap-2  bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover hover:-translate-y-[-1px] font-semibold ">
            {btnTitle === 'Login' ? 'SignUp' : 'Login'}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  )
}
<<<<<<< HEAD
=======

export const AuthLayout = ({ children, title }) => {
  const location = useLocation();
  const isOTP = location.pathname === '/otp';
>>>>>>> 8d33dbb (Second commit)

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
<<<<<<< HEAD
      <div className=" min-h-screen flex flex-col justify-between ">
        <Header btnTitle={title} />
        <div className=" w-full flex justify-center py-6 lg:py-20 2xl:py-64 ">
=======
      <div className={` ${isOTP ? '' : 'mt-[70px]'} min-h-screen flex flex-col ${title === 'Enter OTP' ? 'justify-center' : 'justify-between' } `}>
        {title === 'Enter OTP' ? '' : <Header btnTitle={title} />}
        <div className=" flex justify-center py-6 lg:py-20 2xl:py-64 ">
>>>>>>> 8d33dbb (Second commit)
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
<<<<<<< HEAD
            className="w-full max-w-md bg-transparent sm:bg-white sm:shadow-2xl rounded-2xl sm:border border-gray-200 p-8"
=======
            className="w-full max-w-md bg-[#31305d] sm:bg-white rounded-2xl border border-gray-200 p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.3)]"
>>>>>>> 8d33dbb (Second commit)
          >
            <h2 className="text-3xl font-extrabold text-center text-white sm:text-gray-800 mb-4">
              {title}
            </h2>
            <p className=" text-gray-100 sm:text-gray-600 text-sm text-center mb-8">
<<<<<<< HEAD
              {title === "Login"
                ? "Access your account to continue."
                : "Create a new account to get started!"}
=======
              {message}
>>>>>>> 8d33dbb (Second commit)
            </p>
            {children}
          </motion.div>
        </div>
<<<<<<< HEAD
        <Footer />
=======
        {title === 'Enter OTP' ? '' : <Footer />}
>>>>>>> 8d33dbb (Second commit)
      </div>
    </>
  )
};

// InputStylish
<<<<<<< HEAD
const StylishInput = ({ label, type, register, error }) => (
=======
export const StylishInput = ({ label, type, register, error, disabled }) => (
>>>>>>> 8d33dbb (Second commit)
  <div className="relative">
    <input
      type={type}
      {...register}
      placeholder={label}
      autoComplete='true'
<<<<<<< HEAD
=======
      disabled={disabled}
>>>>>>> 8d33dbb (Second commit)
      className={`peer w-full rounded-lg border-2 px-4 pt-6 pb-2 text-white sm:text-gray-900 placeholder-transparent placeholder:select-none focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition ${error ? "border-red-500" : "border-gray-300"
        }`}
      id={label}
    />
    <label
      htmlFor={label}
      className="absolute left-3 top-[5px] cursor-text text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[5px] peer-focus:text-indigo-500 peer-focus:text-sm"
    >
      {label}
    </label>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

<<<<<<< HEAD
// SignUpPage
=======
// LoginPage
>>>>>>> 8d33dbb (Second commit)
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const resultMatch = await dispatch(login({
        ...data,
        provider: "credentials"
      }));

      if (login.rejected.match(resultMatch)) {
        toast.error("Username not Found");
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
      setLoading(false); // Stop loading
      reset();
    }
  };


  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <StylishInput
<<<<<<< HEAD
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email}
=======
          label="Username"
          type="text"
          register={register("username")}
          disabled={loading}
          error={errors.username}
>>>>>>> 8d33dbb (Second commit)
        />
        <StylishInput
          label="Password"
          type="password"
          disabled={loading}
          register={register("password")}
          error={errors.password}
        />
        <p className="text-center text-wrap text-gray-100 sm:text-gray-600 mt-4">
          Don't have an account? <Link to='/signup' className="text-wrap text-blue-500">Sign up</Link>
        </p>
        <motion.button
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading} // Disable button while loading
          className={` w-full rounded-lg py-3 hover:cursor-pointer font-medium transition shadow-lg ${loading ? " bg-gray-400 text-black cursor-not-allowed " : " bg-indigo-600 text-white hover:bg-indigo-700 "
            }`}
        >
          {loading ? 'Loading...' : 'Login'}
        </motion.button>
      </form>
    </AuthLayout>
  );
};

// SignUpPage
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const resultMatch = await dispatch(signup(data));

      debugger

      if (login.rejected.match(resultMatch)) {
        toast.error("Email Already Exist...");
        return;
      }

      if (login.fulfilled.match(resultMatch)) {
        toast.success("Signup Successful! Enter OTP to verify.");
        navigate("/otp", { state: { email: data.email } }); // Pass email for OTP verification
      }
    } catch (error) {
      toast.error("Signup Response Failed...");
    } finally {
      setLoading(false); // Stop loading
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
          Already have an account? <Link to='/login' className="text-blue-500">Sign in</Link>
        </p>
        <motion.button
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading} // Disable button while loading
          className={` w-full rounded-lg py-3 hover:cursor-pointer font-medium transition shadow-lg ${loading ? " bg-gray-400 text-black cursor-not-allowed " : " bg-indigo-600 text-white hover:bg-indigo-700 "
            }`}
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </motion.button>
      </form>
    </AuthLayout>
  );
};


export { LoginPage, SignupPage };

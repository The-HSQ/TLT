import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { loginSchema } from "../schema/loginSchema";
import { signupSchema } from "../schema/signupSchema";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { ArrowRight } from "lucide-react";

// header for signup and login
const Header = ({ btnTitle }) => {
  return (
    <header className=" relative flex justify-center items-center px-5 py-4 ">
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

const AuthLayout = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" min-h-screen flex flex-col justify-between ">
        <Header btnTitle={title} />
        <div className=" w-full flex justify-center py-6 lg:py-20 2xl:py-64 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md bg-transparent sm:bg-white sm:shadow-2xl rounded-2xl sm:border border-gray-200 p-8"
          >
            <h2 className="text-3xl font-extrabold text-center text-white sm:text-gray-800 mb-4">
              {title}
            </h2>
            <p className=" text-gray-100 sm:text-gray-600 text-sm text-center mb-8">
              {title === "Login"
                ? "Access your account to continue."
                : "Create a new account to get started!"}
            </p>
            {children}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  )
};

// InputStylish
const StylishInput = ({ label, type, register, error }) => (
  <div className="relative">
    <input
      type={type}
      {...register}
      placeholder={label}
      autoComplete='true'
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

// SignUpPage
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    reset({
      username: '',
      password: ''
    })
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <StylishInput
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <StylishInput
          label="Password"
          type="password"
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
          className="w-full bg-indigo-600 text-white rounded-lg py-3 font-medium hover:bg-indigo-700 transition shadow-lg"
        >
          Login
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

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    reset()
  };

  return (
    <AuthLayout title="Sign Up">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <StylishInput
          label="Username"
          type="text"
          register={register("username")}
          error={errors.username}
        />
        <StylishInput
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <StylishInput
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password}
        />
        <StylishInput
          label="Confirm Password"
          type="password"
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
          className="w-full bg-indigo-600 text-white rounded-lg py-3 font-medium hover:bg-indigo-700 transition shadow-lg"
        >
          Sign Up
        </motion.button>
      </form>
    </AuthLayout>
  );
};

export { LoginPage, SignupPage };

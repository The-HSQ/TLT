import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { otpSchema } from "../../schema/otpSchema";
import { AuthLayout, StylishInput } from "./AuthPages";
import { verifyOtp } from "../../features/authSlice";

const OtpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(otpSchema),
  });

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = location.state?.email; // Get email from previous signup step

  const [loading, setLoading] = useState(false); // Loading state
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [expired, setExpired] = useState(false); // OTP Expiry State

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setExpired(true);
    }
  }, [timeLeft]);

  const onSubmit = async (data) => {
    if (expired) {
      toast.error("OTP has expired. Request a new one.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await dispatch(verifyOtp({ email, otp: data.otp }));
      console.log(response);

      if (login.rejected.match(resultMatch)) {
        toast.error("Invalid OTP. Please try again.");
        return;
      }

      if (login.fulfilled.match(resultMatch)) {
        toast.success("OTP Verified! Redirecting to Login...");
        navigate("/login");
      }
    } catch (error) {
      toast.error("OTP verification failed.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <AuthLayout title="Enter OTP">
      <p className="text-white sm:text-black text-center -mt-5 mb-3">
        Email: {email}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <StylishInput
          label="OTP Code"
          type="text"
          disabled={loading}
          register={register("otp")}
          error={errors.otp}
        />

        <p className=" text-center pl-1 text-xs text-red-500 font-semibold">
          {expired ? "OTP Expired!" : `OTP is valid for ${formatTime(timeLeft)}`}
        </p>

        <motion.button
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading || expired} // Disable when expired
          className={`w-full text-white hover:cursor-pointer rounded-lg py-3 font-medium transition shadow-lg ${loading || expired
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
          {loading ? "Verifying..." : expired ? "OTP Expired" : "Verify OTP"}
        </motion.button>
      </form>
    </AuthLayout>
  );
};

export default OtpPage;

import * as yup from "yup";

export const signupSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must have at least one lowercase letter")
        .matches(/[A-Z]/, "Password must have at least one uppercase letter")
        .matches(/[0-9]/, "Password must have at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must have at least one special character")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});
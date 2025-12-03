import * as Yup from "yup";

export const fatLossSchema = Yup.object().shape({
  currentWeight: Yup.number()
    .required("Current weight is required")
    .min(30, "Weight must be at least 30 kg")
    .max(300, "Weight must be less than 300 kg"),
  targetWeight: Yup.number()
    .required("Target weight is required")
    .min(30, "Weight must be at least 30 kg")
    .max(300, "Weight must be less than 300 kg")
    .lessThan(
      Yup.ref("currentWeight"),
      "Target weight must be less than current weight"
    ),
  timeframe: Yup.string().required("Timeframe is required"),
  activityLevel: Yup.string().required("Activity level is required"),
  preferredWorkout: Yup.string().required("Preferred workout type is required"),
});

export const trainerConnectSchema = Yup.object().shape({
  sleepHours: Yup.number()
    .required("Sleep hours are required")
    .min(0, "Sleep hours cannot be negative")
    .max(24, "Sleep hours cannot exceed 24 hours"),
  stressLevel: Yup.string().required("Stress level is required"),
  workType: Yup.string().required("Work type is required"),
  currentMood: Yup.string().required("Current mood is required"),
  dietType: Yup.string().required("Diet type is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const signupSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

export const resetPasswordNewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

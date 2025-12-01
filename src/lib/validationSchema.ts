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

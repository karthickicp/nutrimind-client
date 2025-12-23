export type MealType = "breakfast" | "lunch" | "snack" | "dinner";

export type Meal = {
  title: string;
  calories: number;
  tags?: string[];
};

export type DayMeals = Record<MealType, Meal>;

export type DayPlan = {
  date: string;
  label: string;
  meals: DayMeals;
};

export type WeekPlan = {
  weekNumber: number;
  days: DayPlan[];
};

export type MonthPlan = {
  month: string;
  weeks: WeekPlan[];
};

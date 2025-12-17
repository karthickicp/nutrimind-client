"use client";

import { toast } from "sonner";

type ToastOptions = {
  description?: string;
  duration?: number;
  id?: string;
};

export const toaster = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, {
      description: options?.description,
      duration: options?.duration,
      id: options?.id,
    }),

  error: (message: string, options?: ToastOptions) =>
    toast.error(message, {
      description: options?.description,
      duration: options?.duration,
      id: options?.id,
    }),

  info: (message: string, options?: ToastOptions) =>
    toast.info(message, {
      description: options?.description,
      duration: options?.duration,
      id: options?.id,
    }),

  warning: (message: string, options?: ToastOptions) =>
    toast.warning(message, {
      description: options?.description,
      duration: options?.duration,
      id: options?.id,
    }),

  loading: (message: string, options?: ToastOptions) =>
    toast.loading(message, {
      description: options?.description,
      id: options?.id,
    }),

  dismiss: (id?: string) => toast.dismiss(id),
};

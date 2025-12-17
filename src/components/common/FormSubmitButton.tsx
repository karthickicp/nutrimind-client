"use client";

import { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";

import { Button, buttonVariants } from "../ui/button";
import { Spinner } from "../ui/spinner";

// import { LoaderOverlay } from "./ui";

export const FormSubmitButton = ({
  buttonText,
  disabled,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { buttonText: string }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" disabled={disabled || pending} {...props}>
        {pending && <Spinner />}
        {buttonText}
      </Button>
    </>
  );
};

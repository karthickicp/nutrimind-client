"use client";

import { useFormStatus } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { VariantProps } from "class-variance-authority";

// import { LoaderOverlay } from "./ui";

export const FormSubmitButton = ({
  buttonText,
  disabled,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { buttonText: string }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" disabled={disabled || pending}>
        {pending && <Spinner />}
        {buttonText}
      </Button>
    </>
  );
};

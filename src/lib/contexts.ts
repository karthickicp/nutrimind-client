import { UserDetailsFormikContextProps } from "@/app/(protected)/layout/provider";
import { createContext, useContext } from "react";

export const UserDetailsFormikContext =
  createContext<UserDetailsFormikContextProps | null>(null);

export const useUserDetails = (): UserDetailsFormikContextProps =>
  //@ts-ignore
  useContext(UserDetailsFormikContext);

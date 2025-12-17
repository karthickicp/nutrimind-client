import { createContext, useContext } from "react";

import { UserDetailsFormikContextProps } from "@/app/(protected)/layout/provider";

export const UserDetailsFormikContext =
  createContext<UserDetailsFormikContextProps | null>(null);

export const useUserDetails = (): UserDetailsFormikContextProps =>
  //@ts-ignore
  useContext(UserDetailsFormikContext);

"use client";

import { createContext, useContext } from "react";

export const UserDetailsFormikContext = createContext<any>({});
export const useUserDetails = () => useContext(UserDetailsFormikContext);

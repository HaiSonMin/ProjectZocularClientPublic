"use client";

import { useAuthStore } from "@/app/stores/useAuth";
import { IUser } from "@/interfaces/models/IUser.interface";
import { useEffect } from "react";

export function AuthInitializer({ user }: { user: IUser | null }) {
  const { setUser } = useAuthStore();
  console.log("user", user);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  return null;
}

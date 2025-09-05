"use server";
import { auth } from "@/lib/auth";

export const signInUser = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return { succest: true, message: "Sign in successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, messsage: e.message || "Failed to sign in" };
  }
};

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    return { succest: true, message: "Sign up successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, messsage: e.message || "Failed to sign up" };
  }
};

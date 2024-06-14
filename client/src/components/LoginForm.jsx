import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { Button } from "./ui/button";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { googleSubmitHandler } from "@/utils/GoogleAuthHandler";
import { useToast } from "./ui/use-toast";

const LoginForm = ({ setIsAnimated, isAnimated }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    const requestData = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await fetch(`${apiURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      if (responseData.token) {
        Cookies.set("token", responseData.token, {
          expires: 29,
        });
        localStorage.setItem("token", responseData.token);
        router.push("/");
      } else {
        alert(responseData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error response:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="selection:bg-primary-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-primary">Welcome back!</h1>
              <Button
                className="my-6 p-4 uppercase rounded-lg   font-semibold text-center flex items-center justify-center gap-2 w-full focus:outline-none focus:ring  focus:ring-opacity-80 cursor-pointer"
                onClick={() => googleSubmitHandler(toast)}
              >
                <FaGoogle className="text-2xl" /> Sign In With Google
              </Button>
              <div className="w-full text-primary flex flex-row before:flex-1 before:border before:border-primary before:m-auto after:flex-1 after:border after:border-primary after:m-auto before:mr-3 after:ml-3">
                OR CONTINUE WITH
              </div>
              <form className="mt-8" onSubmit={submitHandler}>
                <div className="relative">
                  <input
                    id="signin-email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary-600"
                    placeholder="example@gmail.com"
                    required
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-primary/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="signin-password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-primary text-primary placeholder-transparent focus:outline-none focus:border-primary-600"
                    placeholder="Password"
                    required
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-primary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary/400 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <Button
                  type="submit"
                  className="mt-10  uppercase font-semibold text-center w-full"
                >
                  {loading ? "Signing You In..." : "Sign In"}
                </Button>
              </form>
              <Link
                href="#"
                className="mt-4 block text-sm text-center font-medium text-primary-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Forgot your password?
              </Link>
              <div className="flex md:hidden gap-2 items-center justify-center my-4">
                <Button
                  type="button"
                  className="text-primary-500 transition-transform ease-in"
                  onClick={() => {
                    setIsAnimated(!isAnimated);
                  }}
                >
                  Don&apos;t have an Account? Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

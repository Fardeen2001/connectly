"use client";
import LeftOverlayContent from "@/components/LeftOverlayContent";
import Loading from "@/components/Loading";
import LoginForm from "@/components/LoginForm";
import RightOverlayContent from "@/components/RightOverlayContent";
import SignupForm from "@/components/SignupForm";
import React, { useEffect, useState } from "react";

const Auth = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg = "bg-gradient-to-r from-primary via-primary to-primary";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-screen w-full bg-white relative overflow-hidden rounded-lg">
      <div
        id="signin"
        className={`bg-white w-full h-full md:w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0 hidden" : ""
          }`}
      >
        <LoginForm isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      </div>

      <div
        id="signup"
        className={`md:absolute md:top-0 md:left-0 h-full w-full md:w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated
            ? "md:translate-x-full opacity-100 z-50 animate-show"
            : "opacity-0 hidden z-10"
          }`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <SignupForm isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
        </div>
      </div>

      <div
        id="overlay-container"
        className={`absolute top-0 md:left-1/2 w-full md:w-1/2 h-full overflow-hidden  transition-transform duration-700 ease-in-out z-100 ${isAnimated ? "-translate-x-full" : "hidden md:!block"
          }`}
      >
        <div
          id="overlay"
          className={`${overlayBg} hidden md:flex relative -left-full h-full w-[200%] transform  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : "translate-x-0 "
            }`}
        >
          <div
            id="overlay-left"
            className={`md:w-1/2 w-full h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%]  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-0" : "-translate-x-[20%] "
              }`}
          >
            <LeftOverlayContent
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
          <div
            id="overlay-right"
            className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : "translate-x-0 "
              }`}
          >
            <RightOverlayContent
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

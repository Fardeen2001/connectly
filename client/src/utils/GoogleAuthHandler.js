import { authReducer } from "@/redux/reducers/auth";
import Cookies from "js-cookie";

// `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google/callback`
export const googleSubmitHandler = async (toast) => {
  try {
    toast({
      description: "Creating User",
    });
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`, "_self");
  } catch (error) {
    toast({
      description: error?.message,
    });
  }
};
export const getUserData = async (userId, dispatch, router) => {
  console.log(userId);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login/sucess?userId=${userId}`
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
    if (data) {
      Cookies.set("token", data?.token, {
        expires: 29,
      });
      localStorage.setItem("token", data?.token);
      dispatch(
        authReducer({
          id: data?.id,
          name: data?.name,
          email: data?.email,
          profilePicture: data?.profileImage,
          token: data?.token,
        })
      );
    }
  } catch (error) {
    router.replace("/auth");
    console.log(error);
  }
};

export const googleLogoutHandler = async (userId, toast) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/googleLogout?userId=${userId}`
    );
    await data.json();
    toast({
      description: "Logged Out Successfully",
    });
  } catch (error) {
    toast({
      description: "Please try again",
    });
  }
};

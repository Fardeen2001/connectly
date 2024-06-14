"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import {
  Post,
  SideBar,
  StoryCard,
  CreatePost,
  RightNav,
  Footer,
} from "../../components";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { getUserData } from "@/utils/GoogleAuthHandler";
const SearchParamsComp = ({ setUserId }) => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const userId = searchParams.get("id");

    if (userId) {
      setUserId(userId);
    }
  }, []);
  return <div className="hidden"></div>;
};
const page = () => {
  const [userId, setUserId] = useState();

  const dispatch = useDispatch();
  const router = useRouter();
  //fardeen
  useEffect(() => {
    if (userId) {
      getUserData(userId, dispatch, router);
    }
  }, [userId]);
  return (
    <>
      <div className="grid-container relative">
        //don't remove this
        <SearchParamsComp setUserId={setUserId} />
        <div className="p-5 flex items-center gap-5 story-card">
          <StoryCard />
        </div>
        <div className="sidebar-left">
          <SideBar />
        </div>
        <div className="sidebar-right p-5">
          <RightNav />
        </div>
        <div className="feed-section mx-auto">
          <div className="flex items-center justify-center flex-col ">
            <CreatePost />
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

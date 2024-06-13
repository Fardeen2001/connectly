"use client";
import { Post, RightNav, SideBar } from "@/components";
import { Img, Pic, cover_profile } from "../assets";
import Link from "next/link";
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TimeLine from "@/components/TimeLine";
import AboutProfile from "@/components/AboutProfile";
import MediaPost from "@/components/MediaPost";
import Cookies from "js-cookie";

const Profile = () => {
  const [request, setRequest] = useState(false);
  const [activeTab, setActiveTab] = useState("timeline");
  const [profileData, setProfileData] = useState(null);

  async function fetchProfileData() {
    const token = Cookies.get("token");
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiURL}/api/profile/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${token}`,
      },
    });

    const responseData = await response.json();
    if (response.status === 200) {
      setProfileData(responseData);
    }
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid-container relative">
        {/* Image */}
        <div className="px-5 py-2 flex items-center story-card w-[50rem]">
          <div className="bg-white rounded-2xl h-[18rem]">
            <Image src={cover_profile} className="h-[8rem]" />
            <div className="flex items-center h-[8rem]">
              <Image
                src={profileData.profilePicture}
                width={100}
                height={50}
                className="w-[10rem] h-[10rem] relative left-5 bottom-10 rounded-full"
              />

              <div className="flex justify-between px-10 w-full">
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-lg">
                    {profileData.user.name}
                  </h1>
                  <div className="flex flex-col ">
                    <p className="text-sm text-[#656565]">Bio</p>
                    <p className="text-xs w-[15rem]">{profileData.bio}</p>
                  </div>
                </div>
                {!request && (
                  <div className="flex items-center gap-6 mb-14 text-[#656565]">
                    <div className="flex flex-col">
                      <p className="font-medium ">Posts</p>
                      <p className="font-medium ">55</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium ">Friends</p>
                      <p className="font-medium ">12k</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium ">Followers</p>
                      <p className="font-medium ">57k</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 px-4">
              <button
                onClick={() => handleTabChange("timeline")}
                className={`font-medium hover:text-[#F45044]  ${
                  activeTab === "timeline"
                    ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
                    : "font-medium"
                }`}
              >
                TimeLine
              </button>
              <button
                onClick={() => handleTabChange("about")}
                className={`font-medium hover:text-[#F45044]  ${
                  activeTab === "about"
                    ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
                    : "font-medium"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleTabChange("media")}
                className={`font-medium hover:text-[#F45044]  ${
                  activeTab === "media"
                    ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
                    : "font-medium"
                }`}
              >
                Media
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar-left">
          {activeTab === "timeline" && <SideBar views={true} />}
          {activeTab === "about" && <SideBar edit={true} />}
          {activeTab === "media" && <SideBar edit={true} />}
        </div>
        <div className="sidebar-right h-[58rem] flex flex-col gap-6 py-2">
          <RightNav />
          <div className="flex flex-col gap-6">
            <div className="bg-white h-fit w-full px-4 py-3 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Photos</h3>
                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">
                  See All
                </p>
              </div>

              {/* <div>
                <div class="grid grid-cols-3 gap-3 px-1 py-3">
                  {sidePhotos.map((sideP, index) => {
                    return <div key={index} className="">
                      <Image
                        className="h-16 w-full rounded"
                        src={sideP}
                        alt=""
                      />
                    </div>
                  })}

                </div>
              </div> */}
            </div>
            <div className="bg-white h-fit w-full px-4 py-2 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Friends</h3>
                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">
                  See All
                </p>
              </div>
              {/* <div class="grid grid-cols-2 gap-3 px-1 py-3">
                {friendsPhoto.map((fp, index) => {
                  return <div key={index} className="flex flex-col">
                    <Image
                      className="h-20 w-20 rounded"
                      src={fp.img}
                      alt=""
                    />
                    <p className="text-xs text-[#656565]">{fp.name}</p>
                  </div>
                })}

              </div> */}
            </div>
          </div>
        </div>

        <div className="feed-section mx-5 mb-5">
          <div className="flex items-center justify-center flex-col">
            {/* Images */}
            <div className="w-full h-full rounded-lg mx-auto">
              {activeTab === "timeline" && <TimeLine />}
              {activeTab === "about" && (
                <AboutProfile profileData={profileData} />
              )}
              {activeTab === "media" && <MediaPost />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

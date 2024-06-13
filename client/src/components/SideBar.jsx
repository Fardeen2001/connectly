import React from "react";
import { men_women } from "../app/assets";
import Image from "next/image";
import Link from "next/link";
import { Img } from "../app/assets";
import { MdEdit, MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";

const SideBar = ({ views, edit }) => {
  return (
    <div>
      {/* <!-- component --> */}
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-secondary h-full md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-md"
          x-show="sidenav"
        >
          <div className="py-5 px-1">
            <div id="menu" className="flex flex-col gap-2 ">
              <div className="w-32 h-14 mx-auto">
                <Image src={Img} className="object-cover" alt="" />
              </div>

              <div className="py-5 flex flex-col gap-1">
                <Link
                  href={"/"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <MdOutlineInterests size={22} /> Interest
                </Link>

                <Link
                  href={"/groups"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <GrGroup size={22} /> Groups
                </Link>

                <Link
                  href={"/party"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <LuPartyPopper size={22} /> Party
                </Link>

                <Link
                  href={"/"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <LiaUserFriendsSolid size={22} /> Friends
                </Link>
              </div>

              {views ? (
                <>
                  <div className="flex gap-5 flex-col">
                    <div className="rounded-lg overflow-hidden">
                      <div className="bg-[#F45044] text-white px-5 py-3">
                        <p className="w-32">How to get more views:</p>
                      </div>

                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
                        <input
                          checked
                          type="checkbox"
                          className="w-7 h-7 border-0 text-red-600 "
                        />
                        <div className="flex flex-col">
                          <p>Upload profile picture</p>
                          <p className="text-xs">Get found more easily</p>
                        </div>
                      </div>
                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
                        <input type="checkbox" className="w-7 h-7 border-0" />
                        <div className="flex flex-col">
                          <p>Confirm email address</p>
                          <p className="text-xs">Confirm your account</p>
                        </div>
                      </div>
                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
                        <input type="checkbox" className="w-7 h-7 border-0" />
                        <div className="flex flex-col">
                          <p>Verify profile</p>
                          <p className="text-xs">Get trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center rounded-lg">
                      <input checked type="checkbox" className="w-7 h-7 border-0" />
                      <div className="flex flex-col">
                        <p>Interested In</p>
                        <p className="text-xs">New Friends or Chats</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F45044] w-full py-10 px-5 text-white flex flex-col gap-3 text-xs">
                    <p>Tap a checkbox to track your progress</p>
                    <button className="border-[1px] rounded-sm border-white px-2 py-1">
                      View progress
                    </button>
                  </div>
                </>
              ) : ('')}

              {edit ? (
                <>
                  <div className="flex gap-5 flex-col">
                    <div className="rounded-lg overflow-hidden">
                      <div className="bg-[#F45044] text-white px-5 py-7">
                        <Link href={'/editProfile'} className="flex items-center gap-2">Edit Profile <MdEdit size={22} /></Link>
                      </div>

                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex flex-col text-[#656565]">
                        <p>Language</p>
                        <p className="text-xs">English, Hindi</p>
                      </div>
                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex flex-col text-[#656565]">
                        <p>Vibe Matches</p>
                        <p className="text-xs">12</p>
                      </div>
                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex flex-col text-[#656565]">
                        <p>City/Town</p>
                        <p className="text-xs">Kolkata</p>
                      </div>

                    </div>
                    <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center rounded-lg text-[#656565]">
                      <Image src={men_women} className="w-8 h-8" />
                      <div className="flex flex-col">
                        <p className="text-[#F45044]">Looking for</p>
                        <p className="text-xs">Men & Women</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : ("")}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

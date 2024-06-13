"use client";
import React, { useState, useEffect } from "react";
import { RightNav, SideBar } from "@/components";
import Image from "next/image";
import { Img, Pic, cover_profile, explore_grid1 } from "../assets";
import { MdEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import ImageExplore from "@/components/ImageExplore";
import Card from "@/components/Card";
import Loading from "@/components/Loading";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preferences/all`)
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setFilteredProfiles(data);
      });
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    e.preventDefault();
    const filtered = profiles.filter((profile) =>
      profile.interests.includes(searchTerm)
    );
    setFilteredProfiles(filtered);
  };

  console.log(profiles);

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
    <>
      <div className="grid-container relative">
        {/* Image */}
        <div className="px-5 py-5 flex items-center gap-5 story-card relative">
          <Image src={cover_profile} className="w-full rounded-2xl" />
          <div className="absolute left-1/2 -translate-x-[50%] flex flex-col items-center justify-center gap-3 w-[47rem] h-[11.2rem] rounded-2xl">
            <Image src={Pic} className=" w-20 h-20" />
            <div className="flex items-center gap-2 text-white">
              <p className="text-lg text-white font-medium">Kolkata</p>
              <MdEdit size={22} />
            </div>
          </div>
        </div>

        <div className="sidebar-left">
          <SideBar />
        </div>
        <div className="sidebar-right py-2">
          <RightNav />
        </div>

        <div className="feed-section mx-5 h-[30rem]">
          <div className="flex items-center justify-center flex-col px-6 gap-5">
            {/* Filter */}
            <div className="w-[44rem] bg-white h-full rounded-lg px-4 py-2 flex items-center justify-between">
              <div className=" flex items-center bg-[#FFEDED] px-2 py-1 rounded-md">
                <CiSearch size={22} />
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search for vibe, friend or interest..."
                    className="px-3 py-1 w-[18rem] bg-transparent focus:outline-none placeholder:text-gray-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>

              {/* Not given in design but can be shown in small screens */}
              {/* <button
                onClick={handleSearch}
                className="bg-pink-100 py-2 px-4 rounded-md"
              >
                Search
              </button> */}

              <div className="flex items-center relative">
                <div className="text-gray-600 font-medium mr-4">
                  Looking for
                </div>
                <button
                  onClick={handleToggle}
                  className="bg-pink-100 py-2 px-4 rounded-md flex items-center gap-2"
                >
                  <span className="text-gray-600">Vibe Together</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-10 left-20 rounded-md shadow-lg bg-white w-48 z-50">
                    <ul className="py-2 text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          👫 Friends
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          🎶 Vibe Together
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          ❤️ Date
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          💼 Work
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Profiles */}
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* {filteredProfiles.map((profile) => (
                <div
                  key={profile.user}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                >
                  <Link
                    href={`/profile/${profile.user}`}
                    className="text-center"
                  >
                    <Image
                      src={profile.profilePicture || Pic}
                      alt={profile.name}
                      className="w-20 h-20 rounded-full"
                      width={80}
                      height={80}
                    />
                    <h3 className="mt-2 text-lg font-medium text-gray-800">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-600">{profile.location}</p>
                  </Link>
                </div>
              ))} */}
              {filteredProfiles.map((profile) => {
                return <Card profile={profile} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

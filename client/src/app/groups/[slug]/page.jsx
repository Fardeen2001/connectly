"use client";
import { CreatePost, Post, RightNav, SideBar } from "../../../components";
import { Photos, Photos2, Pic, cover_profile, post2, post3, post4, post6, post_img } from "../../assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import MediaPost from "@/components/MediaPost";
import Members from "@/components/Members";
import { CiLogout, CiSearch } from "react-icons/ci";
import Party from "@/components/Party";
import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { GoPlus } from "react-icons/go";



const Profile = () => {
    const [activeTab, setActiveTab] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setActiveTab('party')
    }, [])

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const sidePhotos = [Photos, Photos2, Photos, Photos2, Photos, Photos2, Photos, Photos2, Photos]

    return (
        <>

            <div className="grid-container relative">
                {/* Image */}
                <div className="px-5 py-2 flex items-center story-card w-[50rem]">
                    <div className="bg-white shadow-lg rounded-2xl h-[21rem]">
                        <Image src={cover_profile} className="h-[8rem]" />
                        <div className="flex items-center h-[10rem]">
                            <Image src={Pic} className="w-32 h-32 relative left-5 bottom-10 rounded-full" />

                            <div className="flex flex-col justify-between px-10 w-full">
                                <div className="flex items-center justify-between
                w-full">
                                    <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet.</h1>
                                    <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Invite Friends</button>

                                </div>

                                <div className='flex items-center justify-between py-4'>
                                    <div className="flex items-center">
                                        <div className='z-[10]'>
                                            <Image src={post2} className='w-10 h-10' />
                                        </div>
                                        <div className='-translate-x-2 z-[9]'>
                                            <Image src={post3} className='w-10 h-10' />
                                        </div>
                                        <div className='-translate-x-4 z-[8]'>
                                            <Image src={post4} className='w-10 h-10' />
                                        </div>
                                        <div className='-translate-x-6 z-[7]'>
                                            <Image src={post6} className='w-10 h-10' />
                                        </div>
                                        <div className='-translate-x-8 z-[6] bg-[#F45044] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                                            +2
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#EAECF4] flex items-center justify-between px-2">
                                            <input type="text" placeholder="Search Group" className="px-4 py-2 bg-transparent focus:outline-none placeholder:text-gray-600" />
                                            <CiSearch size={22} />
                                        </div>
                                        <div className="relative">
                                            <BsThreeDotsVertical onClick={handleToggle} className="cursor-pointer" size={22} />

                                            {isOpen && (
                                                <div className="absolute top-5 right-0 rounded-md shadow-lg bg-white w-52 z-50">
                                                    <ul className="py-2 text-sm">
                                                        <li className="px-4 py-2 hover:bg-gray-100">
                                                            <Link
                                                                href={"/group/group-details"}
                                                                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                                                            >
                                                                <FaUsers size={22} /> View Members Request
                                                            </Link>
                                                        </li>
                                                        <li className="px-4 py-2 hover:bg-gray-100">
                                                            <Link
                                                                href={"/group/group-details"}
                                                                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                                                            >
                                                                <FiSend size={22} /> Share Group
                                                            </Link>
                                                        </li>
                                                        <li className="px-4 py-2 hover:bg-gray-100">
                                                            <Link
                                                                href={"/group/group-details"}
                                                                className="text-[#EF4136]  flex items-center gap-2"
                                                            >
                                                                <CiLogout size={22} className="text-[#EF4136]" /> Leave Group
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4">
                            <button
                                onClick={() => setActiveTab('group-feed')}
                                className={`font-medium hover:text-[#F45044]  ${activeTab === 'group-feed'
                                    ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                                    : 'font-medium'
                                    }`}
                            >
                                Group Feed
                            </button>
                            <button
                                onClick={() => setActiveTab('members')}
                                className={`font-medium hover:text-[#F45044]  ${activeTab === 'members'
                                    ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                                    : 'font-medium'
                                    }`}
                            >
                                Members
                            </button>
                            <button
                                onClick={() => setActiveTab('media')}
                                className={`font-medium hover:text-[#F45044]  ${activeTab === 'media'
                                    ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                                    : 'font-medium'
                                    }`}
                            >
                                Media
                            </button>
                            <button
                                onClick={() => setActiveTab('party')}
                                className={`font-medium hover:text-[#F45044]  ${activeTab === 'party'
                                    ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                                    : 'font-medium'
                                    }`}
                            >
                                Party
                            </button>

                        </div>

                    </div>

                </div>

                <div className="sidebar-left">
                    <SideBar />
                </div>
                <div className="sidebar-right flex flex-col gap-1 py-2">
                    <RightNav />
                    <div className="flex flex-col gap-5">
                        <div className="bg-white h-fit w-full px-4 py-3 rounded-lg">

                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">Group Media</h3>
                                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">See All</p>
                            </div>
                            <div>
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
                            </div>


                        </div>

                        <div className="bg-white h-fit w-full px-4 py-2 rounded-lg">
                            <h3 className="text-lg font-medium my-2">Upcoming Events</h3>

                            <div className="flex flex-col gap-2">
                                <div className="bg-[#F1F1F1] w-full p-2 rounded">
                                    <Image src={post_img} className="rounded" />

                                    <div>
                                        <div className="my-2">
                                            <h3 className="text-sm">Tuesday Sunset</h3>
                                            <p className="text-xs">Do you want this event to occur?</p>
                                        </div>

                                        <div className="my-2 flex items-center gap-2">
                                            <button className='border border-[#F45044] px-5 py-1 text-[#F45044] flex items-center rounded'>No</button>
                                            <button className='bg-[#F45044] px-5 py-1 text-white flex items-center rounded'>Yes</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#F1F1F1] w-full p-2 rounded">
                                    <Image src={post_img} className="rounded" />

                                    <div>
                                        <div className="my-2">
                                            <h3 className="text-sm">Tuesday Sunset</h3>
                                            <p className="text-xs">Do you want this event to occur?</p>
                                        </div>

                                        <div className="my-2 flex items-center gap-2">
                                            <button className='border border-[#F45044] px-5 py-1 text-[#F45044] flex items-center rounded'>No</button>
                                            <button className='bg-[#F45044] px-5 py-1 text-white flex items-center rounded'>Yes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="feed-section mx-5 mb-5">
                    <div className="flex items-center justify-center flex-col">
                        {activeTab === 'group-feed' && (
                            <div className="flex items-center justify-center flex-col">
                                <CreatePost />
                                <Post />
                            </div>
                        )}
                        {activeTab === 'members' && <Members />}
                        {activeTab === 'media' && <MediaPost />}
                        {activeTab === 'party' && <Party />}

                    </div>


                </div>
            </div>
        </>
    );
};

export default Profile;

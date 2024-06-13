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
import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Loading from "@/components/Loading";



const Profile = () => {
    const [activeTab, setActiveTab] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setActiveTab('invite-friends')
    }, [])

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const sidePhotos = [Photos, Photos2, Photos, Photos2, Photos, Photos2, Photos, Photos2, Photos]

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
                <div className="px-5 py-2 flex items-center story-card w-[50rem]">
                    <div className="bg-white shadow-lg rounded-2xl h-[18rem]">
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
                    <div className="flex flex-col gap-5">
                        <div className="bg-white shadow-lg w-full px-3 py-5 rounded-lg ">
                            <h1 className="text-xl font-semibold">Details</h1>
                            <p className="flex items-center gap-2 text-[#656565] my-2"><FaUserFriends size={22} className="text-[#656565]" /> 4.5k people responded</p>
                            <p className="flex items-center gap-2 text-[#656565] my-2"><FaUserAlt size={20} className="text-[#656565]" /> Event by <span className="text-black">Orlando Pirates greater Gugulethu Branch</span></p>
                            <p className="flex items-center gap-2 text-[#656565] my-2"><IoCallSharp size={22} className="text-[#656565]" /> (+244) 12458 124586</p>
                            <p className="flex items-center gap-2 text-[#656565] my-2"><IoMdMail size={22} className="text-[#656565]" /> exmple@gmail.com</p>

                        </div>

                        <div className="bg-white shadow-lg w-full px-3 py-5 rounded-lg ">
                            <h1 className="text-xl font-semibold">About Party</h1>
                            <p className="flex items-center gap-2 text-[#656565] my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, error voluptatum. Fugiat praesentium vitae commodi tenetur veniam vel officia ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos possimus obcaecati voluptatibus rerum consequuntur blanditiis harum incidunt neque ea!</p>

                        </div>

                        <div className="bg-white shadow-lg w-full px-3 py-5 rounded-lg ">
                            <h1 className="text-xl font-semibold mb-2">Requirement</h1>
                            <ul>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amet.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amet.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amet.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amet.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amet.</li>

                            </ul>

                        </div>

                        <div className="bg-white shadow-lg w-full px-3 py-5 rounded-lg ">
                            <h1 className="text-xl font-semibold">Invite Friends</h1>
                            <div className="flex items-center gap-2 my-5">
                                <button
                                    onClick={() => setActiveTab('invite-friends')}
                                    className={`font-medium hover:text-[#F45044]  ${activeTab === 'invite-friends'
                                        ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                                        : 'font-medium'
                                        }`}
                                >
                                    Invite Friends
                                </button>
                                <button
                                    onClick={() => setActiveTab('share-group')}
                                    className={`font-medium hover:text-[#F45044]  ${activeTab === 'share-group'
                                        ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                                        : 'font-medium'
                                        }`}
                                >
                                    Share to group
                                </button>
                            </div>

                            {activeTab === 'invite-friends' && (
                                <>
                                    <div className="bg-[#EAECF4] flex items-center justify-between px-2 rounded-full">
                                        <input type="text" placeholder="Search Name" className="px-4 py-2 bg-transparent focus:outline-none placeholder:text-gray-600" />
                                        <CiSearch size={22} />
                                    </div>

                                    <div className='flex flex-col gap-5 mt-5'>

                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Add Friend</button>

                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Add Friend</button>

                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Add Friend</button>

                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Add Friend</button>

                                            </div>
                                        </div>

                                    </div>
                                </>
                            )}

                            {activeTab === 'share-group' && (
                                <>
                                    <div className="bg-[#EAECF4] flex items-center justify-between px-2 rounded-full">
                                        <input type="text" placeholder="Search Name" className="px-4 py-2 bg-transparent focus:outline-none placeholder:text-gray-600" />
                                        <CiSearch size={22} />
                                    </div>

                                    <div className='flex flex-col gap-5 mt-5'>

                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 border border-[#F45044] text-[#F45044] rounded'> Share</button>

                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 border border-[#F45044] text-[#F45044] rounded'> Share</button>

                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 border border-[#F45044] text-[#F45044] rounded'> Share</button>

                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={post2} className='w-12 h-12' />

                                                <h3>Ralph Edwards</h3>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <button className='px-3 py-2 border border-[#F45044] text-[#F45044] rounded'> Share</button>

                                            </div>
                                        </div>


                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Profile;

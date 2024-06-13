'use client'
import { post2 } from '@/app/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

const InviteFriends = ({ setShowPopup }) => {
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab('invite-friends')
    }, [])

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white shadow-lg px-3 py-5 w-1/2 h-fit overflow-y-auto rounded-lg">
                <div className='flex items-center justify-between'>
                    <h1 className="text-xl font-semibold">Invite Friends</h1>
                    <p
                        className="border-2 border-[#F45044] p-1 cursor-pointer rounded-full"
                        onClick={() => setShowPopup(false)}
                    >
                        <RxCross2 size={22} className='text-[#F45044]' />
                    </p>
                </div>
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
    )
}

export default InviteFriends
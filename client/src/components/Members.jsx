import { post2 } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'

const Members = () => {
    return (
        <div className='shadow-lg bg-white w-full h-full px-5 py-4 rounded-lg'>
            <div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-semibold'>Members</h1>
                        <span className='text-[#656565] text-lg'>4,05,369</span>
                    </div>

                    <p className='text-[#656565] '>Lorem ipsum dolor sit amet.</p>
                </div>

                <hr />

                {/* Admin */}
                <div className='flex flex-col gap-4 my-4'>
                    <h1 className='text-lg font-semibold'>Admin & Moderators</h1>

                    <div className='flex flex-col gap-2 my-2'>
                        <div className='flex items-center gap-2'>
                            <Image src={post2} className='w-12 h-12' />

                            <h3>Ralph Edwards</h3>
                            <span className='bg-[#67C23A33] text-[#67C23A] p-1 text-xs'>Admin</span>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image src={post2} className='w-12 h-12' />

                                <h3>Ralph Edwards</h3>
                                <span className='bg-[#FBB04080] text-[#FBB040] p-1 text-xs'>Moderator</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Add Friend</button>

                                <BsThreeDotsVertical className='text-[#F45044]' size={25} />
                            </div>
                        </div>
                    </div>

                    <button className='px-3 py-2 bg-[#F45044] text-white flex items-center justify-center rounded'>See All</button>
                </div>

                <hr />

                {/* Friends */}
                <div className='flex flex-col gap-4 my-4'>
                    <h1 className='text-lg font-semibold'>Friends</h1>

                    <div className='flex flex-col gap-2 my-2'>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image src={post2} className='w-12 h-12' />

                                <h3>Ralph Edwards</h3>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='px-3 py-2 border border-[#F45044] text-[#F45044] flex items-center gap-1 rounded'>Message</button>

                                <BsThreeDotsVertical className='text-[#F45044]' size={25} />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image src={post2} className='w-12 h-12' />

                                <h3>Ralph Edwards</h3>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='px-3 py-2 border border-[#F45044] text-[#F45044] flex items-center gap-1 rounded'>Message</button>

                                <BsThreeDotsVertical className='text-[#F45044]' size={25} />
                            </div>
                        </div>
                    </div>

                    <button className='px-3 py-2 bg-[#F45044] text-white flex items-center justify-center rounded'>See All</button>
                </div>

{/* Members */}
                <div className='flex flex-col gap-4 my-4'>
                    <h1 className='text-lg font-semibold'>Members</h1>

                    <div className='flex flex-col gap-4 my-2'>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image src={post2} className='w-12 h-12' />

                                <h3>Ralph Edwards</h3>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Add Friend</button>

                                <BsThreeDotsVertical className='text-[#F45044]' size={25} />
                            </div>
                        </div>

                    </div>

                    <button className='px-3 py-2 bg-[#F45044] text-white flex items-center justify-center rounded'>See All</button>
                </div>
            </div>
        </div>
    )
}

export default Members
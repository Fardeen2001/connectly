'use client'
import { Pic, calendar, cover_profile } from '@/app/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go'

const Party = () => {

    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab('group-party')
    }, [])

    const events = [
        {
            id: 1,
            cover_Pic: cover_profile,
            date: calendar,
            heading: 'Heading Here',
            hosted: 'Search Engine Journal',
            tags: 'Social',
            venue: 'Wednesday, 24 January 2023 from 11:00-12:30',
            day: 'Tomorrow',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
        {
            id: 2,
            cover_Pic: cover_profile,
            date: calendar,
            heading: 'Heading Here',
            hosted: 'Search Engine Journal',
            tags: 'Social',
            venue: 'Wednesday, 24 January 2023 from 11:00-12:30',
            day: 'Tomorrow',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
    ]


    return (
        <div className='shadow-lg bg-white w-full h-full px-5 py-4 rounded-lg'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold'>Group Events</h1>
                    <button className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Create Events</button>
                </div>

                <div className="flex items-center justify-between my-5">
                    <button
                        onClick={() => setActiveTab('group-party')}
                        className={`font-medium hover:text-[#F45044]  ${activeTab === 'group-party'
                            ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                            : 'font-medium'
                            }`}
                    >
                        Group Party
                    </button>
                    {/* <button
                        onClick={() => setActiveTab('members')}
                        className={`font-medium hover:text-[#F45044]  ${activeTab === 'members'
                            ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                            : 'font-medium'
                            }`}
                    >
                        Members
                    </button> */}

                    <div className='flex items-center gap-2'>
                        <button className='border px-2 py-1 rounded'>Location</button>
                        <button className='border px-2 py-1 rounded'>Date</button>
                    </div>

                </div>

                {/* Events */}
                <div className='grid grid-cols-2 gap-5 px-1 py-3'>
                    {events.map((event) => {
                        return <div key={event.id} className='border rounded-lg h-fit'>
                            <Image src={event.cover_Pic} className="h-[10rem]" />

                            <div className='px-5 flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <Image src={event.date} className='w-12 h-12' />
                                    <div className='flex flex-col py-5'>
                                        <h3 className='text-sm font-medium'>{event.heading}</h3>
                                        <p className='text-xs'>Public Hosted by <span className='text-[#EF4136]'>{event.hosted}</span></p>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <button className='border bg-[#CCCCCC] rounded-full px-4 py-1'>{event.tags}</button>

                                    <BsThreeDotsVertical size={22} className='border border-[#F45044] text-[#F45044] rounded' />

                                </div>

                                <hr />

                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm'>{event
                                            .venue}</p>
                                        <span className='text-xs text-[#656565]'>{event.day}</span>
                                    </div>

                                    <p className='text-sm'>{event.location}</p>
                                </div>

                                <div className='flex items-center justify-between my-3'>
                                    <Link href={`/party/${event.id}`} className='border border-[#F45044] rounded text-[#F45044] px-8 py-2'>Book Me In</Link>
                                    <button className='bg-[#F45044] rounded text-white px-8 py-2'>Be Our Host</button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Party
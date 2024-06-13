'use client'
import React, { useEffect, useState } from 'react'
import { RightNav, SideBar } from '@/components'
import { GoPlus } from 'react-icons/go';
import Image from 'next/image';
import { Pic, cover_profile, post2, post3, post4, post6 } from '../assets';
import CreateGroup from '@/components/CreateGroup';
import Link from 'next/link';

const page = () => {

  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab('all-groups')
  }, [])

  const [showPopup, setShowPopup] = useState(false);

  const handleCreateGroupClick = () => {
    setShowPopup(true);
  };

  const groupDetails = [
    {
      id: 1,
      coverPic: cover_profile,
      profile: Pic,
      title: 'Lorem ipsum dolor sit amet',
      posts: 12,
      members: 121,
    },
    {
      id: 2,
      coverPic: cover_profile,
      profile: Pic,
      title: 'Lorem ipsum dolor sit amet',
      posts: 12,
      members: 121,
    },
    {
      id: 3,
      coverPic: cover_profile,
      profile: Pic,
      title: 'Lorem ipsum dolor sit amet',
      posts: 12,
      members: 121,
    },
    {
      id: 4,
      coverPic: cover_profile,
      profile: Pic,
      title: 'Lorem ipsum dolor sit amet',
      posts: 12,
      members: 121,
    },
  ]

  return (
    <>
      <div className="grid-container relative">
        <div className="story-card py-2 px-4 mx-auto w-[50rem]">
          <div className='bg-white w-full rounded-xl px-5 py-3 flex flex-col gap-3'>

            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-semibold'>Groups</h1>
              <button onClick={handleCreateGroupClick} className='px-3 py-2 bg-[#F45044] text-white flex items-center gap-1 rounded'><GoPlus size={22} /> Create Group</button>
              {showPopup && <CreateGroup setShowPopup={setShowPopup} />}
            </div>

            <div className="flex items-center gap-3 px-1 my-5">
              <button
                onClick={() => setActiveTab('all-groups')}
                className={`font-medium hover:text-[#F45044]  ${activeTab === 'all-groups'
                  ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                  : 'font-medium'
                  }`}
              >
                All Groups
              </button>
              <button
                onClick={() => setActiveTab('my-groups')}
                className={`font-medium hover:text-[#F45044]  ${activeTab === 'my-groups'
                  ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                  : 'font-medium'
                  }`}
              >
                My Groups
              </button>
              <button
                onClick={() => setActiveTab('joined-groups')}
                className={`font-medium hover:text-[#F45044]  ${activeTab === 'joined-groups'
                  ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                  : 'font-medium'
                  }`}
              >
                Joined Groups
              </button>

            </div>

            <div className='grid grid-cols-2 gap-5 px-1 py-3'>
              {groupDetails.map((g) => {
                return <div key={g.id} className='border rounded-lg h-fit'>
                  <Image src={g.coverPic} className="h-[8rem]" />

                  {/* profile pic */}
                  <div className='relative bottom-10 left-0 w-full h-20'>
                    <Image src={g.profile} className='w-20 h-20 ml-10' />
                  </div>

                  <div className='px-5 flex flex-col gap-5'>
                    <div className='flex flex-col'>
                      <h1 className='text-xl font-semibold'>{g.title}</h1>
                      <div className='flex items-center gap-3'>
                        <span className='text-xs text-[#656565]'>Post {g.posts}</span>
                        <span className='text-xs text-[#656565]'>Members {g.members}</span>
                      </div>
                    </div>

                    <div className='flex items-center'>
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

                    <Link href={`/groups/${g.id}`} className='w-full bg-[#F45044] text-white py-2 mb-4 rounded-md flex items-center justify-center'>View details</Link>
                  </div>
                </div>
              })}


            </div>
          </div>
        </div>

        <div className="sidebar-left">
          <SideBar />
        </div>

        <div className="sidebar-right mt-2">
          <RightNav />
        </div>
      </div>
    </>
  )
}

export default page
"use client";
import { Post, RightNav } from "@/components";
import { Img, Pic, cover_profile, explore_grid1 } from "../assets";
import Link from "next/link";
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import TimeLine from "@/components/TimeLine";
// "use client";
// import PendingRequest from "@/components/PendingRequest";
// import ProfileSideBar from "@/components/ProfileSideBar";
// import SentRequest from "@/components/SentRequest";
// import Cookies from "js-cookie";
// import React, { useEffect, useLayoutEffect, useState } from "react";

// const Profile = () => {
//   const [request, setRequest] = useState(false);
//   const [activeTab, setActiveTab] = useState();
//   const [profileData, setProfileData] = useState(null)

//   async function fetchProfileData(){
//     const token = Cookies.get('token');
//     console.log("My Token : "+token)
//     const apiURL = process.env.NEXT_PUBLIC_API_URL;
//     const response = await fetch(`${apiURL}/api/profile/me`,{
//       method : 'GET',
//       headers : {
//         'Content-Type' : 'application/json',
//         'x-auth-token' : `${token}`
//       }
//     })

//     const responseData = await response.json();
//     if(response.status === 200){
//       setProfileData(responseData)
//       console.log(responseData)
//     }
//   }

//   useEffect(()=>{
//     fetchProfileData();
//   },[])
  useLayoutEffect(() => {
    setActiveTab('timeline')
  }, [])

  return (
    <div className="flex">
      {
        profileData && (<>
        <ProfileSideBar setRequest={setRequest} request={request} />
      <div className="h-screen w-full bg-gray-200 overflow-y-auto">
        <div className=" w-full    bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1632377082368-66155ad702d8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full   "
              //src="https://images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={profileData.profilePicture}
              alt=""
            />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">
                {profileData.user.name}
              </h2>
              {/* <a
                className="text-gray-400 mt-2 hover:text-blue-500"
                href="#"
                target="BLANK()"
              >
                @fardeen_19
              </a> */}
              <p className="mt-2 text-gray-500 text-sm">
                {profileData.bio}
              </p>
            </div>
            <hr className="mt-6" />
            {!request && (
              <div className="flex  bg-gray-50 text-black">
                <div
                  className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setActiveTab("posts")}
                >
                  <p>
                    <span className="font-semibold">10</span> Posts
                  </p>
                </div>

                <div className="flex items-center gap-6 mb-14 text-[#656565]">
                  <div className="flex flex-col">
                    <p className="font-medium ">Posts</p>
                    <p className="font-medium ">10</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium ">Friends</p>
                    <p className="font-medium ">55</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium ">Followers</p>
                    <p className="font-medium ">1000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4">
              <button
                onClick={() => handleTabChange('timeline')}
                className={`font-medium hover:text-[#F45044]  ${activeTab === 'timeline'
                  ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                  : 'font-medium'
                  }`}
              >
                TimeLine
              </button>
              <button
                onClick={() => handleTabChange('about')}
                className={`font-medium hover:text-[#F45044]  ${activeTab === 'about'
                  ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                  : 'font-medium'
                  }`}
              >
                About
              </button>
              <button
                onClick={() => handleTabChange('media')}
                className={`font-medium hover:text-[#F45044]  ${activeTab === 'media'
                  ? 'border-b-[1px] border-[#F45044] text-[#F45044] font-semibold '
                  : 'font-medium'
                  }`}
              >
                Media
              </button>

            </div>

          </div>

        </div>

        <div className="sidebar-left">
          <div
            id="view"
            className="h-full flex flex-row"
            x-data="{ sidenav: true }"
          >
            <div
              id="sidebar"
              className="bg-white h-fit md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-ee-md"
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
                      href={"/"}
                      className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                    >
                      <GrGroup size={22} /> Groups
                    </Link>

                    <Link
                      href={"/"}
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

                  <div className="flex gap-5 flex-col">
                    <div>
                      <div className="bg-[#F45044] text-white px-5 py-3">
                        <p className="w-32">How to get more views:</p>
                      </div>

                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
                        <input
                          checked
                          type="checkbox"
                          className="w-7 h-7 border-0 text-red-600"
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
                    <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
                      <input type="checkbox" className="w-7 h-7 border-0" />
                      <div className="flex flex-col">
                        <p>Verify profile</p>
                        <p className="text-xs">Get trust</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="sidebar-right h-[58rem] flex flex-col gap-1 py-2">
          <RightNav />
          <div className="flex flex-col gap-5">
            <div className="bg-white h-fit w-full px-4 py-2 rounded-lg">

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Photos</h3>
                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">See All</p>
              </div>

              <div>
                <div class="grid grid-cols-3 gap-4 px-1 py-3">
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Image
                      className="h-auto max-w-full"
                      src={explore_grid1}
                      alt=""
                    />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="bg-white h-96 w-full px-4 py-2 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Photos</h3>
                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">See All</p>
              </div>
            </div>
          </div>
        </div>

        <div className="feed-section mx-5 mb-5">
          <div className="flex items-center justify-center flex-col">
            {/* Images */}
            <div className="w-full h-full rounded-lg mx-auto">
              {activeTab === 'timeline' && <TimeLine />}
              {activeTab === 'about' && <Post />}
              {activeTab === 'media' && <Post />}
            </div>

          </div>
        )}
      </div>
        </>)
      }
//   useLayoutEffect(() => {
//     setActiveTab(request ? "pendingRequests" : "followers");
//   }, [request]);
//   return (
//     <div className="flex">
//       {
//         profileData && (<>
//         <ProfileSideBar setRequest={setRequest} request={request} />
//       <div className="h-screen w-full bg-gray-200 overflow-y-auto">
//         <div className=" w-full    bg-white  shadow-lg    transform   duration-200 easy-in-out">
//           <div className=" h-32 overflow-hidden">
//             <img
//               className="w-full"
//               src="https://images.unsplash.com/photo-1632377082368-66155ad702d8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="flex justify-center px-5  -mt-12">
//             <img
//               className="h-32 w-32 bg-white p-2 rounded-full   "
//               //src="https://images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               src={profileData.profilePicture}
//               alt=""
//             />
//           </div>
//           <div className=" ">
//             <div className="text-center px-14">
//               <h2 className="text-gray-800 text-3xl font-bold">
//                 {profileData.user.name}
//               </h2>
//               {/* <a
//                 className="text-gray-400 mt-2 hover:text-blue-500"
//                 href="#"
//                 target="BLANK()"
//               >
//                 @fardeen_19
//               </a> */}
//               <p className="mt-2 text-gray-500 text-sm">
//                 {profileData.bio}
//               </p>
//             </div>
//             <hr className="mt-6" />
//             {!request && (
//               <div className="flex  bg-gray-50 text-black">
//                 <div
//                   className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setActiveTab("posts")}
//                 >
//                   <p>
//                     <span className="font-semibold">10</span> Posts
//                   </p>
//                 </div>
//                 <div className="border"></div>
//                 <div
//                   className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setActiveTab("followers")}
//                 >
//                   <p>
//                     <span className="font-semibold">2.5 k</span> Followers
//                   </p>
//                 </div>
//                 <div className="border"></div>
//                 <div
//                   className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setActiveTab("following")}
//                 >
//                   <p>
//                     {" "}
//                     <span className="font-semibold">2.0 k </span> Following
//                   </p>
//                 </div>
//               </div>
//             )}
//             {request && (
//               <div className="flex  bg-gray-50 text-black">
//                 <div
//                   className={`text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer ${
//                     activeTab === "pendingRequests" &&
//                     "border-b-2 border-b-black"
//                   }`}
//                   onClick={() => setActiveTab("pendingRequests")}
//                 >
//                   <p>
//                     <span className="font-semibold">15</span> Pending Requests
//                   </p>
//                 </div>
//                 <div className="border"></div>
//                 <div
//                   className={`text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer ${
//                     activeTab === "sentRequests" && "border-b-2 border-b-black"
//                   }`}
//                   onClick={() => setActiveTab("sentRequests")}
//                 >
//                   <p>
//                     <span className="font-semibold">2</span> Sent Requests
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         {activeTab === "followers" && <div>Followers</div>}
//         {activeTab === "following" && <div>Following</div>}
//         {activeTab === "posts" && <div>Posts</div>}
//         {activeTab === "pendingRequests" && (
//           <div className="w-2/3 mx-auto h-auto">
//             <PendingRequest myData = {profileData} pendingRequestData = {profileData.friendRequestsReceived}/>
//           </div>
//         )}
//         {activeTab === "sentRequests" && (
//           <div className="w-2/3 mx-auto h-auto">
//             <SentRequest sentRequestData = {profileData.friendRequestsSent}/>
//           </div>
//         )}
//       </div>
//         </>)
//       }
//     </div>
//   );
// };

// export default Profile;

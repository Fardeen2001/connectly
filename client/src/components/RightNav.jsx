
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pic, feed } from "../app/assets";
import { MdOutlineExplore } from "react-icons/md";
import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import AvatarComponent from "./AvatarComponent";
// import ThemeToggleMode from "./ThemeToggleMode";

const RightNav = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-secondary h-fit md:block shadow-xl px-3 w-[14rem] overflow-x-hidden transition-transform duration-300 ease-in-out rounded-lg"
          x-show="sidenav"
        >
          <div className="py-3 px-1">
            <div id="menu" className="flex flex-col gap-2">
              <div>
                <Link
                  href={"/profile"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <AvatarComponent
                    imgSrc={"https://github.com/shadcn.png"}
                    name={"fardeen"}
                  />                  <span>Profile</span>
                </Link>
              </div>

              <Link
                href={"/feed"}
                className="font-medium py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <Image src={feed} className="text-black w-5 h-5" /> Feeds
              </Link>

              <Link
                href={"/explore"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <MdOutlineExplore size={22} /> Explore
              </Link>

              <Link
                href={"/chat"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <IoChatbubbleEllipsesOutline size={22} /> Chat
              </Link>

              <Link
                href={"/notification"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <IoNotificationsOutline size={22} /> Notification
              </Link>
            </div>
          </div>
          {/* <div className="py-5">
            <ThemeToggleMode />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RightNav;
// =======
// "use client";
// import React, { useState } from "react";
// import AvatarComponent from "./AvatarComponent";
// import Link from "next/link";
// import { MdOutlineDashboard } from "react-icons/md";
// import { AiOutlineCompass } from "react-icons/ai";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaRegBell } from "react-icons/fa";
// import ThemeToggleMode from "./ThemeToggleMode";
// const RightNavBar = () => {
//   const [activeTab, setActiveTab] = useState("feed");
//   return (
//     <div className="h-[65vh] w-[20vw] rounded-lg flex flex-col justify-between items-start p-5 bg-secondary shadow-lg">
//       <div className="flex items-center gap-2">
//         <AvatarComponent
//           imgSrc={"https://github.com/shadcn.png"}
//           name={"fardeen"}
//         />
//         <h2 className="text-xl font-semibold">profile</h2>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <Link href={"/feed"} className="flex items-center gap-2 text-xl">
//               <MdOutlineDashboard />
//               Feed
//             </Link>
//           </li>
//           <li>
//             <Link href={"/explore"} className="flex items-center gap-2 text-xl">
//               <AiOutlineCompass />
//               Explore
//             </Link>
//           </li>
//           <li>
//             <Link href={"/chat"} className="flex items-center gap-2 text-xl">
//               <IoChatbubbleEllipsesOutline />
//               Chat
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/notification"}
//               className="flex items-center gap-2 text-xl"
//             >
//               <FaRegBell />
//               Notification
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <ThemeToggleMode />
//       </div>
//     </div>
//   );
// };

// export default RightNavBar;
// >>>>>>> master

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Story,
  post,
  post2,
  post3,
  post4,
  post5,
  post6,
  post_img,
  post_img2,
  post_img_2,
  post_img4,
  heart,
  comment,
  share,
} from "../app/assets";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import ImagePost from "./ImagePost";
import DiffPost from "./DiffPost";
import TextPost from "./TextPost";
import Cookies from "js-cookie";

const Post = () => {
  const [like, setLike] = useState(0);
  const [newCommentText, setNewCommentText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleCommentClick = () => {
    setShowPopup(!showPopup);
  };

  const handleSaveComment = (e) => {
    e.preventDefault();
    // this helps to check if the input has any character in it
    if (newCommentText.length > 1) {
      const newComment = {
        text: newCommentText,
        timestamp: new Date().toISOString(),
      };
      setComments([...comments, newComment]);
      setNewCommentText("");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": `${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        {/* Image */}
        <div className="bg-white shadow-lg w-[700px] h-auto rounded-xl p-5">
          <div className="head flex gap-3">
            <div>
              <Image className="w-14 h-14" src={post} alt="" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col ">
                <h1 className="font-medium">Alexandro Vargas</h1>
                <p className="text-xs text-[#656565]">2h Ago</p>
              </div>

              <BsThreeDotsVertical size={22} />
            </div>
          </div>

          <div className="my-3 flex flex-col gap-2">
            <div>
              <p className="text-[#656565]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div>
              <Image src={post_img} alt="" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p className="text-[#656565]">{like} likes</p>
              <p className="text-[#656565]">{comments.length} comments</p>
            </div>

            <p className="text-[#656565]text-xs">2k share</p>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p onClick={handleLike} className="flex items-center gap-2">
                <Image width={22} src={heart} /> Like
              </p>

              <p
                onClick={handleCommentClick}
                className="flex items-center gap-2"
              >
                <Image width={22} src={comment} /> Comment
              </p>
            </div>

            <p className="flex items-center gap-2">
              <Image width={22} src={share} /> Share
            </p>
          </div>

          {showPopup && (
            <div
              onClick={handleCommentClick}
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                aria-label="Popup content"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">Comments</h2>
                  <button onClick={handleCommentClick}>
                    <RxCross1 size={22} />
                  </button>
                </div>

                <ul className="mt-4">
                  {comments.map((comment, index) => (
                    <li
                      key={index}
                      className="border border-gray-300 rounded-md p-2 mb-2"
                    >
                      <p className="text-gray-700">{comment.text}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(comment.timestamp).toLocaleString()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <hr className="my-2" />

          <div className="flex items-center gap-3">
            <div>
              <Image src={Story} className="rounded-full w-12 h-12" />
            </div>
            <div className="w-full">
              <form onSubmit={handleSaveComment}>
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Write a Comment..."
                  className="bg-[#FFEDED] rounded-xl w-full px-4 py-3"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="bg-white w-[700px] h-auto rounded-xl p-5">
          <div className="head flex gap-3">
            <div>
              <Image className="w-14 h-14" src={post2} alt="" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col ">
                <h1 className="font-medium">Alexandro Vargas</h1>
                <p className="text-xs text-[#656565]">2h Ago</p>
              </div>

              <BsThreeDotsVertical size={22} />
            </div>
          </div>

          <div className="my-10">
            <div>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p className="text-[#656565]">{like} likes</p>
              <p className="text-[#656565]">{comments.length} comments</p>
            </div>

            <p className="text-[#656565]text-xs">2k share</p>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p onClick={handleLike} className="flex items-center gap-2">
                <Image width={22} src={heart} /> Like
              </p>

              <p
                onClick={handleCommentClick}
                className="flex items-center gap-2"
              >
                <Image width={22} src={comment} /> Comment
              </p>
            </div>

            <p className="flex items-center gap-2">
              <Image width={22} src={share} /> Share
            </p>
          </div>

          {showPopup && (
            <div
              onClick={handleCommentClick}
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                aria-label="Popup content"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">Comments</h2>
                  <button onClick={handleCommentClick}>
                    <RxCross1 size={22} />
                  </button>
                </div>

                <ul className="mt-4">
                  {comments.map((comment, index) => (
                    <li
                      key={index}
                      className="border border-gray-300 rounded-md p-2 mb-2"
                    >
                      <p className="text-gray-700">{comment.text}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(comment.timestamp).toLocaleString()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <hr className="my-2" />

          <div className="flex items-center gap-3">
            <div>
              <Image src={Story} className="rounded-full w-12 h-12" />
            </div>
            <div className="w-full">
              <form onSubmit={handleSaveComment}>
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Write a Comment..."
                  className="bg-[#FFEDED] rounded-xl w-full px-4 py-3"
                />
              </form>{" "}
            </div>
          </div>
        </div>

        {/* post */}
        <div className="bg-white w-[700px] h-auto rounded-xl p-5">
          <div className="head flex gap-3">
            <div>
              <Image className="w-14 h-14" src={post3} alt="" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col ">
                <h1 className="font-medium">Alexandro Vargas</h1>
                <p className="text-xs text-[#656565]">2h Ago</p>
              </div>

              <BsThreeDotsVertical size={22} />
            </div>
          </div>

          <div className="my-10 border">
            <div>
              <Image src={post_img2} alt="" />
            </div>

            <div className="h-[17rem]">
              <div className="flex items-center gap-5 relative bottom-12 left-5 ">
                <div>
                  <Image className="w-[143px] h-[143px]" src={post_img_2} />
                </div>
                <div className="flex flex-col mt-10">
                  <h2>Heading Here</h2>
                  <div className="flex">
                    <p className="border rounded-full bg-[#FFEDED] p-2 text-xs">
                      36k Interested
                    </p>
                    <p className="border rounded-full bg-[#FFEDED] p-2 text-xs">
                      10k Going
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-4 relative bottom-10">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm">
                      Wednesday, 24 January 2023 from 11:00-12:30
                    </p>
                    <p>Tomorrow</p>
                  </div>

                  <p className="text-sm">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </p>
                </div>

                <div className="flex gap-5">
                  <button className="bg-[#FF578E] rounded-md text-white px-4 py-2">
                    Be Our Sponsor
                  </button>
                  <button className="border border-[#FF578E] px-4 py-2">
                    Book me in
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p className="text-[#656565]">{like} likes</p>
              <p className="text-[#656565]">{comments.length} comments</p>
            </div>

            <p className="text-[#656565]text-xs">2k share</p>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p onClick={handleLike} className="flex items-center gap-2">
                <Image width={22} src={heart} /> Like
              </p>

              <p
                onClick={handleCommentClick}
                className="flex items-center gap-2"
              >
                <Image width={22} src={comment} /> Comment
              </p>
            </div>

            <p className="flex items-center gap-2">
              <Image width={22} src={share} /> Share
            </p>
          </div>

          {showPopup && (
            <div
              onClick={handleCommentClick}
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center "
              role="dialog"
              aria-modal="true"
            >
              <div
                className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                aria-label="Popup content"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">Comments</h2>
                  <button onClick={handleCommentClick}>
                    <RxCross1 size={22} />
                  </button>
                </div>

                <ul className="mt-4">
                  {comments.map((comment, index) => (
                    <li
                      key={index}
                      className="border border-gray-300 rounded-md p-2 mb-2"
                    >
                      <p className="text-gray-700">{comment.text}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(comment.timestamp).toLocaleString()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <hr className="my-2" />

          <div className="flex items-center gap-3">
            <div>
              <Image src={Story} className="rounded-full w-12 h-12" />
            </div>
            <div className="w-full">
              <form onSubmit={handleSaveComment}>
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Write a Comment..."
                  className="bg-[#FFEDED] rounded-xl w-full px-4 py-3"
                />
              </form>{" "}
            </div>
          </div>
        </div>

        {/* Image2 */}
        <div className="bg-white w-[700px] h-auto rounded-xl p-5">
          <div className="head flex gap-3">
            <div>
              <Image className="w-14 h-14" src={post4} alt="" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col ">
                <h1 className="font-medium">Alexandro Vargas</h1>
                <p className="text-xs text-[#656565]">2h Ago</p>
              </div>

              <BsThreeDotsVertical size={22} />
            </div>
          </div>

          <div className="my-2">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <Image src={post_img4} alt="" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p className="text-[#656565]">{like} likes</p>
              <p className="text-[#656565]">{comments.length} comments</p>
            </div>

            <p className="text-[#656565]text-xs">2k share</p>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p onClick={handleLike} className="flex items-center gap-2">
                <Image width={22} src={heart} /> Like
              </p>

              <p
                onClick={handleCommentClick}
                className="flex items-center gap-2"
              >
                <Image width={22} src={comment} /> Comment
              </p>
            </div>

            <p className="flex items-center gap-2">
              <Image width={22} src={share} /> Share
            </p>
          </div>

          {showPopup && (
            <div
              onClick={handleCommentClick}
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center "
              role="dialog"
              aria-modal="true"
            >
              <div
                className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                aria-label="Popup content"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">Comments</h2>
                  <button onClick={handleCommentClick}>
                    <RxCross1 size={22} />
                  </button>
                </div>

                <ul className="mt-4">
                  {comments.map((comment, index) => (
                    <li
                      key={index}
                      className="border border-gray-300 rounded-md p-2 mb-2"
                    >
                      <p className="text-gray-700">{comment.text}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(comment.timestamp).toLocaleString()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <hr className="my-2" />

          <div className="flex items-center gap-3">
            <div>
              <Image src={Story} className="rounded-full w-12 h-12" />
            </div>
            <div className="w-full">
              <form onSubmit={handleSaveComment}>
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Write a Comment..."
                  className="bg-[#FFEDED] rounded-xl w-full px-4 py-3"
                />
              </form>{" "}
            </div>
          </div>
        </div>

        {/* Audio */}
        <div className="bg-white w-[700px] h-auto rounded-xl p-5">
          <div className="head flex gap-3">
            <div>
              <Image className="w-14 h-14" src={post5} alt="" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col ">
                <h1 className="font-medium">Alexandro Vargas</h1>
                <p className="text-xs text-[#656565]">2h Ago</p>
              </div>

              <BsThreeDotsVertical size={22} />
            </div>
          </div>

          <div className="my-10">
            <div className="bg-[#FFEDED] rounded-full flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FaPlay size={20} />

                <p>0:00/1:55</p>
              </div>

              <div className="bg-[#D9D9D9] w-[30rem] h-2 relative rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 bg-[#FF578E] w-20 h-2"></div>
              </div>

              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p className="text-[#656565]">{like} likes</p>
              <p className="text-[#656565]">{comments.length} comments</p>
            </div>

            <p className="text-[#656565]text-xs">2k share</p>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <p onClick={handleLike} className="flex items-center gap-2">
                <Image width={22} src={heart} /> Like
              </p>

              <p
                onClick={handleCommentClick}
                className="flex items-center gap-2"
              >
                <Image width={22} src={comment} /> Comment
              </p>
            </div>

            <p className="flex items-center gap-2">
              <Image width={22} src={share} /> Share
            </p>
          </div>

          {showPopup && (
            <div
              onClick={handleCommentClick}
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center "
              role="dialog"
              aria-modal="true"
            >
              <div
                className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                aria-label="Popup content"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">Comments</h2>
                  <button onClick={handleCommentClick}>
                    <RxCross1 size={22} />
                  </button>
                </div>

                <ul className="mt-4">
                  {comments.map((comment, index) => (
                    <li
                      key={index}
                      className="border border-gray-300 rounded-md p-2 mb-2"
                    >
                      <p className="text-gray-700">{comment.text}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(comment.timestamp).toLocaleString()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <hr className="my-2" />

          <div className="flex items-center gap-3">
            <div>
              <Image src={Story} className="rounded-full w-12 h-12" />
            </div>
            <div className="w-full">
              <form onSubmit={handleSaveComment}>
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Write a Comment..."
                  className="bg-[#FFEDED] rounded-xl w-full px-4 py-3"
                />
              </form>{" "}
            </div>
          </div>
        </div>

        {/* Vote Cards */}
        {/* <div className='bg-white w-[700px] h-auto rounded-xl p-5'>
                    <div className="head flex gap-3">
                        <div>
                            <Image className='w-14 h-14' src={post6} alt='' />
                        </div>

                        <div className='flex items-center justify-between w-full'>
                            <div className='flex flex-col '>
                                <h1 className='font-medium'>Alexandro Vargas</h1>
                                <p className='text-xs text-[#656565]'>2h Ago</p>
                            </div>

                            <BsThreeDotsVertical size={22} />
                        </div>
                    </div>

                    <div className='my-10 flex items-center justify-center gap-3 whitespace-nowrap overflow-x-auto overflow-y-hidden h-[400px] relative'>
                        <div className=' w-[20rem] h-[10rem] relative bottom-24'>
                            <div className='w-full h-full overflow-hidden'>
                                <Image src={post_img} className='object-contain w-full h-full scale-[2]' />
                            </div>

                            <div className='p-5 w-full h-full bg-[#FFEDED] flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <h1>Floyd Miles</h1>
                                        <p className='text-xs'>Department</p>
                                    </div>

                                    <button className='bg-[#FF578E] rounded-md text-white px-4 py-2'>Vote Now</button>
                                </div>

                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. <br /> Molestie vulpUTate.</p>
                            </div>
                        </div>

                        <div className=' w-[20rem] h-[10rem] relative bottom-24'>
                            <div className='w-full h-full overflow-hidden'>
                                <Image src={post_img} className='object-contain w-full h-full scale-[2]' />
                            </div>

                            <div className='p-5 w-full h-full bg-[#FFEDED] flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <h1>Floyd Miles</h1>
                                        <p className='text-xs'>Department</p>
                                    </div>

                                    <button className='bg-[#FF578E] rounded-md text-white px-4 py-2'>Vote Now</button>
                                </div>

                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. <br /> Molestie vulpUTate.</p>
                            </div>
                        </div>

                        <div className=' w-[20rem] h-[10rem] relative bottom-24'>
                            <div className='w-full h-full overflow-hidden'>
                                <Image src={post_img} className='object-contain w-full h-full scale-[2]' />
                            </div>

                            <div className='p-5 w-full h-full bg-[#FFEDED] flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <h1>Floyd Miles</h1>
                                        <p className='text-xs'>Department</p>
                                    </div>

                                    <button className='bg-[#FF578E] rounded-md text-white px-4 py-2'>Vote Now</button>
                                </div>

                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. <br /> Molestie vulpUTate.</p>
                            </div>
                        </div>
                    </div>

                </div> */}
      </div>
    </>
  );
};

export default Post;

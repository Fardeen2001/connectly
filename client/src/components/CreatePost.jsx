"use client";
import Image from "next/image";
import React, { useState } from "react";
import { video, Story, photo, audio, text } from "../app/assets";
import Cookies from "js-cookie";
import { RxCross2 } from "react-icons/rx";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setFilePreview(previewUrl);
    } else {
      setFilePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    if (file) {
      formData.append("asset", file);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
        {
          method: "POST",
          body: formData,
          headers: {
            "x-auth-token": `${Cookies.get("token")}`,
          },
        }
      );

      const data = await response.json();
      setMessage("Post created successfully");
      setContent("");
      setFile(null);
      setFilePreview(null);
    } catch (error) {
      console.error("Error creating post:", error);
      console.log(error.message);
      setMessage("Error creating post");
    } finally {
      setLoading(false);
    }

    setIsOpen(false)
  };

  return (
    <div onClick={handleToggle} className="w-[700px] h-full bg-white shadow-lg p-4 rounded-xl relative">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <div>
            <Image src={Story} alt="Story" className="rounded-full w-14 h-14" />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="What's on your mind ?"
              className="bg-[#FFEDED] rounded-full w-full px-4 py-5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <hr className="my-5 text-black" />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1 cursor-pointer">
            <Image alt="video" width={22} src={video} />
            <span>Video</span>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <Image alt="photo" width={22} src={photo} />
            <span>Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <Image alt="audio" width={22} src={audio} />
            <span>Audio</span>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <Image alt="text" width={22} src={text} />
            <span>Text</span>
            <input
              type="file"
              accept="text/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </form>
      {message && (<p>{message}</p>
      )}

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white shadow-lg px-3 py-5 w-1/2 h-[30rem] overflow-y-auto rounded-lg overflow-y-auto">

              <div className='flex items-center justify-between'>
                <h1 className="text-xl font-semibold">Create Post</h1>
                <p
                  className="border-2 border-[#F45044] p-1 cursor-pointer rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross2 size={22} className='text-[#F45044]' />
                </p>
              </div>

              <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3 mt-5">
                  <div>
                    <Image src={Story} alt="Story" className="rounded-full w-14 h-14" />
                  </div>
                  <h1 className="font-medium">Alexandro Vargas</h1>

                </div>

                {filePreview && (
                  <div className="mt-4 flex items-center justify-center w-full h-full">
                    {file.type.startsWith("image/") && (
                      <Image
                        src={filePreview}
                        alt="Preview"
                        width={200}
                        height={200}
                        className="rounded"
                      />
                    )}
                    {file.type.startsWith("video/") && (
                      <video
                        src={filePreview}
                        controls
                        className="rounded w-full h-auto"
                      />
                    )}
                    {file.type.startsWith("audio/") && (
                      <audio src={filePreview} controls className="w-full" />
                    )}
                  </div>
                )}

                <div className="my-5">
                  <textarea rows={5} value={content}
                    onChange={(e) => setContent(e.target.value)} placeholder="What's on your mind..." className="px-4 py-1 w-full bg-transparent focus:outline-none text-lg">

                  </textarea>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <Image alt="video" width={22} src={video} />
                    <span>Video</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <Image alt="photo" width={22} src={photo} />
                    <span>Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <Image alt="audio" width={22} src={audio} />
                    <span>Audio</span>
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#F45044] text-white px-4 py-2 rounded w-full"
                >
                  {loading ? "Posting.." : "Post"}
                </button>

              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreatePost;

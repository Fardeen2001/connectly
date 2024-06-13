"use client";
import Image from "next/image";
import React, { useState } from "react";
import { video, Story, photo, audio, text } from "../app/assets";
import Cookies from "js-cookie";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <div className="w-[700px] h-full bg-white shadow-lg p-4 rounded-xl">
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

        {filePreview && (
          <div className="mt-4">
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

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Posting.." : "Post"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePost;

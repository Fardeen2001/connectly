'use client'
import React, { useEffect, useState } from 'react'
import "../globals.css";
import {
    Post,
    SideBar,
    StoryCard,
    CreatePost,
    RightNav,
    Footer,
} from "../../components";
import Loading from '@/components/Loading';
const page = () => {

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
                <div className="p-5 flex items-center gap-5 story-card">
                    <StoryCard />
                </div>
                <div className="sidebar-left">
                    <SideBar />
                </div>
                <div className="sidebar-right p-5">
                    <RightNav />
                </div>
                <div className="feed-section mx-auto">
                    <div className="flex items-center justify-center flex-col ">
                        <CreatePost />
                        <Post />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
"use client";
import React, { useEffect, useState } from "react";
import AvatarComponent from "@/components/AvatarComponent";
import { Button } from "@/components/ui/button";
import { RightNav, SideBar } from "@/components";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/notifications/all`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": `${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/notifications/read/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex justify-between p-5 rounded-lg">
      <div>
        <SideBar />
      </div>
      <div className="bg-secondary w-[50vw] h-screen rounded-xl p-5 overflow-y-auto">
        <h1 className="text-xl font-semibold">All Notifications</h1>
        <div className="mt-3 space-y-2">
          {notifications?.map((notification) => (
            <div
              key={notification._id}
              className="flex items-start gap-2 p-4 border-b"
            >
              <div>
                <AvatarComponent
                  imgSrc={
                    notification.user.avatarUrl ||
                    "https://github.com/shadcn.png"
                  }
                  name={notification.user.name}
                />
              </div>
              <div>
                <h2 className="text-lg font-medium">
                  {notification.type === "like" ? "New Like" : "New Comment"}
                </h2>
                <p>{notification.message}</p>
                <a href={notification.link} className="text-primary underline">
                  View
                </a>
                <p className="text-primary/50">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>
                <div className="flex items-center gap-2">
                  {!notification.isRead && (
                    <Button onClick={() => markAsRead(notification._id)}>
                      Mark as Read
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <RightNav />
      </div>
    </div>
  );
};

export default Notification;

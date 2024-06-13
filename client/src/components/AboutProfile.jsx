import React from "react";

const AboutProfile = ({ profileData }) => {
  // const interests = [
  //   { name: 'Traveling' },
  //   { name: 'Cooking' },
  //   { name: 'Yoga' },
  //   { name: 'Photography' },
  //   { name: 'Gardening' },
  //   { name: 'Dancing' },
  //   { name: 'Camping' },
  //   { name: 'Volunteering' },
  //   { name: 'Chess' },
  //   { name: 'Writing' },
  //   { name: 'Pottery' },
  //   { name: 'Chess' },
  //   { name: 'Meditation' },
  //   { name: 'Video Games' },
  //   { name: 'Calligraphy' },
  //   { name: 'Running' },
  // ];

  const personalInfo = [
    {
      heading: "Name",
      details: profileData.user.name,
    },
    {
      heading: "Birthday",
      details: "24/01/1994",
    },
    {
      heading: "Display Name:",
      details: "Cameron Williamson",
    },
    {
      heading: "Gender",
      details: "Female",
    },
    {
      heading: "Email Address",
      details: profileData.user.email,
    },
    {
      heading: "Phone Number",
      details: "(208) 555-0112",
    },
    {
      heading: "Location",
      details: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
    {
      heading: "Level",
      details: "1234",
    },
    {
      heading: "College Name",
      details: "Westheimer Santa College",
    },
    {
      heading: "State Origin",
      details: "Indian",
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-2">
      <div className="bg-white w-[760px] rounded-xl px-5 py-3 flex flex-col gap-3">
        <h1 className="text-lg font-semibold">Profile Details</h1>

        <div className="flex flex-col gap-1">
          <p className="text-[#656565] text-sm">Occupation</p>
          <p className="text-xs">Developer at Myntra</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[#656565] text-sm">Bio</p>
          <p className="text-xs">{profileData.bio}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[#656565] text-sm">Interest</h1>

          <div className="flex flex-wrap gap-2">
            {profileData.interests.map((interest, index) => (
              <p
                key={index}
                className={`rounded-full text-xs text-[#656565] border-[1px] border-[#F45044] px-2 py-1 flex items-center justify-center`}
              >
                {interest}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white w-[760px] rounded-xl p-5 flex flex-col gap-5">
        <h1 className="text-lg font-semibold">Personal Information</h1>
        <div className="grid grid-cols-2 gap-5">
          {personalInfo.map((info, index) => {
            return (
              <div key={index} className="">
                <h2 className="text-[#656565] text-xs">{info.heading}</h2>
                <p className="font-medium text-sm">{info.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;

const Profile = require("../models/profileModel");
const mongoose = require("mongoose");
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

const getProfileMatchPercentage = (currentUserInterests, profileInterests) => {
  const commonInterests = profileInterests.filter((interest) =>
    currentUserInterests.includes(interest)
  );
  return (commonInterests.length / currentUserInterests.length) * 100;
};

const fetchProfiles = async (currentUserProfile, minMatchPercentage) => {
  const { interests } = currentUserProfile;

  const allProfiles = await Profile.find({
    user: { $ne: currentUserProfile.user },
    interests: { $exists: true, $ne: [] },
  });

  return allProfiles.filter((profile) => {
    const matchPercentage = getProfileMatchPercentage(
      interests,
      profile.interests
    );
    return matchPercentage >= minMatchPercentage;
  });
};

const getNearbyProfiles = async (currentUserProfile, minMatchPercentage) => {
  const { interests, location } = currentUserProfile;

  const allProfiles = await Profile.find({
    user: { $ne: currentUserProfile.user },
    location: { $exists: true, $ne: "" },
    interests: { $exists: true, $ne: [] },
  });

  const filteredProfiles = allProfiles.filter((profile) => {
    const matchPercentage = getProfileMatchPercentage(
      interests,
      profile.interests
    );
    return matchPercentage >= minMatchPercentage;
  });

  const promises = filteredProfiles.map((profile) =>
    client.distancematrix({
      params: {
        origins: [location],
        destinations: [profile.location],
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000,
    })
  );

  const responses = await Promise.all(promises);

  return filteredProfiles.map((profile, index) => {
    const distanceInfo = responses[index].data.rows[0].elements[0];
    return {
      profile,
      distance: distanceInfo.distance.text,
      duration: distanceInfo.duration.text,
      location: profile.location,
      link: `https://dummy-link-to-profile/${profile.user}`,
    };
  });
};

const preferencesOn = async (req, res) => {
  try {
    const userId = req.user.id;
    const { minMatchPercentage = 50 } = req.query;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const currentUserProfile = await Profile.findOne({ user: userId });

    if (!currentUserProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const nearbyProfiles = await getNearbyProfiles(
      currentUserProfile,
      parseInt(minMatchPercentage)
    );

    res.status(200).json(nearbyProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching nearby profiles", error });
  }
};

const preferencesOff = async (req, res) => {
  try {
    const userId = req.user.id;
    const { minMatchPercentage = 50 } = req.query;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const currentUserProfile = await Profile.findOne({ user: userId });

    if (!currentUserProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const matchedProfiles = await fetchProfiles(
      currentUserProfile,
      parseInt(minMatchPercentage)
    );

    res.status(200).json(
      matchedProfiles.map((profile) => ({
        profile,
        link: ``, // will replace this with the frontend link to that particular profile
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching profiles", error });
  }
};

module.exports = {
  preferencesOn,
  preferencesOff,
};

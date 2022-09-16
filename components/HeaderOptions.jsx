import React from "react";
import HearderOption from "./HearderOption";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  MapIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left */}
      <div className="flex space-x-6">
        <HearderOption Icon={MagnifyingGlassIcon} title="All" selected />
        <HearderOption Icon={PhotoIcon} title="Images" />
        <HearderOption Icon={PlayIcon} title="Videos" />
        <HearderOption Icon={NewspaperIcon} title="News" />
        <HearderOption Icon={MapIcon} title="Map" />
        <HearderOption Icon={EllipsisVerticalIcon} title="More" />
      </div>

      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Setting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;

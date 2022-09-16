import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
          height={40}
          width={120}
          alt="ppic"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XCircleIcon
            className="h-6 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <MagnifyingGlassIcon className="h-6 text-blue-500 sm:inline-flex" />
          <button hidden type="submit" onClick={search}></button>
        </form>
        <Avatar className="ml-auto" url='https://avatars.githubusercontent.com/u/91916651?v=4'/>
      </div>

      <HeaderOptions/>
    </header>
  );
};

export default Header;

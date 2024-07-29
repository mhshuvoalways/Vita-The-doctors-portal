"use client";

import Dropdown from "@/app/components/common/headlessui/Dropdown";
import BellIcon from "@/public/icons/bell.svg";
import LogoIcon from "@/public/icons/logo.svg";
import UserImage from "@/public/images/user.png";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Carte",
    url: "/",
  },
  {
    name: "Documents",
    url: "/docs",
  },
  {
    name: "Rendez-vous",
    url: "/appointment",
  },
  {
    name: "Parametres",
    url: "/profile",
  },
];

const Header = ({ reliability }) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between pt-9 mycontainer sm:px-10 gap-5 sm:gap-10">
      <div className="block md:hidden">
        <Dropdown
          btnIcon={<Bars3CenterLeftIcon className="size-7" />}
          items={menus}
          className="w-40 block md:hidden"
        />
      </div>
      <Link href={"/"}>
        <Image src={LogoIcon} alt="Vita" />
      </Link>
      <div className="bg-[#EDEDED] rounded-2xl py-1 px-2 items-center hidden md:flex">
        {menus.map((menu, index) => (
          <Link href={menu.url} key={index}>
            <p
              className={`px-5 lg:px-16 py-3 cursor-pointer text-nowrap ${
                menu.url === pathname
                  ? "bg-[#76C1F3] rounded-3xl text-white"
                  : "text-[#626060]"
              }`}
            >
              {menu.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 sm:gap-7">
        {reliability && (
          <div className="text-center">
            <p className="header-reliability text-xl">100 %</p>
            <p className="text-gray-500 text-sm">Indice de fiabilité</p>
          </div>
        )}
        <Image src={BellIcon} alt="Bell" className="cursor-pointer" />
        <Link href={"/login"}>
          <Image
            src={UserImage}
            alt="User"
            className="size-11 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;

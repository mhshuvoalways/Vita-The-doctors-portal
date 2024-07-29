"use client";

import Tab from "@/app/components/auth/Tab";
import Link from "next/link";

const SignPage = () => {
  const items = [
    {
      name: "Connexion",
      url: "/login",
    },
    {
      name: "Inscription",
      url: "/signup",
    },
  ];

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white rounded-3xl pt-5 px-20 pb-14 w-11/12 sm:w-6/12 lg:w-4/12 my-5">
        <div className="text-center">
          <Tab items={items} />
        </div>
        <div className="mt-16 flex items-center justify-between">
          <div>
            <p className="text-[#4A9ED6] font-medium">Prénom</p>
            <input
              type="text"
              className="border-b border-[#4A9ED6] outline-0 w-full"
            />
          </div>
          <div>
            <p className="text-[#4A9ED6] font-medium">Nom</p>
            <input
              type="text"
              className="border-b border-[#4A9ED6] outline-0 w-full"
            />
          </div>
        </div>
        <div className="mt-7">
          <p className="font-medium text-[#4A9ED6]">Téléphone</p>
          <input
            type="text"
            className="border-b border-[#4A9ED6] outline-0 w-full"
          />
        </div>
        <div className="mt-7">
          <p className="font-medium text-[#4A9ED6]">Adresse mail</p>
          <input
            type="text"
            className="border-b border-[#4A9ED6] outline-0 w-full"
          />
        </div>
        <div className="text-[#4A9ED6] font-medium mt-8 text-center">
          <p>Date de naissance</p>
          <p>--/--/---</p>
        </div>
        <div className="flex justify-center mt-10">
          <Link href={"/confirm-signup"}>
            <button className="py-3 px-20 text-[#4A9ED6] rounded-3xl font-semibold signupbtn shadow-xl">
              Envoyer un <br /> code de verification
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignPage;

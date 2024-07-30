"use client";

import Tab from "@/app/components/auth/Tab";

const LoginPage = () => {
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
        <div className="mt-16">
          <p className="text-[#4A9ED6] font-medium">Téléphone</p>
          <input
            type="text"
            className="border-b border-[#4A9ED6] outline-0 w-full"
          />
        </div>
        <div className="mt-7">
          <div className="flex items-center justify-between font-medium text-[#4A9ED6]">
            <p>Mot de passe</p>
            <p>Oublié ?</p>
          </div>
          <input
            type="text"
            className="border-b border-[#4A9ED6] outline-0 w-full"
          />
        </div>
        <p className="font-medium text-sm text-center mt-10 w-10/12 sm:w-6/12 mx-auto">
          Connectez vous pour confirmer votre rendez-vous
        </p>
        <div className="flex justify-center">
          <button className="mt-7 py-3 px-20 text-white rounded-full font-semibold grandientbtn">
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

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
      <div className="bg-white rounded-3xl pt-5 px-20 pb-14 w-11/12 sm:w-6/12 lg:w-4/12 my-5 text-center">
        <div className="text-center">
          <Tab items={items} />
        </div>
        <div className="flex items-center gap-4 justify-center mt-14">
          <input
            type="text"
            className="bg-[#F1F3F6] w-16 h-20 rounded-3xl outline-0 p-2 text-xl"
          />
          <input
            type="text"
            className="bg-[#F1F3F6] w-16 h-20 rounded-3xl outline-0 p-2 text-xl"
          />
          <input
            type="text"
            className="bg-[#F1F3F6] w-16 h-20 rounded-3xl outline-0 p-2 text-xl"
          />
          <input
            type="text"
            className="bg-[#F1F3F6] w-16 h-20 rounded-3xl outline-0 p-2 text-xl"
          />
        </div>
        <p className="text-[#4A9ED6] mt-4 font-medium">
          Renseignez le code recu par SMS si vous n’avez pas recus le SMS
          cliquez ici
        </p>
        <div className="flex justify-center mt-10">
          <button className="grandientbtn py-3 px-5 rounded-full text-white">
            Confirmer l’inscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

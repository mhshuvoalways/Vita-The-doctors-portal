"use client";

import List from "@/app/components/appointment/List";
import Progress from "@/app/components/appointment/Progress";
import Header from "@/app/components/common/header";
import ArrowDown2 from "@/public/icons/arrowdown2.svg";
import ArrowLeft2 from "@/public/icons/arrowleft2.svg";
import ArrowUp from "@/public/icons/arrowup.svg";
import Dotcolor from "@/public/icons/dotcolor.svg";
import NarrowBg from "@/public/icons/narrowbg.svg";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 1,
    titleColor: "#7953E7BF",
    title: "Première consultation dentaire",
  },
  {
    id: 2,
    titleColor: "#7953E7BF",
    title: "Détartrage",
  },
  {
    id: 3,
    titleColor: "#90C34E",
    title: "Extraction dentaire",
  },
  {
    id: 4,
    titleColor: "#CB897A",
    title: "Orthodontie",
  },
  {
    id: 5,
    titleColor: "#E8BD25",
    title: "Endodontie",
  },
  {
    id: 6,
    titleColor: "#DF1E1EBF",
    title: "Urgence dentaire",
  },
  {
    id: 7,
    titleColor: "#F13B93",
    title: "Pose de prothese dentaire",
  },
  {
    id: 8,
    titleColor: "#7DC0F1",
    title: "Soins dentaires",
  },
  {
    id: 9,
    titleColor: "#8F8F8F",
    title: "Bilan bucco-dentaire",
  },
];

const SchedulePage = () => {
  const [hoverItem, setHoverItem] = useState(items[0]);

  const hoverHandler = (item) => {
    setHoverItem(item);
  };

  return (
    <>
      <Header reliability />
      <div className="mycontainer my-14 flex flex-wrap lg:flex-nowrap items-center justify-between relative gap-10 xl:gap-20">
        <div className="w-full lg:w-7/12 z-10">
          <div className="flex items-center gap-4 font-semibold text-gray-400 text-xl cursor-pointer">
            <Image src={ArrowLeft2} alt="" />
            <p>Retour</p>
          </div>
          <div className="bg-[#F4F6F9] mt-7 rounded-3xl p-5 sm:px-10 sm:py-8">
            <p className="text-3xl font-medium text-[#2D2D2D]">
              Séléctionnez un motif de <br /> Rendez-vous
            </p>
            <div className="mt-10 bg-white p-4 sm:py-7 sm:px-14 rounded-3xl">
              <div className="xs:grid-cols-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8">
                {items.map((item) => (
                  <List
                    key={item.id}
                    item={item}
                    hoverItem={hoverItem}
                    hoverHandler={hoverHandler}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <div className="bg-[#F8F8F8] inline-flex justify-center items-center rounded-full p-4 gap-5">
                  <Image src={ArrowUp} alt="" className="cursor-pointer" />
                  <Image src={ArrowDown2} alt="" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Image
            src={NarrowBg}
            alt=""
            className="absolute lg:w-5/12 lg:top-20 -right-0 lg:right-0 bottom-60 lg:bottom-0 z-0"
          />
          <div className="bg-white rounded-3xl p-5 sm:px-7 sm:py-5 relative shadow-lg">
            <Image src={Dotcolor} alt="" />
            <div className="border mt-3 px-3 py-6 rounded-2xl">
              <p className="text-[#6C6C6C] text-xs">Première étape</p>
              <p className="text-[#0460A3BF] text-lg font-medium">
                Choix du motif de Rendez-vous
              </p>
              <p className="text-[#0460A3] bg-blue-100 py-2 px-7 rounded-full mt-8 ml-0 xl:ml-20 text-center inline-block font-medium text-sm sm:text-base">
                Première consultation dentaire
              </p>
              <p className="mt-10 font-medium">
                Tarif appliqué et prise en charge
              </p>
              <div className="bg-[#F8F8F8] rounded-3xl mt-1 mx-5 lg:mx-0 xl:mx-12 py-2 lg:py-1 xl:py-3 px-7 lg:px-5 xl:px-10 flex items-center justify-start gap-5">
                <div>
                  <p className="bg-blue-100 size-16 sm:size-20 xl:size-28 2xl:size-28 rounded-full flex items-center justify-center font-semibold text-[#4388BA] text-lg">
                    23 €
                  </p>
                </div>
                <div className="space-y-1 w-full">
                  <Progress color={"#6CB7EE"} />
                  <Progress color={"#90C34E85"} />
                  <Progress color={"#9D7971"} />
                </div>
              </div>
              <p className="text-xs text-center mt-5">
                Les honoraires affichés sont à titre indicatif, Les honoraires
                ou la prise en charge est susceptible d’etre modifié en fonction
                selon la couverture social du patient et la nature des actes
                réalisés par le praticien
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePage;

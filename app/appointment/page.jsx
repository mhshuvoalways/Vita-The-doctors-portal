"use client";

import DetailsAppointment from "@/app/components/appointment/detailsAppointment";
import FeeComponent from "@/app/components/appointment/fee";
import List from "@/app/components/appointment/myAppointment/List";
import Tab from "@/app/components/appointment/myAppointment/Tab";
import Header from "@/app/components/common/header";
import { useState } from "react";

const AppointmentPage = () => {
  const [selected, setSelected] = useState("RDV à venir");

  return (
    <>
      <Header />
      <div className="mycontainer my-14 flex flex-wrap xl:flex-nowrap gap-20 lg:gap-10 justify-between ">
        <div className="w-full xl:w-[25%] bg-[#F4F6F9] p-4 rounded-2xl">
          <div className="bg-white rounded-2xl">
            <div className="px-3 pt-2 text-center">
              <p className="text-[#098AD3] font-semibold text-lg">
                Mes Rendez-vous
              </p>
              <Tab
                items={["RDV à venir", "RDV passés"]}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <div className="mt-10 overflow-y-auto">
              <List isActive />
              <List />
              <List />
            </div>
          </div>
        </div>
        <DetailsAppointment />
        <FeeComponent />
      </div>
    </>
  );
};

export default AppointmentPage;

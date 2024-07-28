import Header from "@/app/components/common/header";
import Tab from "@/app/components/docs/Tab";
import List from "@/app/components/docs/leftSide/List";
import TelePhoneIcon from "@/public/icons/telephone.svg";
import Doctor from "@/public/images/doctor1.png";
import Invoice from "@/public/images/invoice.png";
import Image from "next/image";

const AppointmentPage = () => {
  const tabs = ["Devis", "Ordonnance", "Courrier", "Radiographies"];

  return (
    <>
      <Header />
      <div className="mycontainer my-14">
        <div className="flex items-center gap-7 text-[#098AD3] font-semibold text-xl">
          <p>Mes documents</p>
          <p className="bg-[#098AD3] flex justify-center items-center rounded-full text-white w-7 cursor-pointer">
            +
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-between mt-6">
          <div className="w-full lg:w-[28%] bg-[#F4F6F9] p-4 rounded-2xl">
            <div className="bg-white rounded-t-2xl border-b-4 border-[#EBEBEB]">
              <div className="px-2 py-2">
                <div className="flex items-center flex-wrap gap-2">
                  {tabs.map((el) => (
                    <Tab titile={el} key={el} />
                  ))}
                </div>
              </div>
            </div>
            <List isActive />
            <List />
            <List />
          </div>
          <div className="w-full lg:w-[40%] bg-[#96D2F224] rounded p-2 sm:p-8">
            <Image src={Invoice} alt="" />
          </div>
          <div className="w-full lg:w-[32%]">
            <div className="bg-[#F4F6F9] p-4 rounded-2xl">
              <div className="bg-white rounded-2xl p-3">
                <div className="flex items-center gap-3">
                  <Image src={Doctor} alt="" />
                  <div>
                    <p className="font-medium text-[#309FE7]">
                      Dr Johanna Feyrouz
                    </p>
                    <p className="text-[#525252] text-sm">
                      Chirurgien-dentiste{" "}
                    </p>
                    <button className="btn py-1.5 px-5 text-xs mt-4">
                      Prendre Rendez-vous
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1 justify-between mt-5">
                  <div className="inline-flex items-center justify-center gap-2 text-[#098AD3] mt-3 bg-[#F2F4F7] rounded-full px-2 py-1">
                    <Image src={TelePhoneIcon} alt="" />
                    <p className="text-xs text-wrap break-all">
                      01.45.37.82.26
                    </p>
                  </div>
                  <div>
                    <p className="text-[#098AD3] bg-[#F2F4F7] rounded-full px-2 py-1 mt-2 inline-block text-xs text-wrap break-all">
                      @cmd.meudon@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-medium text-center mt-8 px-10 sm:px-20">
              Document transmis le 17/05/2023 Au cabinet dentaire de Bellevue.
              41 Avenue du général galliéni 92190 Meudon
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;

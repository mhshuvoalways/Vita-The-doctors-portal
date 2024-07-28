import Header from "@/app/components/common/header";
import TelephoneIcon from "@/public/icons/telephone.svg";
import Doctor from "@/public/images/doctor1.png";
import Image from "next/image";
import List from "../components/appointment/myAppointment/List";
import Tab from "../components/appointment/myAppointment/Tab";
import PieChartCompo from "../components/charts/PieChart";
import Map from "../components/map";

const AppointmentPage = () => {
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
              <Tab />
            </div>
            <div className="mt-10 overflow-y-auto">
              <List isActive />
              <List />
              <List />
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[40%]">
          <p className="text-[#098AD3] font-semibold text-lg">
            Détail du rendez-vous
          </p>
          <div className="flex mt-11 justify-between items-end gap-5 text-center">
            <div>
              <Image src={Doctor} alt="" className="mx-auto size-24" />
              <p className="font-semibold text-[#4A9ED6] mt-6">
                Dr Andréa Fargeaon
              </p>
              <p className="text-[#3F3F3F] font-semibold text-sm bg-[#F8F8F8] py-1 px-1 rounded-full">
                Medecin généraliste
              </p>
            </div>
            <div>
              <p className="btn py-5 cursor-pointer text-xs sm:text-base font-normal lg:font-bold">
                Consultation dentaire
              </p>
              <p className="text-[#696767] font-medium mt-7">
                Votre Rendez-vous est confirmé
              </p>
              <p className="text-[#5A99C3] font-bold text-lg">
                18 Janvier à 18h00
              </p>
            </div>
          </div>
          <div className="bg-[#F4F6F9] py-3 px-3 rounded-2xl mt-5 gap-2 flex items-center justify-center">
            <p className="text-[#5A99C3] bg-[#FFFFFF] py-3 px-8 rounded-xl shadow font-medium text-sm">
              Contacter le cabinet
            </p>
            <p className="text-[#FF0000] bg-[#FFFFFF] py-3 px-8 rounded-xl shadow font-medium text-sm">
              Annuler le rendez-vous
            </p>
          </div>
          <p className="mt-3 text-center text-[#6C6C6C]">
            Un rendez-vous vous engage et se doit d’etre respecté. En cas
            d’impossibilité, veillez à prevenir le praticien suffisament en
            avance et ou appeler le cabinet en cas d’imprévue urgent.
          </p>
          <p className="text-[#098AD3] font-semibold mt-12 text-lg">
            Adresse du cabinet
          </p>
          <div className="bg-[#F4F6F9] p-4 rounded-xl mt-5">
            <div className="bg-white py-2 px-3 rounded-lg shadow-sm">
              <p>Cabinet dentaire de bellevue</p>
              <p className="text-[#909090]">
                41 Avenue du général galliéni 92190 MEUDON
              </p>
              <div className="mt-3">
                <Map />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[35%]">
          <p className="text-[#098AD3] text-lg font-semibold">Honoraires</p>
          <div className="bg-[#F4F6F9] rounded-xl mt-2 p-4">
            <div className="bg-white rounded-xl p-5">
              <div className="w-48 text-center">
                <p className="font-semibold">Consultation spécialisée</p>
                <p className="font-bold text-lg text-[#5A99C3]">108 €</p>
              </div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap items-center text-nowrap">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[#545454] font-semibold">
                      Sécurité social
                    </p>
                    <p className="text-[#5A99C3] font-semibold">26 €</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[#545454] font-semibold">Mutuelle</p>
                    <p className="text-[#5A99C3] font-semibold">48 €</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[#545454] font-semibold">
                      Reste à charge
                    </p>
                    <p className="text-[#5A99C3] font-semibold">30 €</p>
                  </div>
                </div>
                <PieChartCompo />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#098AD3] text-lg font-semibold">
              Autres informations
            </p>
            <div className="bg-[#F4F6F9] rounded-xl mt-2 p-4 text-center">
              <div className="bg-white rounded-xl p-5">
                <p className="text-[#1F1F1F] font-semibold">Note du cabinet</p>
                <p className="mt-2">
                  Veuillez vous présenter 15 minutes avant le début du
                  rendez-vous, n’oubliez pas d’apporter votre carte vital et
                  carte mutuelle. en cas d’impossibilité merci d’avertir 48h
                  avant le début du rendez-vous
                </p>
              </div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap gap-5 mt-5 text-nowrap overflow-x-hidden">
                <div className="bg-white rounded-xl p-5 w-full">
                  <p className="text-[#1F1F1F] font-semibold">
                    Document à apporter
                  </p>
                  <div className="flex flex-wrap lg:flex-nowrap items-center justify-center sm:justify-between gap-2 text-[#098AD3] mt-3 text-xs">
                    <p className="bg-[#F2F4F7] rounded-full py-1 px-2">
                      Carte Vitale
                    </p>
                    <p className="bg-[#F2F4F7] rounded-full py-1 px-2">
                      Carte Vitale
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 w-full overflow-x-hidden">
                  <p className="text-[#1F1F1F] font-semibold">Contact</p>
                  <div className="inline-flex items-center justify-center gap-2 text-[#098AD3] mt-3 bg-[#F2F4F7] rounded-full p-1">
                    <Image src={TelephoneIcon} alt="" />
                    <p className="text-xs text-wrap break-all">
                      01.45.37.82.26
                    </p>
                  </div>
                  <div>
                    <p className="text-[#098AD3] bg-[#F2F4F7] rounded-full p-1 mt-2 inline-block text-xs text-wrap break-all">
                      @cmd.meudon@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;

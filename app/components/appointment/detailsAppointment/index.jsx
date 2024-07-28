import Map from "@/app/components/map";
import Doctor from "@/public/images/doctor1.png";
import Image from "next/image";

const index = () => {
  return (
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
          <p className="text-[#5A99C3] font-bold text-lg">18 Janvier à 18h00</p>
        </div>
      </div>
      <div className="bg-[#F4F6F9] py-3 px-3 rounded-2xl mt-5 gap-2 flex items-center lg:justify-between justify-center">
        <p className="text-[#5A99C3] bg-[#FFFFFF] py-3 px-8 rounded-xl shadow font-medium text-sm lg:text-base">
          Contacter le cabinet
        </p>
        <p className="text-[#FF0000] bg-[#FFFFFF] py-3 px-8 rounded-xl shadow font-medium text-sm lg:text-base">
          Annuler le rendez-vous
        </p>
      </div>
      <p className="mt-3 text-center text-[#6C6C6C]">
        Un rendez-vous vous engage et se doit d’etre respecté. En cas
        d’impossibilité, veillez à prevenir le praticien suffisament en avance
        et ou appeler le cabinet en cas d’imprévue urgent.
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
  );
};

export default index;

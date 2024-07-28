import PieChartCompo from "@/app/components/charts/PieChart";
import TelephoneIcon from "@/public/icons/telephone.svg";
import Image from "next/image";

const index = () => {
  return (
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
                <p className="text-[#545454] font-semibold">Sécurité social</p>
                <p className="text-[#5A99C3] font-semibold">26 €</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[#545454] font-semibold">Mutuelle</p>
                <p className="text-[#5A99C3] font-semibold">48 €</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[#545454] font-semibold">Reste à charge</p>
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
              Veuillez vous présenter 15 minutes avant le début du rendez-vous,
              n’oubliez pas d’apporter votre carte vital et carte mutuelle. en
              cas d’impossibilité merci d’avertir 48h avant le début du
              rendez-vous
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
                <p className="text-xs text-wrap break-all">01.45.37.82.26</p>
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
  );
};

export default index;

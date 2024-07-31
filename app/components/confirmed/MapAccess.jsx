import Map from "@/app/components/map";
import BusIcon from "@/public/icons/bus.svg";
import HomeIcon from "@/public/icons/home.svg";
import InfoIcon from "@/public/icons/info.svg";
import Image from "next/image";

const MapAccess = () => {
  return (
    <div className="w-full lg:w-[40%] bg-white rounded-lg py-5 px-5">
      <p className="text-center text-lg font-medium">Plan et moyens d’accés</p>
      <div className="h-[300px] border border-[#0460A3BF] rounded-lg p-1 sm:p-4 shadow-xl mt-8">
        <Map />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
        <div>
          <div className="flex items-center gap-5 mb-3">
            <Image src={HomeIcon} alt="" />
            <p className="font-medium text-sm">Cabinet dentaire Bellevue</p>
          </div>
          <p className="text-[#4E4E4E] text-xs">
            Adresse: 41 Avenue du général Galliéni 92190 MEUDON
            <br />
            Téléphone: 01.46.90.82.84
          </p>
        </div>
        <div>
          <div className="flex items-center gap-5 mb-3">
            <Image src={BusIcon} alt="" />
            <p className="font-medium text-sm">Moyens de transport</p>
          </div>
          <p className="text-[#4E4E4E] text-xs">
            Tramway - Brimborion (ligne T2)
            <br />
            RER - Gare de Sevres Rive Gauche (ligne N)
            <br />
            Bus - Gare De Bellevue (lignes 169 et 389)
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 gap-3">
        <Image src={InfoIcon} alt="" />
        <p className="font-medium">Informations pratiques</p>
      </div>
      <p className="text-sm text-center mt-1">
        Rez-de-chaussée - Entrée accessible - Parking gratuit
      </p>
    </div>
  );
};

export default MapAccess;

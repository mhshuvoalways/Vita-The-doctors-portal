import Schedule from "@/app/components/doctors/Schedule";
import TelephoneIcon from "@/public/icons/telephone.svg";
import Doctor1 from "@/public/images/doctor1.png";
import Image from "next/image";

const Item = () => {
  return (
    <div className="bg-white rounded-3xl p-3 flex justify-between gap-5 lg:gap-2 flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-5/12">
        <div className="flex gap-2 items-start">
          <Image src={Doctor1} alt="doctor" />
          <div>
            <p className="font-medium">Dr Sarah Fargeon</p>
            <div className="inline-flex items-center mt-3 gap-3 bg-[#EDEDED] px-2 rounded-full">
              <Image src={TelephoneIcon} alt="telephone" />
              <p className="text-[#76C1F3]">01.45.37.82.26</p>
            </div>
            <p className="mt-3 text-gray-600">
              41 Avenue du général Gallieni 92190 Meudon
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-6 overflow-x-hidden">
          <p className="bg-[#76C1F3] px-2 rounded-full text-white text-sm text-nowrap">
            Reservation en ligne
          </p>
          <p className="bg-[#76C1F3] px-2 rounded-full text-white text-sm text-nowrap">
            Conventionné secteur 1
          </p>
        </div>
      </div>
      <Schedule />
    </div>
  );
};

export default Item;

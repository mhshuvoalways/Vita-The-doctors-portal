import Doctor from "@/public/images/doctor1.png";
import Image from "next/image";

const List = ({ isActive }) => {
  return (
    <div className={isActive && `bg-[#76C1F31A] shadow`}>
      <div className="flex items-center gap-2 px-3 py-5 border-t border-gray-100">
        <Image src={Doctor} alt="" />
        <div>
          <p className="text-[#3F3F3F] font-semibold">Dr Sarah Fargeon</p>
          <p className="text-[#1993E4] font-medium text-sm mt-1">
            Medecin généraliste
          </p>
          <p className="text-[#909090] mt-1.5">
            41 Avenue du général galliéni 92190 MEUDON
          </p>
          <p className="text-[#5A99C3] bg-white py-1 px-4 rounded-full inline-block mt-1.5">
            8 Mai 2025 à 16:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;

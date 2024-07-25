import Button from "@/app/components/common/button";
import ArrowDownIcon from "@/public/icons/arrowdown.svg";
import Image from "next/image";

const Search = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1 items-end">
      <div>
        <p className="text-gray-500 text-sm">Spécialité</p>
        <div className="bg-white rounded-3xl lg:rounded-l-3xl lg:rounded-r-none p-5 flex items-center justify-between gap-2 mt-2">
          <p className="font-medium text-nowrap overflow-x-hidden">
            Medecin généraliste
          </p>
          <Image src={ArrowDownIcon} alt="Icon" />
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-sm">Nom</p>
        <input
          type="text"
          className="bg-white rounded-3xl lg:rounded-none p-5 w-full outline-0 mt-2"
          placeholder="Search..."
        />
      </div>
      <div>
        <p className="text-gray-500 text-sm">Localisation</p>
        <div className="bg-white rounded-3xl lg:rounded-none p-5 mt-2">
          <p className="font-medium">75019 Paris</p>
        </div>
      </div>
      <Button
        name="Recherchez"
        className="rounded-3xl lg:rounded-r-3xl lg:rounded-l-none w-full lg:w-40"
      />
    </div>
  );
};

export default Search;

import Header from "@/app/components/common/header";
import Switch from "@/app/components/common/headlessui/Switch";
import Doctors from "@/app/components/doctors";
import Map from "@/app/components/map";
import Search from "@/app/components/search";

const page = () => {
  return (
    <>
      <Header />
      <div className="mycontainer flex flex-wrap xl:flex-nowrap gap-8">
        <div className="my-14 bg-[#F4F6F9] rounded-3xl p-5 sm:p-10 w-full xl:w-8/12 overflow-y-auto schedule">
          <Search />
          <Doctors />
        </div>
        <div className="w-full xl:w-4/12 min-h-96 sticky top-0 h-screen py-14">
          <div className="absolute top-20 right-5 z-10 bg-white flex items-center gap-6 py-1.5 px-3 rounded-xl shadow-xl">
            <p className="font-medium">Afficher la carte</p>
            <Switch />
          </div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default page;

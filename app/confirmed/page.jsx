import MapAccess from "@/app/components/appointment/MapAccess";
import Overview from "@/app/components/appointment/Overview";
import Profile from "@/app/components/appointment/Profile";
import Header from "@/app/components/common/header";
import BgLayer from "@/app/components/common/others/BgLayer";
import Link from "next/link";

const SchedulePage = () => {
  return (
    <BgLayer>
      <Header />
      <div className="mycontainer my-14">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-9">
          <Overview />
          <MapAccess />
          <Profile />
        </div>
        <div className="flex items-center justify-center gap-5 mt-9">
          <Link href={"/schedule"}>
            <button className="btn bg-white text-black font-medium">
              Retour
            </button>
          </Link>
          <button className="btn">Confirmer le rendez-vous</button>
        </div>
      </div>
    </BgLayer>
  );
};

export default SchedulePage;

import BottomButton from "@/app/components/common/bottomButton";
import Header from "@/app/components/common/header";
import BgLayer from "@/app/components/common/others/BgLayer";
import MapAccess from "@/app/components/confirmed/MapAccess";
import Overview from "@/app/components/confirmed/Overview";
import Profile from "@/app/components/confirmed/Profile";

const SchedulePage = () => {
  return (
    <BgLayer>
      <Header />
      <div className="mycontainer my-14">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-9">
          <Overview />
          <MapAccess />
          <Profile confirmedBis />
        </div>
        <BottomButton />
      </div>
    </BgLayer>
  );
};

export default SchedulePage;

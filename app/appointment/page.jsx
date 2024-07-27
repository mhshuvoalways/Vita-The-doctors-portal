import Header from "@/app/components/common/header";
import List from "../components/appointment/myAppointment/List";
import Tab from "../components/appointment/myAppointment/Tab";

const AppointmentPage = () => {
  return (
    <>
      <Header />
      <div className="mycontainer my-14 flex justify-between">
        <div className="bg-[#F4F6F9] py-2 px-4 rounded-2xl">
          <div className="bg-white rounded-2xl">
            <div className="px-3 pt-2 text-center">
              <p className="text-[#098AD3] font-semibold text-lg">
                Mes Rendez-vous
              </p>
              <Tab />
            </div>
            <div className="mt-10">
              <List isActive />
              <List />
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;

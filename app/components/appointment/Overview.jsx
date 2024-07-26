import Doctor from "@/public/images/doctor1.png";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="w-full lg:w-3/12 bg-white rounded-lg px-5 py-6 text-center">
      <p>Récapitulatif du rendez-vous</p>
      <div className="mt-8">
        <Image src={Doctor} alt="" className="mx-auto" />
        <p className="mt-5 text-[#4A9ED6]">Dr Andréa Fargeaon</p>
      </div>
      <div className="relative mt-11">
        <p className="font-medium bg-[#F1F1F1] py-5 px-5 rounded-full">
          Consultation dentaire
        </p>
        <div
          className="bg-white px-2 py-5 inline-block rounded-full absolute -top-4 left-4 text-[#5A99C3]"
          style={{
            boxShadow: `0px 2px 10px 0px #00000040`,
          }}
        >
          <p className="text-lg font-bold">18</p>
          <p className="font-medium">Jan</p>
        </div>
      </div>
      <p className="font-medium text-[#696767] mt-10">
        Votre Rendez-vous est confirmé
      </p>
      <p className="text-[#5A99C3] font-bold text-lg mt-2">18h00</p>
      <div className="text-[#1F1F1F] mt-16">
        <p className="font-semibold">Note du cabinet</p>
        <p className="mt-5">
          Veuillez vous présenter 15 minutes avant le début du rendez-vous,
          n’oubliez pas d’apporter votre carte vital et carte mutuelle. en cas
          d’impossibilité merci d’avertir 48h avant le début du rendez-vous
        </p>
      </div>
    </div>
  );
};

export default Overview;

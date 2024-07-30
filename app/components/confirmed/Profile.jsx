import PieChart from "@/app/components/charts/PieChart";
import Progress from "@/app/components/confirmed/Progress";
import Doctor1 from "@/public/images/doctor1.png";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ confirmedBis }) => {
  return (
    <div className="w-full lg:w-[30%] flex flex-wrap sm:flex-nowrap gap-4 lg:block lg:space-y-4">
      <div className="w-full bg-white rounded-lg px-5 py-6">
        <p className="text-lg font-medium text-center">RDV pris pour...</p>
        <div className="flex items-center gap-2 xl:gap-[30px] mt-8">
          <Image
            src={Doctor1}
            alt=""
            className="border-2 border-[#76C1F3] rounded-full size-[60px]"
          />
          <div className="w-full">
            <p className="text-[#4A9ED6] font-medium">Amelie Durand</p>
            <p className="text-[#757575] text-sm">23 octobre 1971</p>
            <div>
              <Progress percentage={90} />
              <p className="text-xs text-[#8B8B8B] ml-5">Indice de fiabilité</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn mt-7">Changer de profil</button>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg">
        {confirmedBis ? (
          <div className="px-5 py-6">
            <p className="text-center text-lg font-medium">Honoraires</p>
            <p className="text-[#1F1F1F] mt-4 text-center">
              Les honoraires ne sont pas affichés pour ce rendez vous, il est
              possible que la tarification varie en fonction de votre couverture
              social. Veuillez vous rapprocher de votre praticien pour plus de
              détail.
            </p>
          </div>
        ) : (
          <div>
            <div className="px-5 py-6">
              <p className="text-center text-lg font-medium">Honoraires</p>
              <p className="text-center font-bold text-[#5A99C3]">108 €</p>
            </div>
            <div className="bg-[#F9F9F9] py-5 px-4 flex items-center justify-between font-medium">
              <p>Consultation spécialisée</p>
              <p className="text-[#5A99C3] font-bold">108 €</p>
            </div>
            <Link href={"/confirmedbis"}>
              <PieChart />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

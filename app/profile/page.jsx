import Header from "@/app/components/common/header";
import CheckIcon from "@/public/icons/check.svg";
import EditIcon from "@/public/icons/edit.svg";
import PlusIcon from "@/public/icons/plus.svg";
import TelePhoneIcon from "@/public/icons/telephone.svg";
import Doctor from "@/public/images/doctor1.png";
import Image from "next/image";

const AppointmentPage = () => {
  return (
    <>
      <Header />
      <div className="mycontainer my-14">
        <p className="w-full lg:w-4/12 text-center text-[#098AD3] font-semibold text-xl">
          Mon profil
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-between mt-6">
          <div className="w-full lg:w-[30%] h-full bg-[#F4F6F9] p-4 rounded-2xl">
            <div className="bg-white rounded-t-2xl px-4 py-8 shadow-sm">
              <div className="text-center">
                <Image src={Doctor} alt="" className="mx-auto" />
                <p className="font-semibold mt-3">Amelie Formiere</p>
                <p className="text-sm">26/02/1972</p>
              </div>
              <div className="flex items-center justify-between mt-10 flex-wrap gap-1">
                <div className="flex items-center gap-1">
                  <Image src={TelePhoneIcon} alt="" />
                  <p className="font-medium text-xs">0765817097</p>
                </div>
                <p className="text-[#3884B6] bg-[#76C1F34A] px-3 py-0.5 text-xs rounded-full">
                  Vérifié
                </p>
              </div>
              <div className="flex items-center justify-between mt-3 flex-wrap gap-1">
                <div className="flex items-center gap-1">
                  <p className="font-medium text-xs text-[#098AD3]">@</p>
                  <p className="font-medium text-xs">
                    amlelie-fourneire@gmail.com
                  </p>
                </div>
                <p className="text-[#A68203] bg-[#F6C71D42] px-3 py-0.5 text-xs rounded-full">
                  Non vérifié
                </p>
              </div>
            </div>
            <div className="bg-white px-4 py-8 mt-1.5 shadow-sm">
              <p className="font-medium text-center">Sécurité</p>
              <div className="flex items-center justify-between gap-1 mt-4 flex-wrap">
                <p className="text-sm">Mot de passe</p>
                <p className="text-sm bg-[#F4F4F4] px-2 rounded-full">
                  *******************
                </p>
                <Image src={EditIcon} alt="" className="cursor-pointer" />
              </div>
            </div>
            <div className="bg-white px-4 py-8 mt-1.5 rounded-b-2xl shadow-sm">
              <p className="font-medium text-center">Couverture sociale</p>
              <div className="flex items-center justify-between gap-1 mt-4 flex-wrap">
                <p className="text-sm">
                  Numéro de <br /> sécurité social
                </p>
                <p className="text-sm bg-[#F4F4F4] px-2 rounded-full text-[#4A9ED6]">
                  193 48948930329 89
                </p>
                <Image src={EditIcon} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] h-full">
            <div className="bg-[#F4F6F9] p-4 rounded-2xl">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <p className="font-semibold text-center">Famille</p>
                <div className="flex flex-wrap gap-9 text-center mt-4">
                  <div>
                    <Image
                      src={Doctor}
                      alt=""
                      className="border-2 border-[#76C1F3] rounded-full size-14 mx-auto"
                    />
                    <p className="mt-1">Amelie</p>
                  </div>
                  <div>
                    <Image
                      src={Doctor}
                      alt=""
                      className="border-2 border-[#76C1F3] rounded-full size-14 mx-auto"
                    />
                    <p className="mt-1">Amelie</p>
                  </div>
                  <div>
                    <Image src={PlusIcon} alt="" className="size-14 mx-auto" />
                    <p className="mt-1 w-40">Ajouter un nouveau membre</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F4F6F9] p-4 rounded-2xl mt-5">
              <div className="bg-white rounded-t-2xl px-4 py-8 shadow-sm">
                <p className="font-semibold text-center">
                  Couverture complementaire
                </p>
                <div className="flex items-center justify-between gap-2 mt-8">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-4">
                    <p className="size-[18px] bg-[#ECF0F6] rounded"></p>
                    <p className="font-medium">Aucun</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={CheckIcon}
                      alt=""
                      className="profile-check size-[18px] rounded p-1"
                    />
                    <p className="font-medium">Mutuelle</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="size-[18px] bg-[#ECF0F6] rounded"></p>
                    <p className="font-medium">CMU</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="size-[18px] bg-[#ECF0F6] rounded"></p>
                    <p className="font-medium">AME</p>
                  </div>
                </div>
                <div className="flex justify-between gap-2 mt-9">
                  <p className="font-medium">Nom de la mutuelle</p>
                  <p className="bg-[#F4F4F4] px-2 rounded-full text-[#4A9ED6]">
                    Harmonie mutuelle
                  </p>
                  <Image src={EditIcon} alt="" className="cursor-pointer" />
                </div>
              </div>
              <div className="bg-white rounded-b-2xl p-4 shadow-sm mt-1.5">
                <p className="font-medium text-center">Documents</p>
                <div className="flex items-center justify-between mt-8">
                  <p className="font-medium">Carte mutuelle</p>
                  <p className="bg-[#F4F4F4] px-4 rounded-full text-[#4A9ED6] inline-block">
                    Ajouter un document
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="font-medium">Tableau de garantie</p>
                  <p className="bg-[#F4F4F4] px-4 rounded-full text-[#4A9ED6] inline-block">
                    Ajouter un document
                  </p>
                </div>
                <p className="text-[#6C6C6C] font-medium mt-9 text-sm text-center">
                  Ces informations sont utilisé par les praticiens que vous
                  consultez pour réaliser des devis et le tiers payant. ces
                  informations chiffrées seront transmises uniquement avec vos
                  praticiens.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[30%] h-full">
            <div className="bg-[#F4F6F9] p-4 rounded-2xl">
              <div className="bg-white rounded-t-2xl px-4 py-8 shadow-sm">
                <p className="font-semibold text-center">Mes praticiens</p>
                <p className="text-xs text-center text-[#4A9ED6]">(3)</p>
                <div className="flex items-center justify-between gap-2 flex-wrap mt-8">
                  <Image src={Doctor} alt="" />
                  <div>
                    <p className="text-[#309FE7] font-semibold">
                      Dr Johanna Feyrouz
                    </p>
                    <p className="text-[#525252] text-sm font-medium">
                      Chirurgien-dentiste
                    </p>
                    <p className="btn py-0 px-6 text-nowrap mt-1 text-sm">
                      Prendre Rendez-vous
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-[#F4F4F4] p-2 rounded-lg size-8 cursor-pointer">
                      <Image src={TelePhoneIcon} alt="" />
                    </div>
                    <p className="bg-[#F4F4F4] p-2 rounded-lg text-[#098AD3] size-8 flex items-center justify-center cursor-pointer">
                      @
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-b-2xl px-4 py-8 shadow-sm mt-1.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Image src={Doctor} alt="" />
                  <div>
                    <p className="text-[#309FE7] font-semibold">
                      Dr Johanna Feyrouz
                    </p>
                    <p className="text-[#525252] text-sm font-medium">
                      Chirurgien-dentiste
                    </p>
                    <p className="btn py-0 px-6 text-nowrap mt-1 text-sm">
                      Prendre Rendez-vous
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-[#F4F4F4] p-2 rounded-lg size-8 cursor-pointer">
                      <Image src={TelePhoneIcon} alt="" />
                    </div>
                    <p className="bg-[#F4F4F4] p-2 rounded-lg text-[#098AD3] size-8 flex items-center justify-center cursor-pointer">
                      @
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F4F6F9] p-4 rounded-2xl mt-5">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <p className="font-semibold text-center">
                  Parametre de confidentialité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;

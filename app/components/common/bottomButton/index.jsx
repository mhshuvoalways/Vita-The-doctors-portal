import Link from "next/link";

const index = () => {
  return (
    <div className="flex items-center justify-center gap-5 mt-9">
      <Link href={"/schedule"}>
        <button className="btn bg-white text-black font-medium">Retour</button>
      </Link>
      <Link href={"/appointment"}>
        <button className="btn">Confirmer le rendez-vous</button>
      </Link>
    </div>
  );
};

export default index;

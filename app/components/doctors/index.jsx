import Item from "./Item";

const Doctors = () => {
  return (
    <div className="mt-11">
      <div className="flex items-center gap-1">
        <p className="text-[#4A9ED6] font-semibold text-xl">Medecins</p>
        <p className="text-gray-600 text-sm">(25 Resultats)</p>
      </div>
      <div className="mt-3 space-y-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Doctors;

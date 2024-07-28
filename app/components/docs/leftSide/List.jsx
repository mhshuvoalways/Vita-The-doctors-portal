const List = ({ isActive }) => {
  return (
    <div
      className={`px-3 py-2 border-t-2 ${
        isActive ? "bg-[#F0F8FD]" : "bg-white"
      }`}
    >
      <div className="text-center">
        <p className="bg-[#EBEBEB] text-[#5A99C3] rounded-full text-sm px-2 inline-block">
          20 Juin 2023
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 py-5">
        <div className="flex items-center gap-5">
          <p className="bg-[#ECEDBA] h-9 w-1 rounded-full"></p>
          <div>
            <p className="text-[#3A3A3A] font-medium">Devis dentaire</p>
            <p className="text-[#5A99C3] text-xs">Chirurgien dentiste</p>
          </div>
        </div>
        <div className="text-end space-y-3">
          <p className="btn py-0 px-2 text-sm inline-block">Non lue</p>
          <p>Dr Robert Drake</p>
        </div>
      </div>
    </div>
  );
};

export default List;

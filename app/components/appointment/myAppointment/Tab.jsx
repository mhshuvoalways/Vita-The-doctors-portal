const Tab = () => {
  return (
    <div className="bg-[#E3F4FF] p-1 inline-flex items-center justify-center rounded-full mt-8">
      <p className="bg-white py-2 px-3 rounded-full shadow-lg font-semibold text-[#1993E4] cursor-pointer">
        RDV à venir
      </p>
      <p className="text-[#747474] font-medium cursor-pointer px-3">
        RDV passés
      </p>
    </div>
  );
};

export default Tab;

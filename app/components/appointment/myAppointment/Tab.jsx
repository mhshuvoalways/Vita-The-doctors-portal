const Tab = ({ items, selected, setSelected }) => {
  return (
    <div className="bg-[#E3F4FF] p-1 inline-flex items-center justify-center rounded-full mt-8">
      {items.map((el) => (
        <p
          key={el}
          className={`cursor-pointer rounded-full  py-2 px-3 ${
            el === selected
              ? "bg-white shadow-lg font-semibold text-[#1993E4]"
              : "bg-[#E3F4FF] text-[#747474]"
          }`}
          onClick={() => setSelected(el)}
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default Tab;

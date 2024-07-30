import Image from "next/image";

const List = ({ item, selectedItem, setSelectedItem }) => {
  return (
    <div
      className={`cursor-pointer ${
        item.id === selectedItem.id && "bg-[#76C1F31A] shadow"
      }`}
      onClick={() => setSelectedItem(item)}
    >
      <div className="flex items-center gap-2 px-3 py-5 border-t border-gray-100">
        <Image src={item.doctorImg} alt="" />
        <div>
          <p className="text-[#3F3F3F] font-semibold">{item.doctorName}</p>
          <p className="text-[#1993E4] font-medium text-sm mt-1">
            {item.jobTitle}
          </p>
          <p className="text-[#909090] mt-1.5">{item.address}</p>
          <p className="text-[#5A99C3] bg-white py-1 px-4 rounded-full inline-block mt-1.5">
            {item.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;

const List = ({ item, hoverItem, hoverHandler }) => {
  const isHover = item.id === hoverItem.id;

  return (
    <div
      className={`relative shadow-md py-4 px-3 rounded-xl h-28 text-center cursor-pointer font-semibold w-full sm:w-40 ${
        isHover ? "bg-[#6EB9F8]" : ""
      }`}
      onMouseOver={() => hoverHandler(item)}
    >
      <p
        className={`flex items-center justify-center ${
          isHover ? "!text-white" : ""
        }`}
        style={{
          color: item.titleColor,
        }}
      >
        {item.title}
      </p>
      {isHover && (
        <p className="border rounded-full absolute bottom-3 left-0 right-0 w-11/12 sm:w-6/12 mx-auto"></p>
      )}
    </div>
  );
};

export default List;

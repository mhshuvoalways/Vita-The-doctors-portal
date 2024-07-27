const Progress = ({ color }) => {
  return (
    <div>
      <p className="text-start sm:text-center text-xs">securité social</p>
      <div className="flex items-center gap-[6px]">
        <p
          style={{
            color: color,
          }}
          className="text-sm font-semibold text-nowrap"
        >
          9,20 €
        </p>
        <div className="bg-[#EDEDED] relative rounded-full w-full h-2">
          <p
            className="absolute inset-0 rounded-full"
            style={{
              background: color,
              width: "20%",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Progress;

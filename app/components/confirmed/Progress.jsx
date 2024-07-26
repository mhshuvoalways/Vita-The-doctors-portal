const Progress = ({ percentage }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#EDEDED] relative rounded-full w-full h-1">
        <p
          className="absolute inset-0 rounded-full confirmed-progressbar"
          style={{
            width: `${percentage}%`,
          }}
        ></p>
      </div>
      <p className="font-medium text-[#309FE7]">{percentage}%</p>
    </div>
  );
};

export default Progress;

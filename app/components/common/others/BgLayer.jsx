const bgLayer = ({ children }) => {
  return (
    <div className="relative">
      <div className="confirmed fixed inset-0 bg-cover"></div>
      <div className="confirmed-layer opacity-40 fixed inset-0"></div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default bgLayer;

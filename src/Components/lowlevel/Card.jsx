const Card = ({ children }) => {
  return (
    <div className="rounded-2xl p-6 bg-[#262626] hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
      {children}
    </div>
  );
};

export default Card;

const Card = ({ children }) => {
  return (
    <div className="rounded-xl p-6 bg-[#262626] hover:bg-[#313030] transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
      {children}
    </div>
  );
};

export default Card;

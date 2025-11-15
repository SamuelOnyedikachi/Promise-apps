const Btn = ({ content, customStyle }) => {
  return (
    <button
      className={`bg-primary hover:bg-[#b88a1a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${customStyle}`}
    >
      {content}
    </button>
  );
};

export default Btn;

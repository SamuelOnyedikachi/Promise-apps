const GridCards = ({ children, lgCol }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-${lgCol} gap-6 my-8`}
    >
      {children}
    </div>
  );
};

export default GridCards;

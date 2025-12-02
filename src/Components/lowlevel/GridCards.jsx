const GridCards = ({ children, lgCol }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-${lgCol} gap-8 my-8`}
    >
      {children}
    </div>
  );
};

export default GridCards;

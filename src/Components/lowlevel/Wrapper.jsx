const Wrapper = ({ children, customStyle }) => {
  return (
    <section className={`py-16 lg:py-24 ${customStyle}`}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Wrapper;

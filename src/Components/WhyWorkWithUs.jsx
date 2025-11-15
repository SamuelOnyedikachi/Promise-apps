import Btn from "./lowlevel/Btn";
import Wrapper from "./lowlevel/Wrapper";

const WhyWorkWithUs = () => {
  return (
    <Wrapper customStyle="bg-[#181818]  border-b border-gray-600">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
        <span className="text-primary">Why</span> Work With Us
      </h1>
      <p className="my-8  m-auto  text-amber-50 text-lg sm:text-xl leading-relaxed text-center font-light">
        At Get Result Agency, we don’t just run campaigns — we build growth
        engines. Our team blends creativity with data-driven precision to
        deliver marketing strategies that actually move the needle. Whether
        you're a startup or scaling brand, we tailor every solution to your
        unique goals. We focus on real results, not vanity metrics — because
        your success is our success. Let’s build something impactful,
        measurable, and built to grow.
      </p>
      <Btn content="Work With Us" customStyle="m-auto block" />
    </Wrapper>
  );
};

export default WhyWorkWithUs;

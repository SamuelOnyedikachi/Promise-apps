import Card from "./lowlevel/Card";
import GridCards from "./lowlevel/GridCards";
import Wrapper from "./lowlevel/Wrapper";

const ClientTestimonials = () => {
  const clients = [
    {
      name: "Ola Akintunde",
      title: "Premium Microfinance Bank ",
      description:
        "Top Notch service. You spot the problem and provide quality service at a very good price rate. With the result you have given us I don’t think we can stop using your services.",
    },
    {
      name: "Blessing Nwafor",
      title: "The She Initiative",
      description:
        "A marketing company that really knows what they are doing. They are responsible for re-branding all of our documents, business cards and social media.",
    },
    {
      name: "Ola Akintunde",
      title: "Premium Microfinance Bank ",
      description:
        "Top Notch service. You spot the problem and provide quality service at a very good price rate. With the result you have given us I don’t think we can stop using your services.",
    },
  ];
  return (
    <Wrapper customStyle="bg-[#181818] border-b border-gray-600">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
        Clients <span className="text-primary">Testimonials</span>
      </h1>
      <p className="text-amber-50 text-md md:text-lg leading-relaxed text-center font-md w-[80%] m-auto ">
        Our clients have seen firsthand how Get Result Agency delivers on its
        promise. Here’s the review of those who’ve experienced transformative
        results.
      </p>

      <GridCards lgCol="3">
        {clients.map((client, index) => (
          <Card key={index}>
            <h2 className="text-center text-primary text-2xl font-semibold leading-tight mb-2">
              {client.name}
            </h2>
            <h3 className="text-center font-semibold text-gray-300">
              {client.title}
            </h3>
            <p className="text-center mt-5 text-gray-300">
              {client.description}
            </p>
          </Card>
        ))}
      </GridCards>
    </Wrapper>
  );
};

export default ClientTestimonials;

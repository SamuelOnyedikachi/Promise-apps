import Wrapper from "./lowlevel/Wrapper";
import Logo from "../assets/logo.png";
import { Navigate } from "react-router-dom";
import { Mail, Phone, PhoneCall, PhoneCallIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const handleClick = () => Navigate("/");
  const services = [
    {
      label: "Paid Ads (PPC)",
      path: "",
    },
    {
      label: "Social Media Management",
      path: "",
    },
    {
      label: "SEO Services",
      path: "",
    },
    {
      label: "Digital Marketing",
      path: "",
    },
    {
      label: "Video Production & Content Creation",
      path: "",
    },
    {
      label: "Copywriting",
      path: "",
    },
    {
      label: "Web Design",
      path: "",
    },
  ];
  const company = [
    {
      label: "About Us",
      path: "",
    },
    {
      label: "Portfolio",
      path: "",
    },
    {
      label: "Blogs",
      path: "",
    },
    {
      label: "Contact",
      path: "",
    },
  ];
  return (
    <Wrapper customStyle="bg-[#181818]">
      <div className="grid xl:grid-cols-[2fr_2fr_1fr] border-b border-white py-8 mb-8">
        <div className="xl:border-r xl:border-r-white xl:flex xl:flex-col">
          <div className="flex-1 flex items-center">
            <img
              src={Logo}
              onClick={handleClick}
              alt="Get Result Agency Logo"
              className="h-12 sm:h-14 md:h-16 cursor-pointer transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-2 flex flex-col justify-between ">
            <p className="text-left w-[80%]">
              We are a results-driven digital marketing firm helping brands grow
              through bold strategy, creativity, and performance.
            </p>
            <div>
              <p className="flex items-center gap-3 mb-4">
                {" "}
                <PhoneIcon size={20} /> +234 9044993939
              </p>
              <p className="flex items-center gap-3">
                {" "}
                <Mail size={20} /> info@getresultagency.com.ng
              </p>
            </div>
          </div>
        </div>
        <div className="xl:border-r xl:border-white pl-5">
          <h3 className="text-primary mb-5 font-[500] text-lg">Services</h3>
          {services.map((link, index) => (
            <a href={link.path} key={index} className="block mb-3 font-[500]">
              {link.label}
            </a>
          ))}
        </div>
        <div className="pl-5">
          <h3 className="text-primary mb-5 font-[500] text-lg">Company</h3>
          {company.map((link, index) => (
            <a href={link.path} key={index} className="block mb-3 font-[500]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center w-fit m-auto text-sm ">
        <span className="block">PRIVACY POLICY | SITE MAP</span>
        <span className="block">
          Copyright © {new Date().getFullYear()} GET RESULT AGENCY. All rights
          reserved.
        </span>
      </p>
    </Wrapper>
  );
};

export default Footer;

import React from "react";
import First from "./firstimg.png";
import SecondImg from "../../assets/image 4.png";
import { useNavigate } from "react-router-dom";
import Vector from "../../assets/Vector.png";
import Vector01 from "../../assets/Vector 01.png";
import Vector02 from "../../assets/Vector 02.png";
import Vector03 from "../../assets/Vector 03.png";
import Vector04 from "../../assets/Vector 04.png";
import Vector05 from "../../assets/Vector 05.png";
import Vector06 from "../../assets/Vector 06.png";
import Trends from "../../assets/trend06.png";
import ClientTestimonials from "../../Components/ClientTestimonials";
import WhyWorkWithUs from "../../Components/WhyWorkWithUs";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const Click = () => navigate("/Login");

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[100vh] bg-[url('/src/assets/firstbg.png')] bg-cover bg-center flex items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[#DAA71F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-6">
                Turn Clicks into Clients Let's Grow Your Brand Together.
              </h1>
              <h2 className="text-white/80 text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed mb-8 font-light">
                At Get Result Agency, we specialize in transforming online
                traffic into loyal customers through data-driven digital
                strategies and bold creative execution.
              </h2>
              <div className="flex justify-center lg:justify-start">
                <button
                  className="bg-[#DAA71F] hover:bg-[#b88a1a] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={Click}
                >
                  Let's Get Started
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/5 relative flex justify-center">
              <div className="border-2 border-[#daa81ff3] rounded-2xl w-[65%] max-w-md lg:max-w-lg xl:max-w-xl aspect-square bg-black/40 backdrop-blur-sm"></div>
              <div className="absolute top-11/26 left-4/7 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                <img
                  src={First}
                  alt="Digital Marketing Solutions"
                  className="w h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 border-b border-gray-600 bg-[#0e0e0e]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            Who <span className="text-[#DAA71F]">We</span> Are
          </h1>
          <div className="space-y-8">
            <p className="text-amber-50 text-lg sm:text-xl leading-relaxed text-center font-light">
              We're not just another digital marketing firm — we're your growth
              partners. Our mission is simple: to turn your online presence into
              real-world results. With a bold mix of data-driven strategies,
              creative storytelling, and performance marketing, we help brands
              cut through the noise, connect with their audience, and scale with
              confidence.
            </p>
            <p className="text-amber-50 text-lg sm:text-xl leading-relaxed text-center font-light">
              From social media campaigns and SEO to paid ads and content
              strategy, we bring passion, precision, and purpose to everything
              we do. Whether you're a startup or an established brand, we're
              here to ignite your growth and deliver the results your business
              deserves.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="bg-[#DAA71F] hover:bg-[#b88a1a] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={Click}
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16 lg:py-24 bg-[#160303]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            What <span className="text-[#DAA71F]">We</span> Do
          </h1>

          {/* First Row of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Vector,
                title: "Paid Ads (PPC)",
                description:
                  "Drive instant traffic and sales with laser-targeted ad campaigns.",
              },
              {
                icon: Vector01,
                title: "Social Media Management",
                description:
                  "Turn followers into loyal fans with content that connects and converts.",
              },
              {
                icon: Vector02,
                title: "SEO Services",
                description:
                  "Boost your search rankings and get found by the right people, faster.",
              },
              {
                icon: Vector03,
                title: "Video Production & Content Creation",
                description:
                  "Captivate your audience with powerful visuals and scroll-stopping content",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 bg-[#262626] hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-[#DAA71F] text-center mb-4 leading-tight">
                  {service.title}
                </h2>
                <h3 className="text-sm text-gray-300 text-center leading-relaxed">
                  {service.description}
                </h3>
              </div>
            ))}
          </div>

          {/* Second Row of Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Vector04,
                title: "Digital Marketing",
                description:
                  "We blend data and creativity to fuel your brand's digital growth.",
              },
              {
                icon: Vector05,
                title: "Copywriting",
                description:
                  "Crafting words that spark interest, build trust, and drive action.",
              },
              {
                icon: Vector06,
                title: "Web Design",
                description:
                  "Build sleek, responsive websites that wow visitors and win customers.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 bg-[#262626] hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-[#DAA71F] text-center mb-4">
                  {service.title}
                </h2>
                <h3 className="text-sm text-gray-300 text-center leading-relaxed">
                  {service.description}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[70vh] bg-[url('/src/assets/bgback.png')] bg-cover bg-center">
        <div className="min-h-[70vh] bg-[rgba(124,17,25,0.81)] w-full flex items-center py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                  Launch Your Next Big Win Today!
                </h1>
                <h2 className="font-medium text-xl sm:text-2xl text-white/80 leading-relaxed mb-8">
                  From strategy to success, Get Result Agency is built to move
                  your brand forward fast.
                </h2>
                <div className="flex justify-center lg:justify-start">
                  <button
                    className="bg-[#DAA71F] hover:bg-[#b88a1a] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={Click}
                  >
                    Let's Get Started
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-2/5 flex justify-center">
                <img
                  src={SecondImg}
                  alt="Success Strategy"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain transform transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-16">
            Top Trends
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={Trends}
                    alt="Marketing Trends"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-semibold text-lg text-black mb-3 leading-tight">
                    How Professional Services Firms Can Use Podcasts To Connect
                    With Leads
                  </h2>
                  <h3 className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Many professional services firms do not have a marketing
                    department or team.
                  </h3>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <h5 className="text-gray-500 text-xs font-medium">
                      November, 2025
                    </h5>
                    <button className="text-red-600 hover:text-red-700 text-xs font-semibold transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful brands that trust us to drive their
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAA71F]"
            />
            <button className="bg-[#DAA71F] hover:bg-[#b88a1a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <ClientTestimonials />
      <WhyWorkWithUs />
      <Footer />
    </>
  );
};

export default Dashboard;

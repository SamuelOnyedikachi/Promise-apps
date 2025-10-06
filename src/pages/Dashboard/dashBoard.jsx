import React from 'react';
import First from '../../assets/firstimg.png';
import SecondImg from '../../assets/image 4.png';
import { useNavigate } from 'react-router-dom';
import Vector from '../../assets/Vector.png';
import Vector01 from '../../assets/Vector 01.png';
import Vector02 from '../../assets/Vector 02.png';
import Vector03 from '../../assets/Vector 03.png';
import Vector04 from '../../assets/Vector 04.png';
import Vector05 from '../../assets/Vector 05.png';
import Vector06 from '../../assets/Vector 06.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const Click = () => navigate('/Login');
  return (
    <>
      <section className="h-[70vh] bg-[url('/src/assets/firstbg.png')] bg-cover bg-center grid items-center  px-50 pb-[10%]">
        <div className="flex flex-col md:flex-row items-center justify-between max-h-1 pt-55">
          <div className="font-medium text-left w-[50%]">
            <h1 className="text-[#DAA71F] text-xl sm:text-2xl md:text-4xl lg:text-[40px]">
              Turn Clicks into Clients <br />
              Let’s Grow Your Brand Together.
            </h1>

            <h2 className="my-8 w-[90%] font-normal text-xl lg:text-[20px] sm:text-base text-white/50">
              At Get Result Agency, we specialize in transforming online traffic
              into loyal customers through data-driven digital strategies and
              bold creative execution.
            </h2>

            <div className="text-center md:text-left pt-10 rel">
              <button
                className="bg-[#DAA71F] w-60 text-white px-6 py-3 rounded-md text-[16px] font-medium hover:bg-[#a30b0b]  hover:text-white transition"
                onClick={Click}
              >
                Lets Get Started
              </button>
            </div>
          </div>

          {/* Image + Border Section */}
          <div className="">
            <div className="border border-[#daa81ff3] shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.4)] rounded-[20px] md:w-[320px] md:h-[335px] "></div>
            <div className="absolute top-[15.8%] right-[8.3%]">
              <img
                src={First}
                alt="welcome"
                className="w-[100%] md:w-[60%] lg:w-[100%]  object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-30 border-b border-gray-400 text-center bg-[#0e0e0eaf] bg-cover bg-center grid items-center  px-50">
        <h1 className="text-[32px] font-bold">
          Who <span className="text-[#DAA71F]">We</span> Are
        </h1>
        <p className="text-center text-amber-50 flex-1 py-10 text-[20px]">
          We’re not just another digital marketing firm — we’re your growth
          partners. Our mission is simple: to turn your online presence into
          real-world results. With a bold mix of data-driven strategies,
          creative storytelling, and performance marketing, we help brands cut
          through the noise, connect with their audience, and scale with
          confidence.
        </p>
        <p className="text-center pb-7 text-amber-50 flex-1 text-[20px]">
          From social media campaigns and SEO to paid ads and content strategy,
          we bring passion, precision, and purpose to everything we do. Whether
          you’re a startup or an established brand, we’re here to ignite your
          growth and deliver the results your business deserves.
        </p>

        <div className="text-center flex justify-center pt-10 md:text-left">
          <button
            className="bg-[#DAA71F] w-60 text-white px-6 py-3 rounded-md text-[16px] font-medium hover:bg-[#a30b0b]  hover:text-white transition"
            onClick={Click}
          >
            Lets Get Started
          </button>
        </div>
      </section>

      <section className="py-30 text-center bg-[#1603035e] bg-cover bg-center grid items-center px-50">
        <h1 className="text-[32px] font-bold">
          What <span className="text-[#DAA71F]">We</span> Are
        </h1>
        <div className="my-15 gap-10 grid justify-center items-center">
          <div className="grid-cols-4 gap-15 grid justify-center items-center">
            {/* first card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[18px] text-[#DAA71F]">Paid Ads (PPC)</h2>
              <h3 className="py-4 text-[14px]">
                Drive instant traffic and sales with laser-targeted ad
                campaigns.
              </h3>
            </div>

            {/* second card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector01} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[15.8px] text-[#DAA71F]">
                Social Media Management
              </h2>
              <h3 className="py-4 text-[14px]">
                Turn followers into loyal fans with content that connects and
                converts.
              </h3>
            </div>

            {/* third card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector02} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[18px] text-[#DAA71F]">SEO Services</h2>
              <h3 className="py-4 text-[14px]">
                Boost your search rankings and get found by the right people,
                faster.
              </h3>
            </div>

            {/* four card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector03} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[15px] text-[#DAA71F]">
                Video Production & Content Creation
              </h2>
              <h3 className="py-3 text-[13px]">
                Captivate your audience with powerful visuals and
                scroll-stopping content
              </h3>
            </div>
          </div>
          <div className="flex justify-center max-w-[70%] item-center mx-auto gap-10">
            {/* fifth card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector04} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[18px] text-[#DAA71F]">Digital Marketing</h2>
              <h3 className="py-3 text-[13px]">
                We blend data and creativity to fuel your brand’s digital
                growth.
              </h3>
            </div>

            {/* sixth card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector05} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[18px] text-[#DAA71F]">Copywriting</h2>
              <h3 className="py-4 text-[13px]">
                Crafting words that spark interest, build trust, and drive
                action.
              </h3>
            </div>

            {/* seventh card */}
            <div className="rounded-[10px] w-[100%] p-7 bg-[#262626] flex-1 justify-center">
              <img src={Vector06} alt="vector" className="mx-auto py-3" />
              <h2 className="text-[18px] text-[#DAA71F]">Web Design</h2>
              <h3 className="py-4 text-[13px]">
                Build sleek, responsive websites that wow visitors and win
                customers.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[70vh] bg-[url('/src/assets/bgback.png')] bg-cover bg-center">
        <div className="h-[70vh] bg-[rgba(124,17,25,0.81)]  w-full  bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-40">
          {/* Left Section */}
          <div className="w-full text-left">
            <h1 className="font-semibold text-4xl sm:text-4xl md:text-6xl text-white leading-tight pb-4">
              Launch Your Next Big Win Today!
            </h1>
            <h2 className="font-poppins font-medium text-2xl py-3 sm:text-base md:text- text-white/70">
              From strategy to success, Get Result Agency is built to move your
              brand forward fast.
            </h2>
            <div className="mt-6">
              <button
                className="bg-[#DAA71F] text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#a30b0b] hover:text-white transition duration-300"
                onClick={Click}
              >
                Let's Get Started
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={SecondImg}
              alt="welcome"
              className="w-[80%] md:w-[100%] h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <section className="h-[60vh] max-w-6xl mx-auto bg-[#fff] bg-cover bg-center grid py-15 justify-center px-15">
        <h1 className="text-center text-3xl text-[#000] font-bold">
          Top Trends
        </h1>
        {/* Cards trends */}
        <div className="border border-black/20 rounded-lg">
          <img src="" alt="" />
        </div>
      </section>
      <section className="h-[70vh] max-w-6xl mx-auto bg-[url('/src/assets/firstbg.png')] bg-cover bg-center grid items-center justify-center px-15">
        <h1 className="text-center text-2xl font-bold">helloworld</h1>
      </section>
    </>
  );
};

export default Dashboard;

import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  const profileImg =
    "https://res.cloudinary.com/oladipupoademola/image/upload/v1717590372/prof-2_vx0fbt.png";

  return (
    <>
      {/* navbar */}
      <div className="bg-[#00030C] h-[90vh] tablet:h-[60vh] laptop:h-[130vh] ">
        <div className="relative overflow-hidden ">
          <nav className="flex justify-center z-50 bg-transparent p-5">
            {/* Nav menu: always visible, horizontal */}
            <ul className="flex justify-center gap-6 text-[#F9F9F9] text-xl font-semibold mx-[9%]">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </nav>

          {/* section 1 */}
          <div className="flex container mx-[10%] pr-96 laptop:mx-[10%] overflow-hidden">
            <div className="mt-11 tablet:mt-10">
              <div className="tablet:py-5 laptop:py-5">
                <h1 className="text-[#F9F9F9] font-semibold text-3xl tablet:text-6xl laptop:text-8xl ">
                  My name
                </h1>
                <h1 className="text-[#F9F9F9] font-semibold text-3xl tablet:text-6xl laptop:text-8xl laptop:mt-10 ">
                  is DML
                </h1>

                <h2 className="text-[#888888] font-semibold w-[45%] laptop:w-[450px] tablet:w-[85%]">
                  I'm a Software Developer and a passionate UX/UI designer with a
                  focus on creating seamless user experiences
                </h2>
              </div>
              <div className="flex w-96 gap-10 ">
                <div className="animate-bounce relative">
                  <button className="rounded-full text-[#F9F9F9] bg-[#FF5B02] w-32 h-10 mt-20 ">
                    Hire Me
                  </button>
                  <h2 className="text-[#FF5B02] text-lg font-semibold absolute left-14 -top-6">
                    ^
                  </h2>
                  <h2 className="text-[#FF5B02] text-lg font-semibold absolute left-14 -top-3">
                    ^<br />
                  </h2>
                </div>
                <a href="https://drive.google.com/file/d/1xh_fW9GMYylq09ZhO2Ovp_WrbbVsxqPa/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="rounded-full text-[#F9F9F9] bg-transparent border border-solid border-[#F9F9F9] w-32 h-10 mt-20">
                  View CV
                </button></a>
              </div>
              <div className="mt-96"></div>
            </div>

            <div
              className="absolute -top-[20px] -right-[870px] tablet:-top-[50px] tablet:-right-[750px] laptop:-top-[150px] laptop:-right-[500px] laptop:z-50 tablet:z-50 z-40"
            >
              <img
                className="w-[30%] tablet:w-[40%] laptop:w-[70%]"
                src={profileImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

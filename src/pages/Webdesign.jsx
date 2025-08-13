import React from "react";
import Navbar from "../components/Navbar";

const Webdesign = () => {
  const medical =
    "https://res.cloudinary.com/oladipupoademola/image/upload/v1730385489/doctor_port_vhydpz.png";
  const inventory =
    "https://res.cloudinary.com/oladipupoademola/image/upload/v1755034335/inventory_x6vkto.jpg";
  const estate =
    "https://res.cloudinary.com/oladipupoademola/image/upload/v1755034319/restate_cznvsn.jpg";
  const restaurant =
    "https://res.cloudinary.com/oladipupoademola/image/upload/v1755035978/WhatsApp_Image_2025-08-09_at_10.49.37_i461ug.jpg";

  const projects = [
    {
      title: "Medical Appointment Booking System",
      desc: "The website ultimately simplifies the healthcare booking experience by connecting patients to the right doctors, providing timely reminders, and giving healthcare providers the tools to manage their appointments efficiently.",
      img: medical,
      live: "https://a-and-o-frontend.onrender.com/home",
      github: "https://github.com/oladipupoademola/a-and-o-backend",
    },
    {
      title: "Inventory Management System",
      desc: "This platform streamlines inventory operations by providing real-time stock tracking, automated alerts, and comprehensive reporting to enhance business efficiency and reduce waste.",
      img: inventory,
      live: "https://frontend-nine-sepia-37.vercel.app/",
      github: "https://github.com/oladipupoademola/client-smartfood",
    },
    {
      title: "Homify",
      desc: "An intuitive platform that allows property managers to list, manage, and sell properties seamlessly, with advanced search filters and client communication tools.",
      img: estate,
      live: "https://homifyestate.vercel.app/",
      github: "https://github.com/oladipupoademola/homifyestate",
    },
    {
      title: "Smartfood",
      desc: "An online ordering system for restaurants, enabling customers to browse menus, place orders, and track deliveries effortlessly, while helping restaurants manage their operations effectively.",
      img: restaurant,
      live: "https://client-smartfood.vercel.app/",
      github: "https://github.com/oladipupoademola/client-smartfood",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-[#00030C] w-full">
        <div className="container mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse ${
                index % 2 === 0 ? "laptop:flex-row-reverse" : "laptop:flex-row"
              } justify-around items-center gap-10 px-6 tablet:px-10 laptop:px-20 py-16`}
            >
              {/* Text Section */}
              <div className="text-center laptop:text-left">
                <h2 className="text-[#F9F9F9] text-3xl tablet:text-4xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-[#F9F9F9] mt-6 tablet:mt-8 text-lg tablet:text-xl laptop:w-[450px]">
                  {project.desc}
                </p>
                <div className="space-x-5 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-full text-[#F9F9F9] bg-[#FF5B02] w-32 h-10 border border-solid border-white-500">
                      View live
                    </button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-full text-[#F9F9F9] bg-transparent w-32 h-10 border border-solid border-white-500 hover:bg-white hover:text-black">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  className="w-[280px] tablet:w-[320px] laptop:w-[380px] rounded-lg object-contain"
                  src={project.img}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webdesign;

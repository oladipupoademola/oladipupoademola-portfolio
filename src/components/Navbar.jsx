import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const handleProjects = () => {
    navigate("/projects");
  };

  return (
    <div className='bg-[#00030C]'>
      <nav className="flex justify-between items-center -z-50 bg-transparent">
        <ul className="text-[#888888] md:flex justify-around gap-6 p-5 text-2xl">
          <li className="text-[#F9F9F9] font-bold">
            <button onClick={handleHome}>Home</button>
          </li>
          <li>
            <button onClick={handleAbout}>About</button>
          </li>
          <li>
            <button onClick={handleProjects}>Projects</button>
          </li>
        </ul>
        <div className="p-5">
          <button className="text-[#00030C] bg-[#E2E2E4] md:w-32 h-10 rounded-full mr-52">Contact Me</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#00030C] '>

    <nav className=" flex justify-between items-center -z-50 bg-transparent">
        <ul className="text-[#888888] md:flex justify-around gap-6 p-5 text-2xl ">
            <li className="text-[#F9F9F9] font-bold"><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
        </ul>
        <div className="p-5">
        <button className="text-[#00030C]  bg-[#E2E2E4]  md:w-32 h-10 rounded-full mr-52 ">Contact Me</button>
        </div>
    </nav>
    </div>

  )
}

export default Navbar
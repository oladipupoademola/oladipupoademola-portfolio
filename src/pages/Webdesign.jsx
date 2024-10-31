import React from 'react'
import Navbar from '../components/Navbar'

const Webdesign = () => {
    const medical = "https://res.cloudinary.com/oladipupoademola/image/upload/v1730385489/doctor_port_vhydpz.png"
  return (

    <div>
        <Navbar/>
        <div className='bg-[#00030C] h-fit w-full'>
      <div className=" container mx-auto  ">
        
            <div className="mx-[100px] tablet:mx-[0] laptop:mx-[0]  laptop:flex laptop:flex-row-reverse pt-20  laptop:justify-around tablet:flex tablet:flex-row-reverse tablet:justify-around  ">
                <div className='mb-20'>
                   
                    <h2 className="text-[#F9F9F9] mt-20 text-4xl font-semibold ">Medical Appointment Booking System</h2>
                    <p className="text-[#F9F9F9] mt-12  tablet:text-2xl laptop:text-2xl w-[90%] tablet:w-[290px] laptop:w-[450px]">The website ultimately simplifies the healthcare booking experience by connecting patients to the right doctors, providing timely reminders, and giving healthcare providers the tools to manage their appointments efficiently. </p>
                    <div className='space-x-5'>
                        <a href="https://a-and-o-frontend.onrender.com/home">
                    <button className="rounded-full text-[#F9F9F9]  bg-[#FF5B02] w-32 h-10 mt-12 border border-solid border-white-500 ">View live</button>
                    </a>
                    <a href="https://github.com/oladipupoademola/a-and-o-backend">
                    <button className="rounded-full text-[#F9F9F9]  bg-transparent w-32 h-10 mt-12 border border-solid border-white-500 hover:bg-white hover:text-black">GitHub</button>
                    </a>
                    </div>
                </div>
                <div>
                    <img className="w-96 mt-[20px]  laptop:w-96 laptop:mt-24 tablet:w-[300px] tablet:mt-[170px] " src={medical} alt="" />
                </div>
        </div>
        </div>
            

        </div>
        </div>
        
    
  )
}

export default Webdesign
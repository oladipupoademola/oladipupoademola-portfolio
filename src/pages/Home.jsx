import React from 'react'
import { FaBars } from "react-icons/fa6";

const Home = () => {
    const profileImg = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717764637/Group_5_x04dql.png"
  return (
    <>
    
    {/*navbar*/}
    <div className='bg-[#00030C] h-[90vh] tablet:h-[60vh] laptop:h-[130vh] '>

    <div className="relative overflow-hidden ">  
    <nav className=" tablet:flex tablet:justify-start laptop:flex justify-between z-50 bg-transparent">
        <ul className="text-[#888888] tablet:flex tablet:justify-evenly  laptop:flex laptop:justify-around mx-[20px]   gap-6 p-5 text-2xl hidden ">
            <li class="text-[#F9F9F9] font-bold"><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact Me</a></li>
        </ul>
        {/* <div className="p-5 ">
        {/* <button className="text-[#00030C]  bg-[#E2E2E4]  md:w-32 h-10 rounded-full mr-52">Contact Me</button> */}
        {/* </div> */} */

        <div className='bg-gray-50 rounded-full w-[40px] h-[40px] ml-[15px] -z-50 tablet:hidden laptop:hidden'>
            <div className='flex justify-center items-center z-50 '>
        <FaBars className='w-[20px] h-[20px] mt-[10px] ' />
        </div>
        </div>
    </nav>

    {/* section 1 */}
    <div className="flex container mx-[20px] pr-96 laptop:mx-[20px] overflow-hidden">
        <div className="mt-20">
            <div className="tablet:py-5 laptop:py-5">
            <h1 className="text-[#F9F9F9]  font-semibold text-3xl tablet:text-6xl laptop:text-8xl ">My name</h1>
            <h1 className="text-[#F9F9F9]  font-semibold text-3xl tablet:text-6xl laptop:text-8xl laptop:mt-10 ">is DML</h1>

            <h2 className="text-[#888888]  font-semibold w-[150px] laptop:w-[450px] tablet:w-[400px]    ">I'm  a  Software Developer and a passionate UX/UI designer with a focus on creating seamless user experiences</h2>

           
        </div>
            <div className="flex w-96 gap-10 ">
                <div className="animate-bounce">
                    <button className="rounded-full text-[#F9F9F9]  bg-[#FF5B02] w-32 h-10 mt-20 ">Hire Me</button>
                    <h2 className="text-[#FF5B02] text-lg font-semibold absolute left-14">^</h2>
                    <h2 className="text-[#FF5B02] text-lg font-semibold absolute left-14 mt-3">^<br /></h2>
                    
                </div>
                <button className="rounded-full text-[#F9F9F9] bg-transparent border border-solid border-[#F9F9F9]  w-32 h-10 mt-20">View CV</button>
            </div>
            <div className="mt-96">

            </div>
        </div>

            

        <div className="absolute -top-[50px] -right-[140px] tablet:-top-[120px] tablet:-right-[170px] laptop:-top-64 laptop:-right-80 laptop:z-50 tablet:z-50 z-40  ">

            <img className='w-[400px] tablet:w-[600px] laptop:w-full' src={profileImg} alt="" />
        </div>

        
    </div>
        
</div>

</div>
    
    </>
  )
}

export default Home
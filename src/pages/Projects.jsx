import React from 'react'

const Projects = () => {
    const img1 = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717601046/Frame_4_ezocat.png"
    const img2 = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717601989/Frame_11_uwkuqi.png" 
    const img3 = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717601989/Frame_5_lfapbf.png" 
  return (
    <>
    <div className='bg-[#00030C]'>
    <div className=" container mx-auto">
        <div className="  ">
            <div>
            <h1 className="text-[#F9F9F9] text-5xl tablet:text-6xl laptop:text-6xl  font-bold text-center pt-20">Projects</h1>
            </div>
            <div className="mx-[100px] tablet:mx-[0] laptop:mx-[0]  laptop:flex mt-20 laptop:justify-around tablet:flex tablet:justify-around  ">
                <div>
                   
                    <h2 className="text-[#F9F9F9] mt-20 text-4xl font-semibold ">UI/UX Design</h2>
                    <p className="text-[#F9F9F9] mt-12  tablet:text-2xl laptop:text-2xl w-[300px] tablet:w-[290px] laptop:w-[450px]">Developing user-centered designs that enhance usability and satisfaction thorough research, user testing, and iterative design processes to create products that meet users' needs and exceed their expectations. </p>
                    <button className="rounded-full text-[#F9F9F9]  bg-[#FF5B02] w-32 h-10 mt-12 border border-solid border-red-500 ">View Projects</button>
                </div>
                <div>
                    <img className="w-96 mt-[20px]  laptop:w-96 laptop:mt-24 tablet:w-[300px] tablet:mt-[170px] " src={img1} alt="" />
                </div>
        </div>
            

        </div>
        </div>
        

        <div className=" container mx-auto">
        <div className=''>
            <div className="mx-[100px] tablet:mx-[0] laptop:mx-[0]  laptop:flex laptop:flex-row-reverse mt-20 laptop:justify-around tablet:flex tablet:flex-row-reverse tablet:justify-around  ">
                <div>
                   
                    <h2 className="text-[#F9F9F9] mt-20 text-4xl font-semibold ">Web Design</h2>
                    <p className="text-[#F9F9F9] mt-12  tablet:text-2xl laptop:text-2xl w-[300px] tablet:w-[290px] laptop:w-[450px]">Creating modern, responsive, and user-friendly websites and web applications. I specialize in building platforms that provide an optimal user experience across all devices. </p>
                    <button className="rounded-full text-[#F9F9F9]  bg-[#FF5B02] w-32 h-10 mt-12 border border-solid border-red-500 ">View Projects</button>
                </div>
                <div>
                    <img className="w-96 mt-[20px]  laptop:w-96 laptop:mt-24 tablet:w-[300px] tablet:mt-[170px] " src={img2} alt="" />
                </div>
        </div>
        </div>
            

        </div>


        <div className=" container mx-auto">
        <div className=''>
            <div className="mx-[100px] tablet:mx-[0] laptop:mx-[0]  laptop:flex  mt-20 laptop:justify-around tablet:flex  tablet:justify-around  ">
                <div>
                   
                    <h2 className="text-[#F9F9F9] mt-20 text-4xl font-semibold ">Mobile App Design</h2>
                    <p className="text-[#F9F9F9] mt-12  tablet:text-2xl laptop:text-2xl w-[300px] tablet:w-[290px] laptop:w-[450px]">Design and development of high-performance mobile applications for iOS and Android. I transform your ideas into engaging and functional mobile experiences. </p>
                    <button className="rounded-full text-[#F9F9F9]  bg-[#FF5B02] w-32 h-10 mt-12 border border-solid border-red-500 ">View Projects</button>
                </div>
                <div>
                    <img className="w-96 mt-[20px]  laptop:w-96 laptop:mt-24 tablet:w-[300px] tablet:mt-[170px] " src={img3} alt="" />
                </div>
        </div>
        </div>
            

        </div>

        </div>
    
    </>
  )
}

export default Projects
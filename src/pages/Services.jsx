import React from 'react'

const Services = () => {
    const img1 = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717598229/Group_2_q8smx4.png"
    const img2 = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717598229/Group_3_e7ygtw.png"
    const img3 = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717598229/Group_4_slc5xa.png"
  return (
    
    <>
    <div className='bg-[#00030C] border border-none'>
    <div className="mx-auto overflow-hidden">
    <h1 className="text-[#F9F9F9] text-5xl tablet:text-6xl laptop:text-6xl font-bold text-center pt-[200px]">Services</h1>
    <div className="tablet:flex tablet:justify-evenly laptop:flex laptop:justify-evenly mt-20 tablet:mt-10 laptop:mt-10">
        <div className="flex justify-center">
            <div>
            <img src={img1} alt="" />
            <h2 className="text-[#F9F9F9] font-semibold text-center">Website Design</h2>
            <p className="text-[#F9F9F9] text-center">Creating modern, responsive <br /> and  user-friendly websites <br /> and web applications.</p>
            </div>
            
        </div>
    
        <div className="flex justify-center tablet:mt-[0px] laptop:mt-[0px] mt-[100px]">
        <div>
            <img src={img2} alt="" />
            <h2 class="text-[#F9F9F9] font-semibold text-center">Mobile App Design</h2>
            <p class="text-[#F9F9F9] text-center">Design and development of <br /> high-performance mobile <br /> applications for iOS and Android. </p>


                </div>

        </div>

        <div className="flex justify-center tablet:mt-[0px] laptop:mt-[0px] mt-[100px] ">
                <div>
           <img src={img3} alt="" />
            <h2 className="text-[#F9F9F9] font-semibold text-center">UI/UX Design</h2>
            <p className="text-[#F9F9F9] text-center">Crafting visually appealing, <br /> intuitive, and functional <br /> interfaces. </p>
        </div>
            

        </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Services
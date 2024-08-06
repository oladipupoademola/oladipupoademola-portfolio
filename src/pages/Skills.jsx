import React from 'react'

const Skills = () => {
    const img1  = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717599483/html_logo-removebg-preview_1_dl0bdi.png"
    const img2  = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717599482/CSS3_logo_dlbyi8.png" 
    const img3  = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717599482/javascript-logo-javascript-icon-transparent-free-png_jciukm.png"
    const img4  = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1717599482/png-transparent-figma-app-logo-tech-companies-removebg-preview_1_gajnvv.png"
  return (
    <>
    <div className='bg-[#00030C]'>
    <div className="pt-52 container mx-auto overflow-hidden">
            <h1 class="text-[#F9F9F9] text-5xl tablet:text-6xl laptop:text-6xl font-bold text-center">Skills</h1>
            <marquee width="100%" scrollamount="10" behavior="alternate" direction="right" transition="4s">
            <div className="flex justify-evenly mt-20">
                <div>
                <img className='h-20' src= {img1} alt="" />
                <h2 className="text-[#F9F9F9] text-2xl font-semibold text-center ">Html</h2>
                </div>
                    
                    <div>
                    <img className='h-20' src= {img2} alt="" />
                    <h2 className="text-[#F9F9F9] text-2xl font-semibold text-center ">CSS</h2>
                    </div>
                    
                    <div>
                    <img className='h-20' src= {img3} alt="" />
                    <h2 className="text-[#F9F9F9] text-2xl font-semibold text-center">Javascript</h2>
                    </div>
                    
                    <div>
                    <img className='h-20' src= {img4} alt="" />
                    <h2 className="text-[#F9F9F9] text-2xl font-semibold">Figma</h2>
                    </div>
        </div>
               
        </marquee>
    </div>
    </div>

    </>
  )
}

export default Skills
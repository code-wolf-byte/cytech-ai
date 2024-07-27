'use client'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function HeroCareer() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

       
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-10">

          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-16">
      
          <h1 className="h1 mb-4" data-aos="fade-up" style={{ fontSize: '50px' }}>Work with us to create safe cyberspace</h1>
       
          
          

            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Welcome to CytechAI. We provide advanced cybersecurity solutions to protect your digital assets from sophisticated threats. Our expertise and innovative tools ensure your data remains secure and your business stays ahead. Trust CytechAI to safeguard your digital world.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-[#45637b] hover:bg-[#151719] w-full mb-4 sm:w-auto sm:mb-0" href="/contact">Contact Us</a>
              </div>  
              <div data-aos="fade-up" data-aos-delay="600"> 
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  )
}

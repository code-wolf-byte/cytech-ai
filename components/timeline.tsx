export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3x3 mx-auto text-center pb-12 md:pb-20">
            
            <p className="text-xl text-gray-400">In today's interconnected world, the digital landscape is fraught with threats that grow more sophisticated by the day. At CytechAI, we recognize that safeguarding your business from these evolving dangers is paramount. Our mission is to provide unparalleled cybersecurity solutions that not only protect but also empower your organization.</p>
            <p className="text-xl text-gray-400">CytechAI is a leading cybersecurity firm dedicated to delivering innovative, AI-driven security solutions. Our team comprises seasoned experts in cybersecurity, artificial intelligence, and risk management. With a deep understanding of the digital threat landscape, we are uniquely positioned to protect your business from known and emerging threats.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>
          <div className="h1 font-architects-daughter text-gray-600 mb-2">Our Approach</div>
            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
               
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">1.</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-gray-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Advanced Threat Detection and Response</h4>
                </div>
                <p className="text-lg text-gray-400">Utilizing state-of-the-art AI and machine learning algorithms, we detect threats in real time and respond swiftly to neutralize them, minimizing potential damage.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2.</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-gray-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Proactive Risk Management</h4>
                </div>
                <p className="text-lg text-gray-400">We don't just react to threats; we anticipate them. Through rigorous risk assessments and continuous monitoring, we identify vulnerabilities before they can be exploited, ensuring your defenses are always one step ahead.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">3.</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-gray-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Customized Security Solutions</h4>
                </div>
                <p className="text-lg text-gray-400">Every business is unique, and so are its security needs. We offer tailored solutions that fit your specific requirements, ensuring optimal protection without unnecessary complexity.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
               
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">4.</div>
                  <div className="absolute left-0 w-2 h-2 bg-gray-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Compliance and Regulatory Support</h4>
                </div>
                <p className="text-lg text-gray-400">Navigating the complex landscape of cybersecurity regulations can be daunting. Our experts help you achieve and maintain compliance with industry standards, reducing legal risks and enhancing your credibility.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

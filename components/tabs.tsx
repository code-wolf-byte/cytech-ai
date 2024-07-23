'use client'

import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import phisi from '@/public/images/phising.jpg'
import inject from '@/public/images/injectionat.png'
import denial from '@/public/images/denial.png'
import mana from '@/public/images/man.jpg'
import mal from '@/public/images/malware.jpg' 
import zerod from '@/public/images/zeroday.jpg'
import inj from '@/public/images/inj.png'
import man from '@/public/images/man.png'
import bug from '@/public/images/bug.png'
import dos from '@/public/images/dos.png'
import phis from '@/public/images/phising.png'
import zero from'@/public/images/zero-day.png'
export default function Tabs() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
	  if ( tabs.current && tabs.current.parentElement ) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])    

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Complete protection against cyberthreats</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">We are highly skilled in protecting you and your company against cyberthreats with the most common threats being</p>
          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                onClick={() => setTab(1)}
              >
                <Image className="w-4 h-4 fill-current text-gray-600 mr-2" src={bug} alt='bug' />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Malware</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                onClick={() => setTab(2)}
              >
                <Image className="w-4 h-4 fill-current text-gray-600 mr-2" src={phis} alt='phis' />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Phising</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                onClick={() => setTab(3)}
              >
                <Image className="w-4 h-4 fill-current text-gray-600 mr-2" src={zero} alt='zero' />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Zero-Day Exploit</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                onClick={() => setTab(4)}
              >
                <Image className="w-4 h-4 fill-current text-gray-600 mr-2" src={dos} alt='DOS'/>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">DoS</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                onClick={() => setTab(5)}
              >
                <Image className="w-4 h-4 fill-current text-gray-600 mr-2" src={inj} alt='inj' />
                  
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Injection </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                onClick={() => setTab(6)}
              >
              <Image className="w-4 h-4 fill-current text-gray-600 mr-2" src={man} alt='man' />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">MITM</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={mal} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Malware Attack</h4>
                      <p className="text-lg text-gray-400">Malware—short for “malicious software”—is software code that is written intentionally to harm a computer system or its users.
Almost every modern cyberattack involves some type of malware. Threat actors use malware attacks to gain unauthorized access and render infected systems inoperable, destroying data, stealing sensitive information and even wiping files critical to the operating system.</p>
                      <a className="btn-sm text-white bg-gray-600 hover:bg-gray-700 mt-6" href="/contact">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={phisi} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2">Phising</h4>
                      <p className="text-lg text-gray-400">Phishing is the best-known and most pervasive form of social engineering. Phishing uses fraudulent emails, email attachments, text messages or phone calls to trick people into sharing personal data or login credentials, downloading malware, sending money to cybercriminals or taking other actions that might expose them to cybercrimes.</p>
                      <a className="btn-sm text-white bg-gray-600 hover:bg-gray-700 mt-6" href="/contact">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={zerod} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Zero-Day Exploit</h4>
                      <p className="text-lg text-gray-400">A zero-day exploit is a type of cyberattack that takes advantage of a zero-day vulnerability—an unknown or as-yet-unaddressed or unpatched security flaw in computer software, hardware, or firmware. “Zero day” refers to the fact that a software or device vendor has “zero days”—or no time—to fix the vulnerabilities because malicious actors can already use them to gain access to vulnerable systems.</p>
                      <a className="btn-sm text-white bg-gray-600 hover:bg-gray-700 mt-6" href="/contact">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={denial} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2">Denial-of-Service</h4>
                      <p className="text-lg text-gray-400">A denial-of-service (DoS) attack is a cyberattack that overwhelms a website, application or system with volumes of fraudulent traffic, making it too slow to use or entirely unavailable to legitimate users. A distributed denial-of-service attack, or DDoS attack, is similar except it uses a network of internet-connected, malware-infected devices or bots, which are known as a botnet, to cripple or crash the target system. </p>
                      <a className="btn-sm text-white bg-gray-600 hover:bg-gray-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 5}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={inject} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Injection attacks</h4>
                      <p className="text-lg text-gray-400">In these attacks, hackers inject malicious code into a program or download malware to execute remote commands, enabling them to read or modify a database or change website data.</p>

                      <p className="text-lg text-gray-400">There are several types of injection attacks. Two of the most common include:</p>
                      <p className="text-lg text-gray-400">1. SQL injection attacks</p>
                      <p className="text-lg text-gray-400">2. Cross-site scripting (XSS)</p>
                      <a className="btn-sm text-white bg-gray-600 hover:bg-gray-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                <Transition
                  show={tab === 6}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={mana} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Man-In-The-Middle Attack</h4>
                      <p className="text-lg text-gray-400">In a man-in-the-middle (MITM) attack, a cybercriminal eavesdrops on a network connection to intercept and relay messages between two parties and steal data. Unsecured wifi networks are often happy hunting grounds for hackers looking to launch MITM attacks.</p>
                      <a className="btn-sm text-white bg-gray-600 hover:bg-gray-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

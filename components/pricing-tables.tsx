'use client'

import { useState } from 'react'

export default function PricingTables() {

  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">Services we Offer</h1>
          </div>

          {/* Pricing tables */}
          <div>


            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

  {/* Service table 1 */}
  <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
    <div className="mb-4 pb-4 border-b border-gray-700">
      <div className="h4 text-gray-600 mb-1">Essential Protection</div>
      <div className="text-gray-400">Comprehensive security solutions for small businesses.</div>
    </div>
    <div className="font-medium mb-3">Features include:</div>
    <ul className="text-gray-400 -mb-3 grow">
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>24/7 Monitoring and Alerts</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Advanced Threat Detection</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Firewall Management</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Email Security</span>
      </li>
    </ul>
  </div>

  {/* Service table 2 */}
  <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
    <div className="absolute top-0 right-0 mr-6 -mt-4">
      <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Most Popular</div>
    </div>
    <div className="mb-4 pb-4 border-b border-gray-700">
      <div className="h4 text-gray-600 mb-1">Advanced Security</div>
      <div className="text-gray-400">Enhanced security solutions for medium-sized businesses.</div>
    </div>
    <div className="font-medium mb-3">All features of Essential plus:</div>
    <ul className="text-gray-400 -mb-3 grow">
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Endpoint Protection</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Data Encryption</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Intrusion Detection and Prevention</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>SIEM Integration</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Cloud Security</span>
      </li>
    </ul>
  </div>

  {/* Service table 3 */}
  <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
    <div className="mb-4 pb-4 border-b border-gray-700">
      <div className="h4 text-gray-600 mb-1">Enterprise Protection</div>
      <div className="text-gray-400">Robust security solutions for large enterprises.</div>
    </div>
    <div className="font-medium mb-3">All features of Advanced plus:</div>
    <ul className="text-gray-400 -mb-3 grow">
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>Cloud-based Security</span>
      </li>
      <li className="flex items-center mb-3">
        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Auto-Discovery</span>
        </li>
        </ul>
    </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}


'use client'


import { useState } from 'react'
import CtaContact from '@/components/cta-contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    country: '',
    message: '',
    agree: false
  })


  
  const handleChange = (e : any) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e : any) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        // Handle successful form submission
        alert('Form submitted successfully')
      } else {
        // Handle form submission error
        alert('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Form submission error')
    }
  }

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">How can we help you?</h1>
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">We have custom plans to power your business. Tell us your needs, and we'll contact you shortly.</p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
<<<<<<< HEAD
                  <input id="first-name" type="text" className="form-input w-full text-gray-300 focus:border-red-500" placeholder="Enter your first name" required />
                 
=======
                  <input id="first-name" name="firstName" type="text" className="form-input w-full text-gray-300 border-red-500 focus:border-red-500" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
                  <p className="text-red-500 text-sm mt-2">This field is required</p>
>>>>>>> 81e5c95a8b735f32cc0bb70ea3925d3dc3b65de2
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                  <input id="last-name" name="lastName" type="text" className="form-input w-full text-gray-300" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" name="email" type="email" className="form-input w-full text-gray-300" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
<<<<<<< HEAD
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="country">Subject</label>
                  <select id="country" className="form-select w-full text-gray-300">
                  <option>Business Enquiry</option>
                    <option>Consultancy</option>
                    <option>Career</option>
                    <option>Others</option>
                  </select>
=======
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
                  <input id="subject" name="subject" type="text" className="form-input w-full text-gray-300" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} required />
>>>>>>> 81e5c95a8b735f32cc0bb70ea3925d3dc3b65de2
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="country">Country</label>
<<<<<<< HEAD
                  <select id="country" className="form-select w-full text-gray-300">
                  <option>India</option>
=======
                  <select id="country" name="country" className="form-select w-full text-gray-300" value={formData.country} onChange={handleChange}>
                    <option>India</option>
>>>>>>> 81e5c95a8b735f32cc0bb70ea3925d3dc3b65de2
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} className="form-textarea w-full text-gray-300" placeholder="Write your message" value={formData.message} onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="flex items-center">
                    <input type="checkbox" name="agree" className="form-checkbox" checked={formData.agree} onChange={handleChange} />
                    <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-gray-600 hover:bg-gray-700 w-full" type="submit">Send</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
<<<<<<< HEAD

      <CtaContact />
=======
>>>>>>> 81e5c95a8b735f32cc0bb70ea3925d3dc3b65de2
    </>
  )
}

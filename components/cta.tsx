export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-12 md:pt-20 border-t border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos-id-cta>

            {/* Section header /}
            <h1 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-cta]">Ready to secure your digital infrastrucutre?</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-cta]">With Cy-tech AI you can focus on developing better products and leave your digital security to us.</p>

            {/ CTA button */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-cta]">
              <a className="btn text-white bg-gray-600 hover:bg-gray-700" href="/contact">Contact Us</a>
            </div>




          </div>
        </div>
      </div>
    </section>
  )
}

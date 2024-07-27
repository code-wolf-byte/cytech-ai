export const metadata = {
    title: 'Features - Cytechai',
    description: 'Page description',
  }
  
  import Career from '@/components/career'
  import TestimonialsCarousel from '@/components/testimonials-carousel'
  import Careerform from '@/components/careerform'
  export default function Features() {
    return (
      <>
      <TestimonialsCarousel/>
        
        <Careerform />
        
      </>
    )
  }
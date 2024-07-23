export const metadata = {
    title: 'Features - Cytechai',
    description: 'Page description',
  }
  
  import Career from '@/components/career'
  import TestimonialsCarousel from '@/components/testimonials-carousel'
  
  export default function Features() {
    return (
      <>
      <TestimonialsCarousel/>
        <Career />
        
      </>
    )
  }
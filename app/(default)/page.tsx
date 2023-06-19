export const metadata = {
  title: 'UXSphere',
  description: 'Unlimited UX Design & Web Development',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Partners from '@/components/partners'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
      <Partners />
    </>
  )
}

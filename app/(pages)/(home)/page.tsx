import { Hero } from "./_components/hero"
import { Sponsors } from "./_components/sponsors"
import { About } from "./_components/about"
import { Gallery } from "./_components/gallery"
import { Services } from "./_components/services"
import { Expertise } from "./_components/expertise"
import { Prices } from "./_components/prices"
import { Testimonials } from "./_components/testimonials"
import { Faq } from "./_components/faq"
import { Banner } from "./_components/banner"
import { Blog } from "./_components/blog"
import { Newsletter } from "./_components/newsletter"

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Sponsors />
      <About />
      <Gallery />
      <Services />
      <Expertise />
      <Prices />
      <Testimonials />
      <Faq />
      <Banner />
      <Blog />
      <Newsletter />
    </main>
  )
}

export default HomePage

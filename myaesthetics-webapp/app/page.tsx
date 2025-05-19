import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] bg-[#f8f5f0] flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5d5242] mb-4 md:mb-6">
              DISCOVER BALANCE
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#8a7e6d] mb-6 md:mb-8 px-4 md:px-0">
              Aesthetic treatments tailored to enhance your natural beauty
            </p>
            <button className="px-6 md:px-8 py-2.5 md:py-3 bg-[#5d5242] text-white text-sm hover:bg-[#4a4135] transition duration-300">
              DISCOVER MORE
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Aesthetic clinic interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-4 md:mb-6 text-center md:text-left">
                WELCOME to
                <br />
                <span className="font-medium">MyAesthetics</span>
              </h2>
              <p className="text-[#8a7e6d] mb-4 md:mb-6 text-center md:text-left">
                At MyAesthetics, we believe in enhancing your natural beauty through a balanced approach to aesthetic
                treatments. Our team of experienced professionals is dedicated to providing personalized care and
                exceptional results.
              </p>
              <p className="text-[#8a7e6d] mb-4 md:mb-6 text-center md:text-left">
                We combine cutting-edge technology with artistic expertise to deliver treatments that are safe,
                effective, and tailored to your unique needs and goals.
              </p>
              <div className="text-center md:text-left">
                <Link href="/about" className="text-[#5d5242] font-medium hover:underline">
                  LEARN MORE ABOUT US
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[300px] md:h-[400px]">
                <Image src="/placeholder.svg?height=400&width=600" alt="Team photo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Treatments */}
      <section className="py-12 md:py-16 bg-[#0d1a24] text-white">
        <div className="container mx-auto px-4 text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-2">OUR Treatments</h2>
          <div className="w-20 h-0.5 bg-[#c9b18c] mx-auto"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group overflow-hidden">
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px]">
                  <Image
                    src="/placeholder.svg?height=350&width=350"
                    alt={`Treatment ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-medium mb-2">Treatment Name</h3>
                      <p className="text-xs md:text-sm text-white/80 mb-4">
                        Brief description of the treatment and its benefits
                      </p>
                      <Link
                        href="/services"
                        className="inline-block px-4 py-2 border border-white text-xs md:text-sm hover:bg-white hover:text-[#0d1a24] transition duration-300"
                      >
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALMING Section */}
      <section className="py-12 md:py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Calming treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-16">
              <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-2 text-center md:text-left">CALMING</h2>
              <div className="w-20 h-0.5 bg-[#c9b18c] mb-4 md:mb-6 mx-auto md:mx-0"></div>
              <p className="text-[#8a7e6d] mb-4 md:mb-6 text-center md:text-left">
                Our calming treatments are designed to soothe and rejuvenate your skin, reducing inflammation and
                redness while promoting a healthy, radiant complexion. Using gentle yet effective ingredients, these
                treatments are perfect for sensitive skin types and those looking to restore balance to their skin.
              </p>
              <p className="text-[#8a7e6d] mb-4 md:mb-6 text-center md:text-left">
                Each treatment is customized to address your specific concerns and goals, ensuring optimal results and a
                relaxing experience.
              </p>
              <div className="text-center md:text-left">
                <Link
                  href="/services"
                  className="inline-block px-6 py-3 bg-[#5d5242] text-white text-sm hover:bg-[#4a4135] transition duration-300"
                >
                  EXPLORE TREATMENTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIVAL Section */}
      <section className="py-12 md:py-20 bg-[#0d1a24] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-16 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-light mb-2 text-center md:text-left">REVIVAL Studio</h2>
              <div className="w-20 h-0.5 bg-[#c9b18c] mb-4 md:mb-6 mx-auto md:mx-0"></div>
              <p className="text-white/80 mb-4 md:mb-6 text-center md:text-left">
                Our Revival Studio offers transformative treatments designed to restore and enhance your natural beauty.
                From advanced facial rejuvenation to body contouring, our comprehensive approach addresses multiple
                concerns to help you look and feel your best.
              </p>
              <p className="text-white/80 mb-4 md:mb-6 text-center md:text-left">
                Using state-of-the-art technology and premium products, our skilled practitioners deliver exceptional
                results with minimal downtime.
              </p>
              <div className="text-center md:text-left">
                <Link
                  href="/services"
                  className="inline-block px-6 py-3 border border-white text-sm hover:bg-white hover:text-[#0d1a24] transition duration-300"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Revival treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty in Balance */}
      <section className="py-12 md:py-20 bg-[#f8f5f0] text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-4 md:mb-6">Beauty in Balance</h2>
          <p className="text-[#8a7e6d] text-base md:text-lg mb-6 md:mb-10 px-2 md:px-0">
            At MyAesthetics, we believe that true beauty lies in balance. Our approach is centered on enhancing your
            natural features while maintaining harmony and proportion, resulting in a refreshed and authentic
            appearance.
          </p>
          <div className="relative h-[200px] md:h-[300px]">
            <Image src="/placeholder.svg?height=300&width=800" alt="Beauty treatment" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* PATIENT Overview */}
      <section className="py-12 md:py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-6 md:mb-10 text-center">PATIENT Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium text-[#5d5242] mb-3 md:mb-4">Consultation</h3>
              <p className="text-[#8a7e6d]">
                Your journey begins with a comprehensive consultation where we discuss your concerns, goals, and medical
                history. This allows us to develop a personalized treatment plan tailored to your unique needs and
                desired outcomes.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium text-[#5d5242] mb-3 md:mb-4">Treatment</h3>
              <p className="text-[#8a7e6d]">
                Our treatments are performed by highly skilled practitioners using advanced techniques and premium
                products. We prioritize your comfort and safety throughout the process, ensuring a positive and relaxing
                experience.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium text-[#5d5242] mb-3 md:mb-4">Aftercare</h3>
              <p className="text-[#8a7e6d]">
                We provide detailed aftercare instructions to optimize your results and minimize recovery time. Our team
                is available to address any questions or concerns you may have following your treatment, ensuring your
                complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKIN Treatments */}
      <section className="py-12 md:py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-6 md:mb-10 text-center">SKIN Treatments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group text-center md:text-left">
                <div className="relative h-[250px] sm:h-[280px] md:h-[300px] mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={`Skin treatment ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-[#5d5242] mb-2">Treatment Name</h3>
                <p className="text-[#8a7e6d] mb-4">Brief description of the treatment and its benefits for the skin.</p>
                <Link href="/services" className="text-[#5d5242] font-medium hover:underline">
                  LEARN MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-2">WE'RE the best</h2>
          <div className="w-20 h-0.5 bg-[#c9b18c] mx-auto mb-6 md:mb-10"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="relative h-[180px] sm:h-[220px] md:h-[300px] mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={`Team member ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base md:text-xl font-medium text-[#5d5242] mb-1">Dr. Name Surname</h3>
                <p className="text-sm md:text-base text-[#8a7e6d] mb-2">Position / Specialty</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 md:py-20 bg-[#0d1a24] text-white">
        <div className="container mx-auto px-4 text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-2">ABOUT US</h2>
          <div className="w-20 h-0.5 bg-[#c9b18c] mx-auto mb-6 md:mb-10"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center bg-[#162736] rounded-lg overflow-hidden">
                <div className="relative h-[200px] sm:h-[220px] md:h-[250px]">
                  <Image
                    src="/placeholder.svg?height=250&width=250"
                    alt={`Team member ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium mb-1">Dr. Name Surname</h3>
                  <p className="text-sm text-white/70 mb-3 md:mb-4">Position / Specialty</p>
                  <Link href="/about" className="text-[#c9b18c] hover:underline text-sm md:text-base">
                    VIEW PROFILE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-[#f8f5f0] text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-4 md:mb-6">Start Your Journey With Us</h2>
          <p className="text-[#8a7e6d] text-base md:text-lg mb-6 md:mb-8 px-4 md:px-0">
            Schedule a consultation today to discover how we can help you achieve your aesthetic goals.
          </p>
          <button className="px-6 md:px-8 py-2.5 md:py-3 bg-[#5d5242] text-white text-sm hover:bg-[#4a4135] transition duration-300">
            BOOK A CONSULTATION
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1a24] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-1 md:mb-2">DISCOVER MyAesthetics</h2>
            <h2 className="text-2xl md:text-3xl font-light mb-4 md:mb-6">DISCOVER YOU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-3 md:mb-4">Contact Us</h3>
              <p className="text-white/70 mb-2">123 Beauty Lane</p>
              <p className="text-white/70 mb-2">New York, NY 10001</p>
              <p className="text-white/70 mb-2">info@myaesthetics.com</p>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-3 md:mb-4">Opening Hours</h3>
              <p className="text-white/70 mb-2">Monday - Friday: 9am - 7pm</p>
              <p className="text-white/70 mb-2">Saturday: 10am - 5pm</p>
              <p className="text-white/70">Sunday: Closed</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-3 md:mb-4">Follow Us</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Link href="#" className="text-white/70 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-white/50 text-xs md:text-sm">
            <p>© {new Date().getFullYear()} MyAesthetics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#f8f5f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5d5242] mb-6">About</h1>
                <p className="text-[#8a7e6d] mb-8">
                  Get to know the team at MyAesthetics. Our focus is on a natural approach — we help you look and feel
                  your best while maintaining your unique features and natural beauty.
                </p>
                <Link href="#team" className="inline-flex items-center text-[#5d5242] font-medium hover:underline">
                  KNOW MORE <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image src="/placeholder.svg?height=600&width=600" alt="Team photo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="bg-[#f8f5f0] border-t border-b border-[#e0d9cf] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-[#8a7e6d]">
            <Link href="#welcome" className="hover:text-[#5d5242]">
              WELCOME TO MYAESTHETICS
            </Link>
            <Link href="#vision" className="hover:text-[#5d5242]">
              VISION TOUR
            </Link>
            <Link href="#experience" className="hover:text-[#5d5242]">
              WORLD-RENOWNED EXPERTISE
            </Link>
            <Link href="#approach" className="hover:text-[#5d5242]">
              OUR APPROACH
            </Link>
            <Link href="#team" className="hover:text-[#5d5242]">
              TEAM MEMBERS
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Navigation */}
      <section className="bg-[#0d1a24] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-white/70">
            <Link href="#methodology" className="hover:text-white">
              METHODOLOGY
            </Link>
            <Link href="#appointments" className="hover:text-white">
              BOOK YOUR APPOINTMENT
            </Link>
            <Link href="#patient" className="hover:text-white">
              PATIENT PORTAL
            </Link>
            <Link href="#testimonials" className="hover:text-white">
              TESTIMONIALS/BEFORE & AFTER
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8">Welcome To MyAesthetics</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8a7e6d] text-lg mb-6 leading-relaxed">
              MyAesthetics
              <br />
              is a premier destination
              <br />
              for Aesthetic Excellence
              <br />
              in the heart of
              <br />
              New York City, offering
              <br />
              beauty standards.
            </p>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team photo" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Welcome to MyAesthetics</h3>
              <p className="text-[#8a7e6d] mb-4">
                Where beauty meets science and art for a complete aesthetic experience.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Clinic interior"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Virtual Tour</h3>
              <p className="text-[#8a7e6d] mb-4">
                Explore our state-of-the-art facility, designed to provide a luxurious and comfortable environment for
                all our clients.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Expertise" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">World-Renowned Expertise</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our team of experts brings years of experience and specialized knowledge to every treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Three Column Section */}
      <section className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="OUR Approach" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">OUR Approach</h3>
              <p className="text-[#8a7e6d] mb-4">
                Combining science, art, and personalization to deliver exceptional results tailored to your unique
                needs.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Treatments" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Treatments</h3>
              <p className="text-[#8a7e6d] mb-4">
                We offer a comprehensive range of treatments, from non-invasive procedures to advanced aesthetic
                solutions.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Meet Dr. MD" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Meet DR. MD</h3>
              <p className="text-[#8a7e6d] mb-4">
                Dr. MD brings extensive expertise and a refined aesthetic vision to all treatments, ensuring
                natural-looking results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Three Column Section */}
      <section className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="PURE SKIN CARE" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">PURE SKIN CARE</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our skincare treatments are designed to rejuvenate and restore your skin's natural radiance and health.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Our Team" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Our Team</h3>
              <p className="text-[#8a7e6d] mb-4">
                Meet our dedicated team of professionals committed to providing exceptional care and results.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Treatments" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Treatments</h3>
              <p className="text-[#8a7e6d] mb-4">
                Explore our range of treatments designed to enhance your natural beauty and boost your confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Book Your Appointment</h3>
              <p className="text-[#8a7e6d] mb-4">
                Schedule a consultation with our experts to discuss your aesthetic goals and treatment options.
              </p>
            </div>

            {/* Team Member 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Patient Portal</h3>
              <p className="text-[#8a7e6d] mb-4">
                Access your personal patient portal to manage appointments, view treatment plans, and more.
              </p>
            </div>

            {/* Team Member 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Skincare/Treatment Guide</h3>
              <p className="text-[#8a7e6d] mb-4">
                Explore our comprehensive guide to skincare and treatments to find the perfect solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Methodology" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">World-Class Care</h3>
              <p className="text-[#8a7e6d] mb-4">
                Experience exceptional care with our patient-centered approach and commitment to excellence.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Expertise" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Houses of Operation</h3>
              <p className="text-[#8a7e6d] mb-4">
                We are available to serve you with flexible hours designed to accommodate your busy schedule.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Resources" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Resources</h3>
              <p className="text-[#8a7e6d] mb-4">
                Access our library of resources to learn more about our treatments, skincare tips, and aesthetic trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Two Column Section */}
      <section className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=500" alt="Videos" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Videos</h3>
              <p className="text-[#8a7e6d] mb-4">
                Watch our informative videos to learn more about our treatments and see real results.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=500" alt="Blog" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Blog</h3>
              <p className="text-[#8a7e6d] mb-4">
                Stay updated with the latest in aesthetic medicine, skincare tips, and clinic news through our blog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0d1a24] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-2">Discover Balance.</h2>
          <h2 className="text-3xl font-light mb-8">Discover YOU</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-white text-sm hover:bg-white hover:text-[#0d1a24] transition duration-300"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1a24] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <p className="text-white/70 mb-2">123 Beauty Lane</p>
              <p className="text-white/70 mb-2">New York, NY 10001</p>
              <p className="text-white/70 mb-2">info@myaesthetics.com</p>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-light mb-2">MA</div>
                <p className="text-white/70 text-sm">MYAESTHETICS</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
              <p className="text-white/70 mb-2">INSTAGRAM | @my_aesthetics</p>
              <p className="text-white/70 mb-2">FACEBOOK | @myaesthetics</p>
            </div>
          </div>
          <div className="text-center text-white/50 text-sm border-t border-white/20 pt-6">
            <p>© {new Date().getFullYear()} MyAesthetics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

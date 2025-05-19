import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#f8f5f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5d5242] mb-6">Gallery</h1>
                <p className="text-[#8a7e6d] mb-8">
                  Explore our gallery of before and after transformations, treatment results, and our state-of-the-art
                  facility. See the MyAesthetics difference through our patients' journeys.
                </p>
                <Link href="#results" className="inline-flex items-center text-[#5d5242] font-medium hover:underline">
                  VIEW RESULTS <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image src="/placeholder.svg?height=600&width=600" alt="Gallery showcase" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="bg-[#f8f5f0] border-t border-b border-[#e0d9cf] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-[#8a7e6d]">
            <Link href="#before-after" className="hover:text-[#5d5242]">
              BEFORE & AFTER
            </Link>
            <Link href="#treatments" className="hover:text-[#5d5242]">
              TREATMENTS
            </Link>
            <Link href="#facility" className="hover:text-[#5d5242]">
              OUR FACILITY
            </Link>
            <Link href="#team" className="hover:text-[#5d5242]">
              TEAM
            </Link>
            <Link href="#testimonials" className="hover:text-[#5d5242]">
              TESTIMONIALS
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Navigation */}
      <section className="bg-[#0d1a24] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-white/70">
            <Link href="#skin" className="hover:text-white">
              SKIN TREATMENTS
            </Link>
            <Link href="#body" className="hover:text-white">
              BODY TREATMENTS
            </Link>
            <Link href="#face" className="hover:text-white">
              FACIAL TREATMENTS
            </Link>
            <Link href="#injectables" className="hover:text-white">
              INJECTABLES
            </Link>
            <Link href="#events" className="hover:text-white">
              EVENTS
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8">Our Gallery</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8a7e6d] text-lg mb-6 leading-relaxed">
              Explore our collection
              <br />
              of transformative results
              <br />
              and beautiful spaces
              <br />
              that showcase our
              <br />
              commitment to excellence
              <br />
              in aesthetic care.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Before & After 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Facial Rejuvenation</h3>
              <p className="text-[#8a7e6d] mb-4">
                Patient received a combination of treatments to restore volume and reduce fine lines.
              </p>
            </div>

            {/* Before & After 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Skin Resurfacing</h3>
              <p className="text-[#8a7e6d] mb-4">
                Advanced laser treatment to improve skin texture and reduce hyperpigmentation.
              </p>
            </div>

            {/* Before & After 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Body Contouring</h3>
              <p className="text-[#8a7e6d] mb-4">
                Non-invasive treatment to sculpt and define body contours for a more toned appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Treatment Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Treatment 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Treatment procedure"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Dermal Fillers</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our premium dermal fillers restore volume and enhance facial contours for a natural, youthful
                appearance.
              </p>
            </div>

            {/* Treatment 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Treatment procedure"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Laser Therapy</h3>
              <p className="text-[#8a7e6d] mb-4">
                Advanced laser treatments target specific skin concerns with precision and minimal downtime.
              </p>
            </div>

            {/* Treatment 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Treatment procedure"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Chemical Peels</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our customized chemical peels reveal fresher, more radiant skin by removing damaged outer layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Our Facility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Facility 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Reception area" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Reception</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our welcoming reception area is designed to provide comfort and tranquility from the moment you arrive.
              </p>
            </div>

            {/* Facility 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Treatment room" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Treatment Rooms</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our private treatment rooms feature state-of-the-art equipment in a serene, spa-like environment.
              </p>
            </div>

            {/* Facility 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Relaxation lounge"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Relaxation Lounge</h3>
              <p className="text-[#8a7e6d] mb-4">
                Unwind in our relaxation lounge before or after your treatment for a complete wellness experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Dr. Sarah Johnson</h3>
              <p className="text-[#8a7e6d] mb-4">
                Medical Director with over 15 years of experience in aesthetic medicine and facial rejuvenation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Dr. Michael Chen</h3>
              <p className="text-[#8a7e6d] mb-4">
                Specialist in advanced injectables and non-surgical facial contouring techniques.
              </p>
            </div>

            {/* Team Member 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Emma Rodriguez</h3>
              <p className="text-[#8a7e6d] mb-4">
                Master Aesthetician specializing in advanced skincare treatments and customized regimens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Patient testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Jennifer L.</h3>
              <p className="text-[#8a7e6d] mb-4">
                "The results from my treatment exceeded my expectations. The team at MyAesthetics made me feel
                comfortable throughout the entire process."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Patient testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Robert M.</h3>
              <p className="text-[#8a7e6d] mb-4">
                "I've been coming to MyAesthetics for over a year now, and the consistent quality of care and results
                keeps me coming back. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Patient testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Sophia K.</h3>
              <p className="text-[#8a7e6d] mb-4">
                "The personalized approach to my skincare concerns has transformed my skin. I feel more confident than
                ever thanks to the MyAesthetics team."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Events & Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Event" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Skincare Workshop</h3>
              <p className="text-[#8a7e6d] mb-4">
                Join us for an educational workshop on advanced skincare techniques and product recommendations.
              </p>
            </div>

            {/* Event 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Event" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Open House</h3>
              <p className="text-[#8a7e6d] mb-4">
                Explore our facility, meet our team, and learn about our treatments during our quarterly open house
                event.
              </p>
            </div>

            {/* Event 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Event" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Treatment Demonstrations</h3>
              <p className="text-[#8a7e6d] mb-4">
                Watch live demonstrations of our most popular treatments and see the results firsthand.
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
            href="/book"
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

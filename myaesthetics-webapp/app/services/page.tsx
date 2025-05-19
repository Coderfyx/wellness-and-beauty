import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#f8f5f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5d5242] mb-6">Services</h1>
                <p className="text-[#8a7e6d] mb-8">
                  Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty and
                  restore confidence. Each service is tailored to your unique needs and goals.
                </p>
                <Link
                  href="#treatments"
                  className="inline-flex items-center text-[#5d5242] font-medium hover:underline"
                >
                  EXPLORE TREATMENTS <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Aesthetic treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="bg-[#f8f5f0] border-t border-b border-[#e0d9cf] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-[#8a7e6d]">
            <Link href="#facial" className="hover:text-[#5d5242]">
              FACIAL TREATMENTS
            </Link>
            <Link href="#body" className="hover:text-[#5d5242]">
              BODY TREATMENTS
            </Link>
            <Link href="#injectables" className="hover:text-[#5d5242]">
              INJECTABLES
            </Link>
            <Link href="#skincare" className="hover:text-[#5d5242]">
              SKINCARE
            </Link>
            <Link href="#wellness" className="hover:text-[#5d5242]">
              WELLNESS
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Navigation */}
      <section className="bg-[#0d1a24] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-white/70">
            <Link href="#consultation" className="hover:text-white">
              CONSULTATION
            </Link>
            <Link href="#pricing" className="hover:text-white">
              PRICING
            </Link>
            <Link href="#packages" className="hover:text-white">
              PACKAGES
            </Link>
            <Link href="#memberships" className="hover:text-white">
              MEMBERSHIPS
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
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8">Our Services</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8a7e6d] text-lg mb-6 leading-relaxed">
              MyAesthetics
              <br />
              offers a comprehensive range
              <br />
              of premium treatments
              <br />
              designed to enhance
              <br />
              your natural beauty
              <br />
              with exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Facial Treatments Section */}
      <section id="facial" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Facial Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Treatment 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Facial treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Signature Facial</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our customized facial addresses your specific skin concerns while providing deep cleansing, exfoliation,
                and hydration.
              </p>
            </div>

            {/* Treatment 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Facial treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Microdermabrasion</h3>
              <p className="text-[#8a7e6d] mb-4">
                This exfoliating treatment removes dead skin cells to reveal smoother, brighter skin and improve
                texture.
              </p>
            </div>

            {/* Treatment 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Facial treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Chemical Peels</h3>
              <p className="text-[#8a7e6d] mb-4">
                Our medical-grade chemical peels address hyperpigmentation, acne, fine lines, and uneven skin tone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body Treatments Section */}
      <section id="body" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Body Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Treatment 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Body treatment" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Body Contouring</h3>
              <p className="text-[#8a7e6d] mb-4">
                Non-invasive treatments to sculpt and define your body by reducing fat and tightening skin.
              </p>
            </div>

            {/* Treatment 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Body treatment" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Cellulite Reduction</h3>
              <p className="text-[#8a7e6d] mb-4">
                Advanced technologies to smooth and improve the appearance of cellulite for smoother skin.
              </p>
            </div>

            {/* Treatment 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image src="/placeholder.svg?height=250&width=400" alt="Body treatment" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Skin Tightening</h3>
              <p className="text-[#8a7e6d] mb-4">
                Non-surgical treatments to tighten loose skin and improve elasticity for a more youthful appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Injectables Section */}
      <section id="injectables" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Injectables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Injectable 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Injectable treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Botox & Dysport</h3>
              <p className="text-[#8a7e6d] mb-4">
                Neuromodulators that reduce the appearance of fine lines and wrinkles by relaxing facial muscles.
              </p>
            </div>

            {/* Injectable 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Injectable treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Dermal Fillers</h3>
              <p className="text-[#8a7e6d] mb-4">
                Restore volume, enhance facial contours, and smooth deep lines for a more youthful appearance.
              </p>
            </div>

            {/* Injectable 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Injectable treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Lip Enhancement</h3>
              <p className="text-[#8a7e6d] mb-4">
                Subtle or dramatic lip augmentation to enhance shape, volume, and symmetry for a natural look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skincare Section */}
      <section id="skincare" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Medical-Grade Skincare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skincare 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Skincare products"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Customized Regimens</h3>
              <p className="text-[#8a7e6d] mb-4">
                Personalized skincare routines featuring medical-grade products tailored to your specific needs.
              </p>
            </div>

            {/* Skincare 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Skincare products"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Premium Products</h3>
              <p className="text-[#8a7e6d] mb-4">
                We offer only the highest quality, scientifically-proven skincare brands for optimal results.
              </p>
            </div>

            {/* Skincare 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Skincare consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Skincare Consultation</h3>
              <p className="text-[#8a7e6d] mb-4">
                Expert analysis of your skin and personalized recommendations for products and treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section id="wellness" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Wellness Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Wellness 1 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Wellness treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">IV Therapy</h3>
              <p className="text-[#8a7e6d] mb-4">
                Customized vitamin infusions to boost energy, immunity, and overall wellness from within.
              </p>
            </div>

            {/* Wellness 2 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Wellness treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Nutritional Counseling</h3>
              <p className="text-[#8a7e6d] mb-4">
                Expert guidance on nutrition to support skin health and overall wellbeing for lasting results.
              </p>
            </div>

            {/* Wellness 3 */}
            <div>
              <div className="relative h-[250px] mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Wellness treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Stress Management</h3>
              <p className="text-[#8a7e6d] mb-4">
                Holistic approaches to reduce stress and its effects on skin health and aging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-12 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Consultation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Initial Assessment</h3>
              <p className="text-[#8a7e6d]">
                Comprehensive evaluation of your concerns, goals, and medical history to create a personalized plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Treatment Planning</h3>
              <p className="text-[#8a7e6d]">
                Detailed discussion of recommended treatments, expected results, and timeline for optimal outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Follow-Up Care</h3>
              <p className="text-[#8a7e6d]">
                Ongoing support and adjustments to your treatment plan to ensure the best possible results.
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

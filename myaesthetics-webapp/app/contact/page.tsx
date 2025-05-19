import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#f8f5f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5d5242] mb-6">Contact Us</h1>
                <p className="text-[#8a7e6d] mb-8">
                  We're here to answer your questions and help you schedule your consultation. Reach out to our team
                  using any of the methods below, or visit our clinic in person.
                </p>
                <Link href="#form" className="inline-flex items-center text-[#5d5242] font-medium hover:underline">
                  GET IN TOUCH <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image src="/placeholder.svg?height=600&width=600" alt="Contact us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={20} />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Phone</h3>
              <p className="text-[#8a7e6d] mb-2">+1 (555) 123-4567</p>
              <p className="text-[#8a7e6d]">+1 (555) 987-6543</p>
            </div>

            <div className="text-center p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={20} />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Email</h3>
              <p className="text-[#8a7e6d] mb-2">info@myaesthetics.com</p>
              <p className="text-[#8a7e6d]">appointments@myaesthetics.com</p>
            </div>

            <div className="text-center p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Address</h3>
              <p className="text-[#8a7e6d] mb-2">123 Beauty Lane</p>
              <p className="text-[#8a7e6d]">New York, NY 10001</p>
            </div>

            <div className="text-center p-6 bg-white shadow-sm">
              <div className="w-12 h-12 bg-[#5d5242] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-xl font-medium text-[#5d5242] mb-2">Hours</h3>
              <p className="text-[#8a7e6d] mb-2">Monday - Friday: 9am - 7pm</p>
              <p className="text-[#8a7e6d]">Saturday: 10am - 5pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Send Us a Message</h2>
            <div className="bg-white p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[#5d5242] text-sm font-medium mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-[#e0d9cf] focus:outline-none focus:ring-2 focus:ring-[#5d5242]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[#5d5242] text-sm font-medium mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-[#e0d9cf] focus:outline-none focus:ring-2 focus:ring-[#5d5242]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[#5d5242] text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-[#e0d9cf] focus:outline-none focus:ring-2 focus:ring-[#5d5242]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#5d5242] text-sm font-medium mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-[#e0d9cf] focus:outline-none focus:ring-2 focus:ring-[#5d5242]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#5d5242] text-sm font-medium mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-[#e0d9cf] focus:outline-none focus:ring-2 focus:ring-[#5d5242]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#5d5242] text-sm font-medium mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-[#e0d9cf] focus:outline-none focus:ring-2 focus:ring-[#5d5242]"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-[#5d5242] text-white text-sm hover:bg-[#4a4135] transition duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#5d5242] mb-8 text-center">Find Us</h2>
          <div className="relative h-[400px] w-full">
            <Image src="/placeholder.svg?height=400&width=1200" alt="Map location" fill className="object-cover" />
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

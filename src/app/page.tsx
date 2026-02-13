'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: '',
    website: '', // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Images from her existing Squarespace site
  const images = {
    // Hamptons House
    hamptonsHero: 'https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/9dabcb0c-6176-42f3-9a10-1e8e1bbd69ae/IMG_5384.JPG',
    // Lake House
    lakeHouse: 'https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/82e497eb-0c91-4bca-9301-96e1718e7f0f/NH_20240308_0052_%28by_Nadav_Havakook%29.jpg',
    // UES Kitchen
    uesKitchen: 'https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/e26a5ef1-675c-4c36-815f-93ca25d2275c/NH_20230216_0084_%28by_Nadav_Havakook%29.jpg',
    // West Village
    westVillage: 'https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/3f22f038-09f1-44a6-ad0e-e22cbd2d2380/NH_20240130_0361_%28by_Nadav_Havakook%29.jpg',
    // Union Square Bath
    unionSquare: 'https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/97e4c462-54fa-4b9d-85ff-9753ba78b60f/NH_20221121_0035_%28by_Nadav_Havakook%29.jpg',
    // Upstate Barn
    upstateBarn: 'https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/1d4234dc-7992-48df-9dfc-8e04d099b3a5/IMG_4423.JPG',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    // Honeypot check
    if (formData.website) {
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      // TODO: Replace with actual Formspree ID
      const response = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          location: formData.location,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', location: '', message: '', website: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      setFormError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#" className="font-serif text-xl tracking-wide text-[#2D2D2D]">
            IndesignBar
          </a>
          <a 
            href="#contact" 
            className="text-xs tracking-[0.2em] uppercase text-[#2D2D2D] hover:text-[#8B7355] transition-colors"
          >
            Inquire
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <img 
          src={images.lakeHouse}
          alt="IndesignBar - Luxury Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-[#C9A962] text-xs tracking-[0.4em] uppercase mb-6">
            Interior Design Studio
          </p>
          <h1 className="font-serif text-white text-5xl md:text-7xl font-light leading-tight mb-8">
            Refined Interiors<br />
            <em className="font-normal">for Hamptons Living</em>
          </h1>
          <a 
            href="#contact"
            className="inline-block border border-white/80 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-[#2D2D2D] transition-all"
          >
            Start Your Project
          </a>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-[#2D2D2D] leading-relaxed font-light">
            We create spaces that feel both collected and considered — where every piece earns its place and nothing competes for attention.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-[#8B7355] mb-16">
            Selected Work
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Large Featured - Hamptons */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={images.hamptonsHero}
                  alt="Hamptons House"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[#2D2D2D]">Hamptons Haven</h3>
                <p className="text-sm text-[#8B7355] mt-1">Hamptons, NY</p>
              </div>
            </div>

            {/* Lake House */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={images.lakeHouse}
                  alt="Lake House"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[#2D2D2D]">Lakeside Retreat</h3>
                <p className="text-sm text-[#8B7355] mt-1">Upstate New York</p>
              </div>
            </div>

            {/* UES */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={images.uesKitchen}
                  alt="Upper East Side"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[#2D2D2D]">Upper East Side Residence</h3>
                <p className="text-sm text-[#8B7355] mt-1">Manhattan, NY</p>
              </div>
            </div>

            {/* West Village */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={images.westVillage}
                  alt="West Village"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[#2D2D2D]">West Village Pied-à-terre</h3>
                <p className="text-sm text-[#8B7355] mt-1">Manhattan, NY</p>
              </div>
            </div>

            {/* Upstate Barn */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={images.upstateBarn}
                  alt="Hudson Barn"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[#2D2D2D]">Hudson Valley Barn</h3>
                <p className="text-sm text-[#8B7355] mt-1">Hudson, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-16">
            Services
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-12 h-px bg-[#C9A962] mx-auto mb-6" />
              <h3 className="font-serif text-xl text-white mb-3">Full Service Design</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                From initial concept through final installation, we handle every detail.
              </p>
            </div>
            <div>
              <div className="w-12 h-px bg-[#C9A962] mx-auto mb-6" />
              <h3 className="font-serif text-xl text-white mb-3">Renovation Design</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Transforming existing spaces with thoughtful, considered updates.
              </p>
            </div>
            <div>
              <div className="w-12 h-px bg-[#C9A962] mx-auto mb-6" />
              <h3 className="font-serif text-xl text-white mb-3">Consultation</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Expert guidance to elevate your vision and clarify direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-[#8B7355] mb-16">
            The Process
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {['Discovery', 'Concept', 'Design', 'Install'].map((step, i) => (
              <div key={step} className="flex items-center gap-4 md:gap-8">
                <div className="text-center">
                  <span className="block font-serif text-4xl text-[#C9A962] mb-2">{i + 1}</span>
                  <span className="text-sm tracking-wide text-[#2D2D2D]">{step}</span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block w-16 h-px bg-[#D4D4D4]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/65b00ba071ff49549d354f23/77d64c52-3d7b-4773-9312-e8b4a863b668/9.jpg?format=1500w"
                  alt="Inbar Meitus Sandler - Interior Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#8B7355] mb-4">
                About the Studio
              </p>
              <h2 className="font-serif text-3xl text-[#2D2D2D] mb-6">Inbar Meitus Sandler</h2>
              <p className="text-[#2D2D2D]/80 leading-relaxed mb-6">
                With over a decade in design and roots in European aesthetics, IndesignBar brings a refined sensibility to every project. We believe spaces should feel effortless — collected over time, never contrived.
              </p>
              <p className="text-[#2D2D2D]/80 leading-relaxed">
                From the Hamptons to Manhattan, we create interiors that reflect how you actually live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-serif text-5xl text-[#C9A962]">"</span>
          <blockquote className="font-serif text-xl md:text-2xl text-[#2D2D2D] leading-relaxed mb-6">
            Working with Inbar was seamless. She understood exactly what we wanted and delivered beyond our expectations.
          </blockquote>
          <cite className="not-italic">
            <span className="block text-[#2D2D2D] font-medium">Client Name</span>
            <span className="text-sm text-[#8B7355]">Hamptons, NY</span>
          </cite>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl text-white mb-6">
                Let's Create Something Beautiful
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Ready to transform your space? Tell us about your project and we'll be in touch within 48 hours.
              </p>
              <div className="space-y-4 text-white/60">
                <p>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Email</span>
                  Info@indesignbar.com
                </p>
                <p>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Phone</span>
                  (914) 320-7952
                </p>
                <p>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Serving</span>
                  Hamptons • Manhattan • Hudson Valley
                </p>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 border border-[#C9A962] rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#C9A962] text-2xl">✓</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2">Thank You</h3>
                  <p className="text-white/60">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                    <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>

                  {formError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {formError}
                    </div>
                  )}

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-3 focus:outline-none focus:border-[#C9A962] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-3 focus:outline-none focus:border-[#C9A962] transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-3 focus:outline-none focus:border-[#C9A962] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#C9A962] transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#2D2D2D]">Project Type</option>
                      <option value="full-service" className="bg-[#2D2D2D]">Full Service Design</option>
                      <option value="renovation" className="bg-[#2D2D2D]">Renovation</option>
                      <option value="consultation" className="bg-[#2D2D2D]">Consultation</option>
                      <option value="other" className="bg-[#2D2D2D]">Other</option>
                    </select>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#C9A962] transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#2D2D2D]">Location</option>
                      <option value="hamptons" className="bg-[#2D2D2D]">Hamptons</option>
                      <option value="manhattan" className="bg-[#2D2D2D]">Manhattan</option>
                      <option value="brooklyn" className="bg-[#2D2D2D]">Brooklyn</option>
                      <option value="hudson-valley" className="bg-[#2D2D2D]">Hudson Valley</option>
                      <option value="other" className="bg-[#2D2D2D]">Other</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your project..."
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-3 focus:outline-none focus:border-[#C9A962] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full border border-[#C9A962] text-[#C9A962] text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#C9A962] hover:text-[#2D2D2D] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#E5E2DC]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-serif text-lg text-[#2D2D2D]">IndesignBar</span>
          <p className="text-xs text-[#8B7355]">© 2026 IndesignBar Studio. All rights reserved.</p>
          <a 
            href="https://www.instagram.com/indesignbar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8B7355] hover:text-[#2D2D2D] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}

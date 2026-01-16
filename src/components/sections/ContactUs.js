"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full border-t border-white/10 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 md:mb-20">
          <span className="text-xs sm:text-sm text-white/60 tracking-widest whitespace-nowrap">
            06 / CONTACT
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

          {/* Left - Text content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white/70 leading-tight">
              We'd love to{" "}
              <span className="block text-white font-medium">
                hear from you
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
              Whether you have a project in mind, a question about our work, or simply want to say hello — don't hesitate to reach out. Fill out the form below.
            </p>

            <div className="mt-10 sm:mt-14 space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Email</p>
                <a 
                  href="mailto:hello@letemknow.media" 
                  className="text-lg sm:text-xl font-medium hover:text-white/80 transition"
                >
                  HELLO@LETEMKNOW.MEDIA
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Phone</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <a 
                    href="tel:+918588812345" 
                    className="text-lg sm:text-xl font-medium hover:text-white/80 transition"
                  >
                    +91 85888 12345
                  </a>
                  <span className="hidden sm:inline text-white/30">//</span>
                  <a 
                    href="tel:+919560823299" 
                    className="text-lg sm:text-xl font-medium hover:text-white/80 transition"
                  >
                    +91 95608 23299
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-8 px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

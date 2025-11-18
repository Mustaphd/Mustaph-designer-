
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-900 rounded-lg" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-10">Get In <span className="text-amber-400">Touch</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold font-poppins mb-4">Contact Information</h3>
            <p className="text-zinc-400 mb-6">Have a project in mind? We'd love to hear from you. Reach out to us via phone, email, or the contact form.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="bg-amber-400/20 text-amber-400 p-2 rounded-full"><IconPhone /></span>
                <div>
                  <p className="text-zinc-400 text-sm">Phone</p>
                  <a href="tel:0782656016" className="font-semibold text-white hover:text-amber-400">0782656016</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-amber-400/20 text-amber-400 p-2 rounded-full"><IconEmail /></span>
                <div>
                  <p className="text-zinc-400 text-sm">Email</p>
                  <a href="mailto:kigalirwandatv@gmail.com" className="font-semibold text-white hover:text-amber-400">kigalirwandatv@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-amber-400/20 text-amber-400 p-2 rounded-full"><IconLocation /></span>
                <div>
                  <p className="text-zinc-400 text-sm">Location</p>
                  <p className="font-semibold text-white">Ruhango, Rwanda</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63749.33239243516!2d29.743132746404983!3d-2.235941916301323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c3005a7662c165%3A0x44828f42095815b3!2sRuhango!5e0!3m2!1sen!2srw!4v1672584111322!5m2!1sen!2srw"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <form className="space-y-4">
             <h3 className="text-2xl font-semibold font-poppins mb-2">Send us a Message</h3>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400 transition" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400 transition" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={6} placeholder="Your Message" className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400 transition"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-400 text-black font-bold py-3 px-6 rounded-md uppercase tracking-wider hover:bg-amber-300 transition-colors duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Icons
function IconPhone() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>; }
function IconEmail() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; }
function IconLocation() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }

export default ContactSection;

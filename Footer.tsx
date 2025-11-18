
import React from 'react';
import AdBanner from './AdBanner';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex justify-center mb-12">
            <AdBanner width={728} height={90} label="Footer Ad Banner" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold font-poppins"><span className="text-white">MUSTAPH</span> <span className="text-amber-400">DESIGNER</span></h3>
            <p className="text-zinc-400">Your one-stop solution for creative design, branding, and photography. We bring your ideas to life with passion and professionalism.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-amber-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
              <a href="#" className="text-zinc-400 hover:text-amber-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
              <a href="#" className="text-zinc-400 hover:text-amber-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg font-poppins text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-amber-400 hover:underline">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Blog</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg font-poppins text-white mb-4">Services</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-amber-400 hover:underline">Banner Design</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Photography</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Invitations</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Branding</a></li>
              <li><a href="#" className="hover:text-amber-400 hover:underline">Social Media Marketing</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg font-poppins text-white mb-4">Address</h4>
            <address className="not-italic text-zinc-400 space-y-2">
              <p>Ruhango, Rwanda</p>
              <p>Phone: 0782656016</p>
              <p>Email: kigalirwandatv@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 py-6 border-t border-zinc-800 text-center text-zinc-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Mustaph Designer. All Rights Reserved.</p>
          <p className="mt-1">Designed by DJ Mustaph</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

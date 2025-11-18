
import React from 'react';

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="relative bg-zinc-900 border border-amber-400/50 rounded-lg shadow-2xl max-w-md w-full p-8 text-center transform transition-all duration-300 scale-95 animate-popup-in">
        <button onClick={onClose} className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-2xl font-bold font-poppins text-amber-400 mb-2">Join Our Newsletter</h2>
        <p className="text-zinc-400 mb-6">Get the latest creative tips, special offers, and project updates delivered to your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400 transition" 
          />
          <button 
            type="submit" 
            className="bg-amber-400 text-black font-bold py-3 px-6 rounded-md uppercase tracking-wider hover:bg-amber-300 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-popup-in { animation: popup-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default NewsletterPopup;

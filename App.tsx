
import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeadlineTicker from './components/HeadlineTicker';
import HeroSlider from './components/HeroSlider';
import AdBanner from './components/AdBanner';
import ServicesHub from './components/ServicesHub';
import Portfolio from './components/Portfolio';
import PhotographyShowcase from './components/PhotographyShowcase';
import BlogSection from './components/BlogSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSlider from './components/TestimonialsSlider';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <TopBar />
      <Header />
      <main className="max-w-[1300px] mx-auto">
        <AdBanner width={970} height={90} className="my-4 hidden md:block" />
        <AdBanner width={320} height={100} className="my-4 md:hidden" />
        
        <HeadlineTicker />
        <HeroSlider />

        <AdBanner width={728} height={90} className="my-6 hidden md:block mx-auto" label="Hero Ad Banner" />

        <div className="px-4 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <ServicesHub />
            <AdBanner width={728} height={90} className="my-8 hidden md:block mx-auto" label="In-Content Ad" />
            <Portfolio />
            <PhotographyShowcase />
            <AdBanner width={728} height={90} className="my-8 hidden md:block mx-auto" label="In-Content Ad" />
            <BlogSection />
            <WhyChooseUs />
            <TestimonialsSlider />
            <AboutSection />
            <ContactSection />
          </div>
          <aside className="lg:col-span-3 space-y-8">
            <AdBanner width={300} height={250} label="Sidebar Ad" />
            <AdBanner width={300} height={600} label="Sidebar Skyscraper Ad" />
            <AdBanner width={300} height={250} label="Sidebar Ad 2" />
          </aside>
        </div>
      </main>
      
      <Footer />
      {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default App;

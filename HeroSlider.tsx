
import React, { useState, useEffect } from 'react';
import { Slide } from '../types';

const slidesData: Slide[] = [
    { id: 1, title: "Exquisite Banner Design", tagline: "Capture attention with visuals that convert. Custom designs for web and print.", imageUrl: "https://picsum.photos/1920/1080?random=1" },
    { id: 2, title: "Professional Photography", tagline: "Moments captured with artistry. Studio, event, and portrait sessions available.", imageUrl: "https://picsum.photos/1920/1080?random=2" },
    { id: 3, title: "Elegant Invitations", tagline: "Set the perfect tone for your event. Weddings, corporate, and special occasions.", imageUrl: "https://picsum.photos/1920/1080?random=3" },
    { id: 4, title: "Impactful Flyers", tagline: "Promote your business effectively with high-quality, eye-catching flyers.", imageUrl: "https://picsum.photos/1920/1080?random=4" },
    { id: 5, title: "Complete Branding Packages", tagline: "From logo to market presence, we build brands that stand out.", imageUrl: "https://picsum.photos/1920/1080?random=5" }
];

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            {slidesData.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-fixed"
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold font-poppins mb-4 drop-shadow-lg transition-all duration-500" key={slidesData[currentSlide].title}>
                    {slidesData[currentSlide].title}
                </h1>
                <p className="max-w-2xl text-lg md:text-xl mb-8 text-zinc-200 drop-shadow-md transition-all duration-500" key={slidesData[currentSlide].tagline}>
                    {slidesData[currentSlide].tagline}
                </p>
                <button className="bg-amber-400 text-black font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
                    Learn More
                </button>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;

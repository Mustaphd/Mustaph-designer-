
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
    { id: 1, name: "Aline G.", role: "Event Planner", quote: "Mustaph Designer delivered stunning invitations for our gala. The quality and creativity were beyond our expectations. Highly recommended!", avatarUrl: "https://picsum.photos/100/100?random=41", rating: 5 },
    { id: 2, name: "John K.", role: "Startup Founder", quote: "The branding package was a game-changer for my business. The logo is fantastic, and the business cards are top-notch. Very professional service.", avatarUrl: "https://picsum.photos/100/100?random=42", rating: 5 },
    { id: 3, name: "Marie Claire I.", role: "Marketing Manager", quote: "Fast, reliable, and incredibly talented. The social media ad designs have significantly boosted our engagement. Will definitely work with them again!", avatarUrl: "https://picsum.photos/100/100?random=43", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-zinc-600'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        ))}
    </div>
);

const TestimonialsSlider: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrent(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(sliderInterval);
    }, []);

    return (
        <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-2">What Our <span className="text-amber-400">Clients Say</span></h2>
            <p className="text-center text-zinc-400 mb-12">We are proud to have worked with amazing clients.</p>
            <div className="relative max-w-3xl mx-auto h-64 overflow-hidden">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
                            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-zinc-700" />
                            <p className="text-lg italic text-zinc-300 mb-4">"{testimonial.quote}"</p>
                            <div className="flex items-center justify-center space-x-4">
                                <StarRating rating={testimonial.rating} />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSlider;

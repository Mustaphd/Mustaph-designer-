
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/800/1000?random=50" alt="Mustaph Designer" className="rounded-lg shadow-2xl object-cover w-full h-full" />
                </div>
                <div className="font-poppins">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-amber-400">Mustaph Designer</span></h2>
                    <p className="text-zinc-300 leading-relaxed mb-6">
                        Founded on a passion for visual storytelling, Mustaph Designer has grown into a premier creative media brand in Rwanda. We believe that great design is a powerful communication tool that can transform brands and connect with audiences on a deeper level.
                    </p>
                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="text-xl font-semibold text-amber-400 mb-1">Our Mission</h3>
                            <p className="text-zinc-400">To provide exceptional, high-quality creative services that empower businesses and individuals to achieve their goals through compelling visual communication.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-amber-400 mb-1">Our Vision</h3>
                            <p className="text-zinc-400">To be the leading and most trusted creative partner in the region, known for innovation, reliability, and transformative design solutions.</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-amber-400 mb-1">Experience & Achievements</h3>
                            <p className="text-zinc-400">With over a decade of experience, we have successfully completed hundreds of projects for a diverse range of clients, from startups to established corporations, earning accolades for creativity and professionalism.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

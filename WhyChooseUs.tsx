
import React from 'react';

const features = [
    { icon: <IconRocket />, title: "Fast Delivery", description: "Your projects delivered on time, every time." },
    { icon: <IconResolution />, title: "High-Resolution Work", description: "Pixel-perfect quality for print and digital." },
    { icon: <IconEquipment />, title: "Professional Equipment", description: "State-of-the-art tools for premium results." },
    { icon: <IconPackage />, title: "Affordable Packages", description: "Custom packages to fit your budget and needs." },
    { icon: <IconCreative />, title: "Creative Direction", description: "Expert guidance to bring your vision to life." },
    { icon: <IconExperience />, title: "Experienced Designer", description: "Years of industry experience at your service." },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-16 bg-zinc-900 rounded-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-2">Why Choose <span className="text-amber-400">Us?</span></h2>
                <p className="text-center text-zinc-400 mb-12">The pillars of our commitment to excellence.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 text-amber-400 bg-zinc-800 p-3 rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-poppins">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Icons
function IconRocket() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; }
function IconResolution() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l-2 2" /></svg>; }
function IconEquipment() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1-1m5-5l-1-1" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12a7 7 0 1014 0 7 7 0 00-14 0z" /></svg>; }
function IconPackage() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>; }
function IconCreative() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>; }
function IconExperience() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>; }

export default WhyChooseUs;


import React from 'react';
import { Service } from '../types';

const servicesData: Service[] = [
    { icon: <IconDesign />, title: 'Invitation Design', description: 'Elegant and custom invitations for any occasion.' },
    { icon: <IconCamera />, title: 'Photography', description: 'Professional photo sessions for events and portraits.' },
    { icon: <IconBanner />, title: 'Banner Design', description: 'Eye-catching banners for digital and print media.' },
    { icon: <IconFlyer />, title: 'Flyers', description: 'Creative flyers to effectively promote your message.' },
    { icon: <IconPoster />, title: 'Posters', description: 'High-impact posters for events and marketing.' },
    { icon: <IconCard />, title: 'Business Cards', description: 'Unique business cards that make a lasting impression.' },
    { icon: <IconBranding />, title: 'Event Branding', description: 'Cohesive branding solutions for your events.' },
    { icon: <IconSocial />, title: 'Social Media Ads', description: 'Engaging ad creatives for social platforms.' },
    { icon: <IconLogo />, title: 'Logo Design', description: 'Memorable logos that define your brand identity.' },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="group bg-zinc-900 border border-zinc-800 p-6 rounded-lg text-center transition-all duration-300 hover:border-amber-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
        <div className="flex justify-center mb-4 text-amber-400 group-hover:text-amber-300 transition-colors">
            {service.icon}
        </div>
        <h3 className="text-xl font-bold font-poppins mb-2">{service.title}</h3>
        <p className="text-zinc-400 mb-4 text-sm">{service.description}</p>
        <button className="text-amber-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Service &rarr;
        </button>
    </div>
);


const ServicesHub: React.FC = () => {
    return (
        <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-2">Our Creative <span className="text-amber-400">Services</span></h2>
            <p className="text-center text-zinc-400 mb-10">We deliver professional and high-quality creative solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
};

// SVG Icons
function IconDesign() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 01-9-9 1 1 0 011-1h16a1 1 0 011 1 9 9 0 01-9 9zM12 11a1 1 0 100-2 1 1 0 000 2zM3 11a9 9 0 0118 0" /></svg>; }
function IconCamera() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }
function IconBanner() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>; }
function IconFlyer() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>; }
function IconPoster() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zM4 9h16M8 3v6" /></svg>; }
function IconCard() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7-8h.01M12 6h.01M17 6h.01M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" /></svg>; }
function IconBranding() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>; }
function IconSocial() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; }
function IconLogo() { return <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>; }

export default ServicesHub;

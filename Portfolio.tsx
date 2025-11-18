
import React, { useState, useMemo } from 'react';
import { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
    { id: 1, title: 'Corporate Event Branding', category: 'Branding', imageUrl: 'https://picsum.photos/600/400?random=11' },
    { id: 2, 'title': 'Summer Music Festival Flyer', 'category': 'Flyers', 'imageUrl': 'https://picsum.photos/600/400?random=12' },
    { id: 3, 'title': 'Wedding Invitation Suite', 'category': 'Invitations', 'imageUrl': 'https://picsum.photos/600/400?random=13' },
    { id: 4, 'title': 'E-commerce Website Banners', 'category': 'Banner Design', 'imageUrl': 'https://picsum.photos/600/400?random=14' },
    { id: 5, 'title': 'Tech Startup Logo', 'category': 'Branding', 'imageUrl': 'https://picsum.photos/600/400?random=15' },
    { id: 6, 'title': 'Restaurant Menu Flyer', 'category': 'Flyers', 'imageUrl': 'https://picsum.photos/600/400?random=16' },
    { id: 7, 'title': 'Product Launch Banners', 'category': 'Banner Design', 'imageUrl': 'https://picsum.photos/600/400?random=17' },
    { id: 8, 'title': 'Birthday Party Invitation', 'category': 'Invitations', 'imageUrl': 'https://picsum.photos/600/400?random=18' },
];

const categories = ['All', 'Branding', 'Flyers', 'Invitations', 'Banner Design'];

const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredItems = useMemo(() => {
        if (activeFilter === 'All') return portfolioData;
        return portfolioData.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-2">Featured <span className="text-amber-400">Work</span></h2>
            <p className="text-center text-zinc-400 mb-8">A glimpse into our creative portfolio.</p>
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition-all duration-300"></div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <h3 className="text-xl font-bold font-poppins">{item.title}</h3>
                            <p className="text-sm text-amber-300">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

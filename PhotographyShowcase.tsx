
import React from 'react';

const photos = [
    { src: 'https://picsum.photos/500/800?random=21', alt: 'Wedding Photo', category: 'Weddings' },
    { src: 'https://picsum.photos/500/300?random=22', alt: 'Corporate Event', category: 'Events' },
    { src: 'https://picsum.photos/500/500?random=23', alt: 'Studio Portrait', category: 'Studio' },
    { src: 'https://picsum.photos/500/700?random=24', alt: 'Creative Shoot', category: 'Creative' },
    { src: 'https://picsum.photos/500/400?random=25', alt: 'Outdoor Portrait', category: 'Portraits' },
    { src: 'https://picsum.photos/500/600?random=26', alt: 'Birthday Party', category: 'Events' },
];

const PhotographyShowcase: React.FC = () => {
    return (
        <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-2">Photography <span className="text-amber-400">Showcase</span></h2>
            <p className="text-center text-zinc-400 mb-10">Capturing life's most precious moments.</p>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {photos.map((photo, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg group break-inside-avoid">
                        <img className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" src={photo.src} alt={photo.alt} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-semibold bg-amber-500 px-2 py-1 rounded">{photo.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotographyShowcase;

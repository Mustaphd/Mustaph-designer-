
import React from 'react';
import AdBanner from './AdBanner';

const articles = [
    {
        title: "Tips for Best Photography",
        excerpt: "Discover our top 10 tips to elevate your photography skills, from lighting techniques to composition secrets...",
        imageUrl: "https://picsum.photos/800/600?random=31",
        category: "TUTORIALS"
    },
    {
        title: "Why Good Design Grows Your Business",
        excerpt: "We explore the psychological impact of great design and how it can directly influence your bottom line.",
        imageUrl: "https://picsum.photos/800/600?random=32",
        category: "BUSINESS"
    },
    {
        title: "Latest Projects by Mustaph Designer",
        excerpt: "A look back at some of our favorite projects from the last quarter, showcasing creativity and client success.",
        imageUrl: "https://picsum.photos/800/600?random=33",
        category: "SHOWCASE"
    }
];

const BlogSection: React.FC = () => {
    return (
        <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-2">From The <span className="text-amber-400">Blog</span></h2>
            <p className="text-center text-zinc-400 mb-10">Insights, news, and inspiration from our creative team.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div key={index} className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-amber-400/50 transition-all duration-300">
                        <div className="overflow-hidden">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <p className="text-amber-400 text-xs font-bold uppercase mb-2">{article.category}</p>
                            <h3 className="text-xl font-bold font-poppins mb-3 hover:text-amber-400 transition-colors"><a href="#">{article.title}</a></h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{article.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <AdBanner width={728} height={90} label="Inline Ad Banner" />
            </div>
        </section>
    );
};

export default BlogSection;

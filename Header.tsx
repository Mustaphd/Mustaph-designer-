
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; hasDropdown?: boolean }> = ({ href, children, hasDropdown }) => (
    <a href={href} className="flex items-center text-sm font-semibold uppercase tracking-wider text-white hover:text-amber-400 transition-colors duration-300 py-4 border-b-2 border-transparent hover:border-amber-400">
        {children}
        {hasDropdown && (
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        )}
    </a>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ["Home", "Services", "Portfolio", "Photography", "Invitations", "Banner Design", "Flyers", "Branding", "Blog", "Contact"];

    return (
        <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20 border-b border-zinc-800">
            <div className="max-w-[1300px] mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-3xl font-extrabold font-poppins tracking-tight">
                        <a href="#" className="text-white">MUSTAPH <span className="text-amber-400">DESIGNER</span></a>
                    </div>
                    <div className="hidden lg:flex items-center space-x-6">
                        {menuItems.map(item => <NavLink key={item} href="#">{item}</NavLink>)}
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-black absolute w-full left-0">
                    <nav className="flex flex-col items-center space-y-4 px-4 py-8">
                        {menuItems.map(item => <NavLink key={item} href="#">{item}</NavLink>)}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

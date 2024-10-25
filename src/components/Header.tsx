// src/components/Header.tsx
import { useState } from 'react';
import { FaBars, FaHome, FaInfo, FaBook, FaPhone, FaAppStore } from 'react-icons/fa';

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="bg-white-600 shadow-md">
            <div className="container mx-auto px-4 py-4
       flex justify-between items-center">
                <div className="text-xl font-bold text-black">Трегубов В. Д.</div>
                <nav className="hidden md:flex space-x-4 ml-5 mr-5">
                    <a href="/" className="flex items-center
           text-black font-bold">
                        <FaHome className="mr-1" /> Home
                    </a>
                    <a href="/about" className="flex items-center
           text-black font-bold">
                        <FaInfo className="mr-1" /> About
                    </a>
                    <a href="/skills" className="flex items-center
           text-black font-bold">
                        <FaBook className="mr-1" /> Skills
                    </a>
                    <a href="/projects" className="flex items-center
           text-black font-bold">
                        <FaAppStore className="mr-1" /> Projects
                    </a>
                    <a href="/contact" className="flex items-center
           text-black font-bold">
                        <FaPhone className="mr-1" /> Contact
                    </a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                        <FaBars size={24} /> {/* Hamburger icon for mobile */}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white-600 p-4
         space-y-2 ml-2 mr-2">
                    <a href="/" className="flex items-center 
          text-black font-bold">
                        <FaHome className="mr-2" /> Home
                    </a>
                    <a href="/about" className="flex items-center
           text-black font-bold">
                        <FaInfo className="mr-2" /> About
                    </a>
                    <a href="/skills" className="flex items-center 
          text-black font-bold">
                        <FaBook className="mr-2" /> Skills
                    </a>
                    <a href="/projects" className="flex items-center
           text-black font-bold">
                        <FaAppStore className="mr-2" /> Projects
                    </a>
                    <a href="/contact" className="flex items-center
           text-black font-bold">
                        <FaPhone className="mr-2" /> Contact
                    </a>
                </nav>
            )}
        </header>
    );
};
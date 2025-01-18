import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { menuItems } from '../data/menuItem'; // Импортируем данные для меню

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="bg-white-600 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-black">Трегубов В. Д.</div>
                <nav className="hidden md:flex space-x-4 ml-5 mr-5">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.link} className="flex items-center text-black font-bold">
                            <item.icon className="mr-1" /> {item.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
                        <FaBars size={24} /> {/* Иконка гамбургера для мобильной версии */}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white-600 p-4 space-y-2 ml-2 mr-2">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.link} className="flex items-center text-black font-bold">
                            <item.icon className="mr-2" /> {item.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

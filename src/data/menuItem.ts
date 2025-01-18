import { FaHome, FaInfo, FaBook, FaAppStore, FaPhone } from 'react-icons/fa';
import { MenuItem } from '../types/MenuItem';

export const menuItems: MenuItem[] = [
    {
        name: "Home",
        link: "/",
        icon: FaHome,
    },
    {
        name: "About",
        link: "/about",
        icon: FaInfo,
    },
    {
        name: "Skills",
        link: "/skills",
        icon: FaBook,
    },
    {
        name: "Projects",
        link: "/projects",
        icon: FaAppStore,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: FaPhone,
    },
];

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createContext, useState, useEffect } from "react";
import logo from '@/assets/logo.svg'
import ThemeToggle from '../theme-toggle/ThemeToggle';

export const SidebarContext = createContext()

const Sidebar = ({ children, isMobileMenuOpen, toggleMobileMenu }) => {
    const [expanded, setExpanded] = useState(true)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = () => {
        if (isSmallScreen) {
            toggleMobileMenu();
        } else {
            setExpanded((curr) => !curr);
        }
    };

    return (
        <aside
            className={`md:static fixed inset-y-0 left-0 z-50 bg-background transition-transform duration-300 ease-in-out transform 
                ${isSmallScreen
                    ? (isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full')
                    : 'translate-x-0'}`}
        >
            <nav className="h-full flex flex-col bg-background-alt border-r border-border shadow-sm">
                <div className={`${expanded ? 'p-4' : 'pl-4 pt-4'} pb-2 flex justify-between items-center mb-4`}>
                    <div className='flex items-center gap-4'>
                        <img src={logo} alt="logo" />
                        {expanded && <span className='text-3xl'>Base</span>}
                    </div>
                    <button
                        onClick={handleToggle}
                        className="p-1.5 rounded-lg"
                    >
                        {isSmallScreen ? (
                            <X size={24} />
                        ) : expanded ? (
                            <ChevronLeft size={40} />
                        ) : (
                            <ChevronRight size={30} className='ml-2' />
                        )}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className='p-8'>
                    <ThemeToggle />
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
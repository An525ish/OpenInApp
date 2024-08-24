import Sidebar from '@/components/sidebar/Sidebar';
import SidebarItem from '@/components/sidebar/SidebarItem';
import { Outlet } from 'react-router-dom';
import {
    LayoutDashboard,
    UploadCloud,
    FileText,
    CalendarClock,
    Calendar,
    Bell,
    Settings,
    Menu
} from 'lucide-react';
import { useEffect, useState } from 'react';

const sidebarItems = Object.freeze([
    {
        id: 'dashboard',
        icon: LayoutDashboard,
        text: 'Dashboard',
    },
    {
        id: 'upload',
        icon: UploadCloud,
        text: 'Upload',
    },
    {
        id: 'invoice',
        icon: FileText,
        text: 'Invoice',
    },
    {
        id: 'schedule',
        icon: CalendarClock,
        text: 'Schedule',
    },
    {
        id: 'calendar',
        icon: Calendar,
        text: 'Calendar',
    },
    {
        id: 'notification',
        icon: Bell,
        text: 'Notification',
    },
    {
        id: 'settings',
        icon: Settings,
        text: 'Settings',
    },
]);

const DashboardLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex'>
            {isSmallScreen && (
                <button
                    onClick={toggleMobileMenu}
                    className="fixed top-4 left-4 z-50 p-2 bg-background-alt rounded-md shadow-md"
                >
                    <Menu size={24} />
                </button>
            )}
            <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}>
                {sidebarItems.map(item => (
                    <SidebarItem
                        key={item.id}
                        id={item.id}
                        Icon={item.icon}
                        text={item.text}
                        alert={item.alert}
                    />
                ))}
            </Sidebar>
            <main className={`p-4 w-full h-screen overflow-y-auto scrollbar-hide`}>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;

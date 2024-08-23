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
    Settings
} from 'lucide-react';

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

    return (
        <div className='flex'>
            <Sidebar>
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
            <main className='p-4 w-full h-screen overflow-y-auto scrollbar-hide'>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;

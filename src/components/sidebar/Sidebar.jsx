import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createContext, useState } from "react";
import logo from '@/assets/logo.svg'
import ThemeToggle from '../theme-toggle/ThemeToggle';

export const SidebarContext = createContext()

const Sidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <aside className="h-screen bg-background-alt">
            <nav className="h-full flex flex-col border-r border-border shadow-sm">
                <div className={`${expanded ? 'p-4' : 'pl-4 pt-4'} pb-2 flex justify-between items-center mb-4`}>
                    <div className='flex items-center gap-4'>
                        <img src={logo} alt="logo" />
                        {expanded && <span className='text-3xl'>Base</span>}
                    </div>
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg"
                    >

                        {expanded ? <ChevronLeft size={40} /> : <ChevronRight size={30} className='ml-2' />}

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
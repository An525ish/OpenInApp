import { useContext, useState } from 'react';
import { SidebarContext } from './Sidebar';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ Icon, text, id }) => {
    const { expanded } = useContext(SidebarContext);
    const [active, setActive] = useState('dashboard');


    return (
        <NavLink to={`/${id}`} className={({ isActive }) => setActive(isActive)} >
            <li
                className={`relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer group ${active ? 'bg-gradient-background text-body' : 'hover:bg-hover-gradient text-body-700'}`}
            >
                <Icon className={`w-7 h-7 hover:fill-body-700 mr-2 ${active && 'fill-body'}`} />
                <span
                    className={`overflow-hidden capitalize transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
                >
                    {text}
                </span>
                {!expanded && (
                    <div
                        className={`absolute left-full capitalize rounded-md px-2 py-1 ml-6 text-body-700 bg-background-alt shadow-lg border border-border text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-30 whitespace-nowrap`}
                    >
                        {text}
                    </div>
                )}
            </li>
        </NavLink>
    );
}

export default SidebarItem;

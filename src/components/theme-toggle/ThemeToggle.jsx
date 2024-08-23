import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.remove('light');
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="flex items-center">
            <button
                onClick={toggleTheme}
                className={`relative flex items-center h-9 rounded-full w-16 ${isDark ? 'bg-grey-dark' : 'bg-grey/50'} transition-colors`}
                aria-label="Toggle theme"
            >
                <span className={`absolute -left-0.5 top-0.5 transform transition-transform ${isDark ? 'translate-x-8' : 'translate-x-8'}`}>
                    <span className={`absolute h-8 w-8 rounded-full shadow ${isDark ? 'bg-black/60' : 'bg-white'} flex items-center justify-center ${isDark ? 'translate-x-0' : '-translate-x-7'}`}>
                        {isDark ? <Moon color="white" size={16} /> : <Sun color="black" size={16} />}
                    </span>
                </span>
            </button>
        </div>
    );
};

export default ThemeToggle;

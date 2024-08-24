import PromotionalArea from '@/auth/PromotionalArea';
import SignInForm from '@/auth/SignInForm';
import { useState } from 'react';

const LoginPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`flex flex-col lg:flex-row min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <PromotionalArea isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <SignInForm isDarkMode={isDarkMode} />
        </div>
    );
};

export default LoginPage;
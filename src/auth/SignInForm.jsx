import { UserContext } from '@/context/UserContext';
import { useGoogleLogin } from '@react-oauth/google';
import { Chrome, Apple, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useContext, useState } from 'react';
import logo from '@/assets/logo.svg';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { setUser } = useContext(UserContext);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            setUser(true);
        },
        onError: () => console.log('Login Failed'),
    });

    const validateForm = () => {
        let formErrors = {};
        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!password) {
            formErrors.password = 'Password is required';
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
        }
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setUser(true)
            console.log('Form is valid');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-8">
            <div className="max-w-md w-full space-y-8">
                <div className="md:hidden flex items-center justify-between w-2/5 mx-auto mb-8 bg-white py-1 px-2 rounded-3xl">
                    <img src={logo} alt="Base Logo" className="mr-2" />
                    <span className="text-black text-xl font-bold mr-4">Base</span>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Sign In</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to your account</p>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => googleLogin()}
                        className="flex-1 flex items-center justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-background-alt hover:bg-gray-50"
                    >
                        <Chrome className="mr-2" /> Sign in with Google
                    </button>
                    <button className="flex-1 flex items-center justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-background-alt hover:bg-gray-50">
                        <Apple className="mr-2" /> Sign in with Apple
                    </button>
                </div>
                <form className="mt-8 space-y-6 bg-background-alt shadow p-8 rounded-lg" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email-address" className="">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={`mt-2 bg-background w-full px-3 py-2 ${errors.email ? 'border-red' : ''
                                    } rounded-md outline-none`}
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="mt-2 text-sm text-red">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={`mt-2 bg-background w-full px-3 py-2 ${errors.password ? 'border-red' : ''
                                    } rounded-md outline-none`}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="mt-2 text-sm text-red">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue hover:text-blue/50">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/70 transition"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account?{' '}
                    <a href="#" className="font-medium text-blue hover:text-blue/50">
                        Register here
                    </a>
                </p>
                <div className="flex justify-center space-x-6 mt-8">
                    <Github size={40} className="bg-grey-light p-1.5 fill-background-alt/70 stroke-background/10 rounded-full hover:text-grey/60 cursor-pointer" />
                    <Twitter size={40} className="bg-grey-light p-1.5 fill-background-alt/70 stroke-background/10 rounded-full hover:text-grey/60 cursor-pointer" />
                    <Linkedin size={40} className="bg-grey-light px-1.5 fill-background-alt/70 stroke-background/10 rounded-full hover:text-grey/60 cursor-pointer" />
                    <MessageCircle size={40} className="bg-grey-light p-1.5 fill-background-alt/70 stroke-background/10 rounded-full hover:text-grey/60 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
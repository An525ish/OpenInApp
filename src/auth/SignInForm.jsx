import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useGoogleLogin } from '@react-oauth/google';
import { Chrome, Apple, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/logo.svg';
import { UserContext } from '@/context/UserContext';

const SignInForm = () => {
    const { setUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            setUser(true);
            toast.success('Successfully signed in with Google');
        },
        onError: () => toast.error('Google login failed'),
    });

    const onSubmit = (data) => {
        console.log('Form data:', data);
        setUser(true);
        toast.success('Successfully signed in');
    };

    const validatePassword = (value) => {
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
        if (!/[^A-Za-z0-9]/.test(value)) return "Password must contain at least one special character";
        return true;
    };

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-8">
            <div className="max-w-md w-full space-y-8">
                <div className="md:hidden flex items-center justify-between w-2/5 mx-auto mb-8 bg-white py-1 px-2 rounded-3xl">
                    <img src={logo} alt="Base Logo" className="mr-2" />
                    <span className="text-black text-xl font-bold mr-4">Base</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Sign In</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to your account</p>
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
                <form className="mt-8 space-y-6 bg-background-alt shadow p-8 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email-address" className="">Email address</label>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                className={`mt-2 bg-background w-full px-3 py-2 ${errors.email ? 'border-red' : ''} rounded-md outline-none`}
                                placeholder="Email address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Email is invalid"
                                    }
                                })}
                            />
                            {errors.email && <p className="mt-2 text-sm text-red">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="">Password</label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                className={`mt-2 bg-background w-full px-3 py-2 ${errors.password ? 'border-red-500' : ''} rounded-md outline-none`}
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    },
                                    validate: validatePassword
                                })}
                            />
                            {errors.password && <p className="mt-2 text-sm text-red">{errors.password.message}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <a href="#" className="text-sm font-medium text-blue hover:text-blue/50">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/70 transition"
                    >
                        Sign In
                    </button>
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

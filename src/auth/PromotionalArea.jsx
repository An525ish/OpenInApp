import illiustration from '@/assets/illiustration.svg';
import logo from '@/assets/logo.svg';
import ThemeToggle from '@/components/theme-toggle/ThemeToggle';

const PromotionalArea = () => {
    return (
        <div className="lg:w-1/2 bg-primary p-8 lg:p-20 md:block hidden">
            <div className="h-full relative mx-auto shadow bg-[#4b58d7] border-4 border-green md:p-12 p-8">
                <div className="flex items-center mb-8 bg-white-pure w-fit py-1 px-2 rounded-3xl">
                    <img src={logo} alt="Base Logo" className="mr-2" />
                    <span className="text-black text-xl font-bold">Base</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                    Generate detailed reports with just one click
                </h1>
                <div className="absolute right-0 bottom-0  mt-8">
                    <img
                        src={illiustration}
                        alt="Person with camera"
                        className="rounded-lg h-80"
                    />
                </div>
                <div className='absolute bottom-12 left-12'>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default PromotionalArea;
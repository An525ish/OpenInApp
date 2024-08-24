import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-2xl text-gray-700 mt-4">Page not found</p>
            <p className="mt-2 text-lg text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
            <Link to="/" className="mt-6 text-indigo-500 hover:text-indigo-600 text-lg font-semibold">
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;

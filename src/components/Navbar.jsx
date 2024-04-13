import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true);
    const [isProp, setIsProp] = useState(false);
    const [token, setToken] = useState(false);

    const notify = () => toast.success('✅️ Logout Done!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    useEffect(() => {
        let storedToken = localStorage.getItem("auth");
        let prop = localStorage.getItem("prop");
        if (storedToken) {
            setToken(storedToken);
            setIsProp(prop);
        }
        console.log(token)
    }, [])

    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('tokken');
        localStorage.removeItem('auth');
        localStorage.removeItem('prop');
        localStorage.removeItem('user');
        setToken(false);
        notify();
        navigate('/login');
        // Optional: Redirect to login page or any other desired action
    };

    const handleLogin = () => {
        navigate('/login');
    }

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Set the active tab
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <ToastContainer />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="h-full w-20 overflow-hidden">
                        <img src="/logo.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NucleoNex</span>
                </Link>
                {menu && <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    {token && <button onClick={handleLogout} className="bg-blue-700 text-white text-xl border-white font-bold tracking-wider px-2 capitalize py-1 rounded-lg">
                        logout
                    </button>}
                    {!token && <button onClick={handleLogin} className="bg-blue-700 text-white text-xl border-white font-bold tracking-wider px-2 capitalize py-1 rounded-lg">
                        login
                    </button>}
                </div>}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex text-lg flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        {isProp && <li>
                            <a href="/attendance" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tools</a>
                        </li>}
                        {!isProp && <li>
                            <a href="/studatten" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Attendance</a>
                        </li>}
                        <li>
                            <a href="/project" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                        </li>
                        <li>
                            <a href="/team" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
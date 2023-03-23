import React, { useState, useEffect } from 'react';


const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(() => {
        const body = document.querySelector('body');
        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <div id="pertama" className=" bg-blue-500 dark:bg-blue-900">

                <div className='flex justify-center'>
                    <img alt="Logo" className=" w-12" src='logo192.png' />
                </div>
            </div>
            <div id="pertama" className=" bg-blue-400 text-zinc-800 dark:bg-blue-800  top-0 sticky z-10">

                <div id="header" className="container flex ml-20 items-center py-4 justify-center ">

                    {/* button buat toggle darkmode */}
                    <div className=" absolute left-14">
                        <button
                            className="p-4 dark:bg-indigo-200 bg-yellow-200 text-white rounded-full w-12 h-12 flex justify-center items-center"
                            onClick={handleTheme}
                        >
                            {theme === 'light' ? '☀️' : '🌙'}
                        </button>
                    </div>
                    {/* endbutton buat toggle darkmode */}

                    <div className="konten flex space-x-96 ">
                        <a href="/" className="kolom_3 text-gray-600 dark:text-slate-100 hover:text-gray-800 text-xl">Hallo</a>
                        <a href="/portofolio" className="kolom_3 kolom_3_tengah text-gray-600 dark:text-slate-100 hover:text-gray-800  text-xl">Karya Saya</a>
                        <a href="/kontak" className="kolom_3 text-gray-600 dark:text-slate-100 hover:text-gray-800 text-xl" >Kontak</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Navbar;


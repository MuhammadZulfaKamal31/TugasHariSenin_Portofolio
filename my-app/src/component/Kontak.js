import React, { useState, useEffect } from 'react';

const Kontak = () => {

    // untuk mengubah bagian ini menjadi darkmode}}
    const [theme,] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const body = document.querySelector('body');
        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    // akhir untuk mengubah bagian ini menjadi darkmode}}

    return (
        <>
            {/* karena pakai daisy ui */}
            <div className={`bg-white text-zinc-800 dark:bg-neutral-800 dark:text-white`}>
                {/* karena pakai daisy ui */}
                <div className="container mx-auto py-10">
                    <h2 className="text-center text-3xl font-bold mb-8">Kontak Saya</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 p-4">
                            <form action="" novalidate onSubmit="return validasi(this)">
                                <input type="text" placeholder="Nama" className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 dark:bg-white dark:text-black bg-slate-100" />
                                <input type="email" name="pesan" placeholder="Email" className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 dark:bg-white dark:text-black bg-slate-100" />
                                <textarea name="pesan" placeholder="Pesan" cols="30" rows="10" className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 dark:bg-white dark:text-black bg-slate-100"></textarea>
                                <input type="submit" name="submit" value="Kirim" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300" />
                            </form>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8153465.141668115!2d100.54967609001922!3d3.7700724556199026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1669856552983!5m2!1sid!2sid" width="600" height="370" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Kontak;
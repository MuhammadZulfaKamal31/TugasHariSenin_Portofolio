import React from 'react';

const Halaman = () => {
    return (
        <>
            <div className="bg-cover bg-center h-screen pt-36" style={{ backgroundImage: "url('0.jpeg')" }}>
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="bg-blue-600 bg-opacity-70 text-white text-center py-20 rounded-md mx-20">
                        <h1 className="text-4xl mb-6">Selamat Datang di Portofolio <br></br>Website Afluz Leveling</h1>
                        <a href="#kedua" id="sd_1" className="inline-block border-2 border-white rounded px-5 py-2 hover:bg-white hover:text-blue-600 transition-colors duration-300">Lihat Karya</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Halaman;

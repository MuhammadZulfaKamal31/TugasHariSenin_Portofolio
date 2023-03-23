
const Karya = (props) => {

    const items = [
        {
            judul: props.karya1,
            title: props.deskripsi1,
            gambar: "GamingBros.png"
        },
        {
            judul: "Judul Karya",
            title: "ini deskripsi singkat tentang portofolio saya",
            gambar: "logo512.png"
        },
        {
            judul: "Judul Karya",
            title: "ini deskripsi singkat tentang portofolio saya",
            gambar: "logo512.png"
        },
        {
            judul: "Judul Karya",
            title: "ini deskripsi singkat tentang portofolio saya",
            gambar: "logo512.png"
        },
        {
            judul: "Judul Karya",
            title: "ini deskripsi singkat tentang portofolio saya",
            gambar: "logo512.png"
        },
        {
            judul: "Judul Karya",
            title: "ini deskripsi singkat tentang portofolio saya",
            gambar: "logo512.png"
        }
    ]
    return (
        <>
            <div className={` bg-blue-600 text-zinc-800 dark:bg-blue-900`}>
                <div id="kedua" className="  py-20">
                    <div className="konten">
                        <h2 className="text-center text-white text-4xl pb-20">Karya Saya</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 justify-around mx-10">
                            {/* untuk looping bagian items */}
                            {items.map(({ judul, title, gambar }, i) => (
                                <a href="/portofolio" className="block"
                                    key={`intorduction_items_${i}`}>
                                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="setiap_karya_gambar mb-2">
                                            <img src={gambar} alt="" className=" h-[194px] pl-10"></img>
                                            <p className="text-center text-red-600 font-bold">{judul}</p>
                                        </div>
                                        <p className="deskripsi text-gray-700 text-center">{title}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Karya;
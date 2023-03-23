
const Portofolio = (props) => {
    return (
        <>
            {/* ternyata bisa guys tanpa deklarasi usestate lagi cukup tambahin dark: ini saja hahah*/}
            <div class="carousel w-full relative z-0 h-[1150px] bg-white text-zinc-800 dark:bg-neutral-700 dark:text-white">
                {/* ternyata bisa guys tanpa deklarasi usestate lagi cukup tambahin dark: ini saja */}

                <div id="slide1" class="carousel-item relative w-full">
                    <a href="#sd" className=" w-full mr-40 h-72">
                        <img alt="gambar" src="1.png" class="w-full bg-cover m-20 h-[600px] " />
                    </a>
                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute bottom-1/4 left-32 z-2 text-white">
                        <p class="text-3xl bg-red-600 py-2 px-6 w-max">Gaming Bros</p>
                        <p class="bg-black mt-2 py-2 px-6">Website jual beli kaset PS </p>
                    </div>
                    <div className="">
                        <div className=" absolute bottom-1 mb-2 text-black dark:text-white left-20 right-20">
                            <p>Website jual beli kaset PS adalah sebuah platform online yang menyediakan layanan untuk membeli dan menjual kaset permainan PlayStation secara digital. Dalam hal ini, para pengguna dapat membeli kaset game PS dalam bentuk digital atau langsung mengunduh game tersebut ke konsol mereka.

                                Website ini memiliki antarmuka pengguna yang ramah dan mudah digunakan, dengan fitur pencarian yang memungkinkan pengguna untuk mencari game dengan cepat dan mudah. Selain itu, situs ini juga menyediakan deskripsi detail dan gambar-gambar game, sehingga pengguna dapat memeriksa sebelum membeli.

                                Selain itu, website ini juga menawarkan sistem pembayaran yang aman dan terpercaya. Pengguna dapat melakukan transaksi dengan berbagai metode pembayaran yang berbeda, seperti kartu kredit, PayPal, dan lain-lain. Ada juga sistem keamanan dan perlindungan pembeli yang disediakan oleh situs ini, yang memastikan bahwa transaksi berjalan lancar dan aman untuk semua pihak yang terlibat.

                                Situs ini juga memiliki komunitas yang aktif dan ramai, di mana pengguna dapat berbagi pengalaman mereka dengan game, memberikan ulasan, atau membagikan tips dan trik. Ada juga forum diskusi yang tersedia, di mana pengguna dapat mengajukan pertanyaan atau berdiskusi dengan pengguna lain.

                                Selain itu, website jual beli kaset PS juga menyediakan penawaran dan diskon yang menarik secara teratur, sehingga pengguna dapat memperoleh game dengan harga yang lebih murah dari biasanya. Ada juga fitur wishlist yang memungkinkan pengguna untuk menyimpan game yang mereka ingin beli nanti.</p>
                        </div>
                    </div>
                </div>


                <div id="slide2" class="carousel-item relative w-full satu">
                    <a href="#sd" className=" w-full mr-40 h-72">
                        <img alt="gambar" src="0.jpeg" class="w-full bg-cover m-20 h-[600px] " />

                    </a>                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute bottom-1/4 left-32 z-2 text-white">
                        <p class="text-3xl bg-red-600 py-2 px-6 w-max">Gaming Bros</p>
                        <p class="bg-black mt-2 py-2 px-6">Website jual beli kaset PS </p>
                    </div>

                    <div className="">
                        <div className=" absolute bottom-2 text-black dark:text-white left-20 right-20">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <a href="#sd" className=" w-full mr-40 h-72">
                        <img alt="gambar" src="0.jpeg" class="w-full bg-cover m-20 h-[600px] " />
                    </a>                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute bottom-1/4 left-48 z-2 text-white">
                        <p class="text-3xl bg-red-600 py-2 px-6 w-max">
                            HOGWARTS LEGACY (2023)
                        </p>
                        <p class="bg-black mt-2 py-2 px-6">
                            Genre: Entertainment, Open world, Narrative, Adventure game
                        </p>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <a href="#sd" className=" w-full mr-40 h-72">
                        <img alt="gambar" src="0.jpeg" class="w-full bg-cover m-20 h-[600px] " />
                    </a>                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute bottom-1/4 left-48 z-2 text-white">
                        <p class="text-3xl bg-red-600 py-2 px-6 w-max">
                            HOGWARTS LEGACY (2023)
                        </p>
                        <p class="bg-black mt-2 py-2 px-6">
                            Genre: Entertainment, Open world, Narrative, Adventure game
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Portofolio;
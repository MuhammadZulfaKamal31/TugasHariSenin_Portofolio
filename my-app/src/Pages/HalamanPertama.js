import Halaman from "../component/Halaman";
import Karya from "../component/Karya";
import Kontak from "../component/Kontak";


const HalamanPertama = () => {
    return (
        <>
            <Halaman />
            <Karya karya1={"Gaming Bros"}
                deskripsi1={"Website MarketPlace tentang jual beli kaset ps"} />
            <Kontak />
        </>
    )
}

export default HalamanPertama;
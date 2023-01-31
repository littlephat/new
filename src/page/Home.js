import Nav from "../component/Nav";
import ImageSlider from "../component/ImageSlider";
import comb from '../pic/comb.jpg'
import aveda from '../pic/aveda.jpg'
import boom from '../pic/boom.jpg'
import guasha from '../pic/guasha.jpg'
import Product from "../component/Product"
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const slides = [
        comb,
        aveda,
        boom,
        guasha,
    ];

 const user = useSelector((state) => state.user)
 if (!user.id) return <Navigate to= {'login'}/>

    return (
        <div className="flex-col w-full h-auto bg-cover justify-center border-amber-200 border-4 overflow-y-scroll" >
            <Nav />
            <div className="w-screen justify-center"> 
            <ImageSlider slides={slides} />
            <Product/>
            </div>
        </div>
    )
}
export default Home;
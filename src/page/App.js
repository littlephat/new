import Nav from "../component/Nav";
import ImageSlider from "../component/ImageSlider";
import Cart from "../component/Cart";
import comb from '../pic/comb.jpg'
import aveda from '../pic/aveda.jpg'
import boom from '../pic/boom.jpg'
import guasha from '../pic/guasha.jpg'
import Product from "../component/Product"
function App() {
    const slides = [
        comb,
        aveda,
        boom,
        guasha,
    ];

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
export default App;
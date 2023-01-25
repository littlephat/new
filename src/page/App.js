import Nav from "../component/Nav";
import ImageSlider from "../component/ImageSlider";
import comb from '../pic/comb.jpg'
import aveda from '../pic/aveda.jpg'
import boom from '../pic/boom.jpg'
import guasha from '../pic/guasha.jpg'
function App() {
    const slides = [
        <img className="w-screen h-screen bg-cover bg-center" src={comb} alt='1' />,
        <img className="w-screen h-screen bg-cover bg-center" src={aveda} alt='2' />,
        <img className="w-screen h-screen bg-cover bg-center" src={boom} alt='3' />,
        <img className="w-screen h-screen bg-cover bg-center" src={guasha} alt='4' />,
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return (
        <div className="w-full h-full justify-center flex-col">
            <Nav />
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}
export default App;
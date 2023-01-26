import Nav from "../component/Nav";
import NewItems from "../component/NewItems";
import TopHitzSlider from "../component/TopHitzSlider";
import K from "../pic/k3.jpg"
import L from "../pic/l.jpg"
import Twinkle from "../pic/Twinkle.jpg"
import Tce from "../pic/3ce.jpg"
import Tce1 from "../pic/3ce1.jpg"
import Tce2 from "../pic/3ce2.jpg"

function collections() {
    const TopHits= [
        K,
        L,
        Twinkle,
    ];
    
    const newitemz= [
        Tce,
        Tce1,
        Tce2,
    ];
    return(
    <div className="flex-col w-full h-screen justify-center">
            <Nav />
            <TopHitzSlider TopHits={TopHits} />
            <NewItems NewItems={newitemz} />
        </div>
    )
}
export default collections;
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
    const TopHits = [
        K,
        L,
        Twinkle,
    ];

    const newitemz = [
        Tce,
        Tce1,
        Tce2,
    ];
    return (
        <div className="flex-col w-full h-full justify-center">
          <Nav />
            <div className="flex-col w-full h-full justify-center">
                <TopHitzSlider TopHits={TopHits} />
                <NewItems newitemz={newitemz} />
            </div>
        </div>
    )
}
export default collections;
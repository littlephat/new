import Nav from "../component/Nav";
import Products from "../component/Product";
function allproduct() {
    return (
        <div className="w-full h-full justify-center flex-col ">
                <Nav />
            <div>
                <Products />
            </div>
        </div>
    )
}
export default allproduct;
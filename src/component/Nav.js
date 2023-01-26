import { Link } from "react-router-dom";
import {
    ShoppingCart,
    AccountCircle,
    MoreHoriz,
    FavoriteBorder
} from "@mui/icons-material";
const Nav = () => {
    return (
        <div className=" flex justify-center overflow-hidden">
            <nav className="flex w-full">
                    <div className="flex justify-between items-center w-full h-12 bg-amber-200">
                        <div className=" flex font-sans cursor-pointer m-5">
                            <il className="px-2.5 py-1 underline underline-offset-8 text-zinc-800 font-bold text-sm">
                                <Link to="/">labellskin.lab</Link>
                            </il>
                            <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                                <Link to="/Collections">Collections</Link>
                            </il>
                            <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                                <Link to="/AllProducts">All Products</Link>
                            </il>
                            <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                                <Link to="/Payment">Payment Method</Link>
                            </il>
                            <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                                <Link to="/ContactUs">Contact Us</Link>
                            </il>
                        </div>
                        <div className="flex justify-between m-5">
                            <il className="px-2 py-2 text-white hover:text-cyan-500">
                                <ShoppingCart/> 
                            </il>
                            <il className="px-2 py-2 text-white hover:text-cyan-500">
                                <FavoriteBorder/> 
                            </il>
                            <il className="px-2 py-2 text-white hover:text-cyan-500">
                                <AccountCircle/> 
                            </il>
                            <il className="px-2 py-2 text-white hover:text-cyan-500">
                                <MoreHoriz/> 
                            </il>
                        </div>
                    </div>
                </nav>
        </div>

    )
};
export default Nav;

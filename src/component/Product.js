import comb from '../pic/comb.jpg'
import aveda from '../pic/aveda.jpg'
import boom from '../pic/boom.jpg'
import guasha from '../pic/guasha.jpg'
const ProductItems = (props) => (
    <div>
        <img className="w-36 h-36 border border-zinc-300" src={props.pic} />
        <div className='flex justify-between'>
        <p className=" items-center font-sans font-bold">{props.name}</p>
        <p className='p-2 font-sans text-sm'>{props.price}</p>
        </div>
    </div>
)
const Products = () => {
    return (
        <div className="flex w-full h-screen justify-between items-starts cursor-pointer ">
            <div className="flex-col h-full w-1/4 px-3 py-2">
                <il>
                    <p className="font-sans hover:bg-amber-200 rounded-3xl w-24 px-4 py-1.5 m-4">Clothes</p>
                </il>
                <il>
                    <p className="font-sans hover:bg-amber-200 rounded-3xl w-20 px-4 py-1.5 m-4">Pants</p>
                </il>
                <il>
                    <p className="font-sans hover:bg-amber-200 rounded-3xl w-24 px-4 py-1.5 m-4">Pajamas</p>
                </il>
                <il>
                    <p className="font-sans hover:bg-amber-200 rounded-3xl w-20 px-4 py-1.5 m-4">Shoes</p>
                </il>
                <il>
                    <p className="font-sans hover:bg-amber-200 rounded-3xl w-16 px-4 py-1.5 m-4">Bags</p>
                </il>
                <il>
                    <p className="font-sans hover:bg-amber-200 rounded-3xl w-32 px-4 py-1.5 m-4">Accessories</p>
                </il>
            </div>
            <div className="w-screen h-full px-16 cursor-pointer justify-center m-4 ">
                <div className="flex items-center justify-between w-3/4 py-3 ">
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                    <ProductItems pic={aveda} name={'aveda'} price={'299 baht'} />
                    <ProductItems pic={guasha} name={'guasha'} price={'399 baht'} />
                    <ProductItems pic={boom} name={'boom'} price={'499 baht'} />
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                </div>
                <div className="flex items-center justify-between w-3/4 py-3">
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                    <ProductItems pic={aveda} name={'aveda'} price={'299 baht'} />
                    <ProductItems pic={guasha} name={'guasha'} price={'399 baht'} />
                    <ProductItems pic={boom} name={'boom'} price={'499 baht'} />
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                </div>
                <div className="flex items-center justify-between w-3/4 py-3">
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                    <ProductItems pic={aveda} name={'aveda'} price={'299 baht'} />
                    <ProductItems pic={guasha} name={'guasha'} price={'399 baht'} />
                    <ProductItems pic={boom} name={'boom'} price={'499 baht'} />
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                </div>
                <div className="flex items-center justify-between w-3/4 py-3">
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                    <ProductItems pic={aveda} name={'aveda'} price={'299 baht'} />
                    <ProductItems pic={guasha} name={'guasha'} price={'399 baht'} />
                    <ProductItems pic={boom} name={'boom'} price={'499 baht'} />
                    <ProductItems pic={comb} name={'comb'} price={'199 baht'} />
                </div>
            </div>
        </div>
    )
}
export default Products;
import data from "@/components/data/products"
import AddToCart from "@/components/AddToCart"
import Image from "next/image"
import Link from "next/link"


const ProductDetails = ({params}: {params:{slug:string}}) => {
  const product = data.products.find((item) => item.slug === params.slug)
  if(!product){
    return <h2>Product not Found</h2>
  }
  return (
    <>
    <article>
      <Link href={"/"}>Back Home Page</Link>
    </article>
    <article className="grid md:grid-cols-4 md:gap-3">
    <div className="md:col-span-2">
    <Image src={product.image} alt={product.name} 
    width={640} 
    height={580}
    sizes="100vw"
    style={{width:"100%", height:"auto"}}
    />
    </div>

    <div>
    <ul className="space-y-4">
     <li>
      <h2 className="text-xl">{product.name}</h2>
     </li>
     <li>
      {product.rating} of {product.numReviews} reviews
     </li>
     <li>
      {product.brand}
     </li>
     <li>
      <div className="divider"></div>
     </li>
     <li>
      Descriprion: <p>{product.desc}</p>
     </li>
    </ul>
    </div>
     <div>
      <div className="card bg-base-200 shadow-xl mt-4 md:mt-0">
        <div className="card-body">
        <div className="mb-2 flex justify-between">
        <div>Price:</div>
        <div>£{product.price}</div>
        </div>
        <div className="mb-2 flex justify-between">
        <div>Status:</div>
        <div>{product.countInStock > 0 ? "In stock" : "Out of stock"}</div>
        </div>

       {product.countInStock !== 0 &&(
        <div className="card-actions justify-center">
        <AddToCart  item={{...product, qty: 0, color: "", size: ""}} />
        </div>
       )}

        </div>
      </div>
     </div>


    </article>
    </>
  )
}

export default ProductDetails
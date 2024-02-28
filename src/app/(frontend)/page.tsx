import ProductItem from "@/components/Products/ProductItems";
import data from "@/components/data/products";

export default function Home() {
  return (
    <>
    <div className="text-2xl py-2">
     <h2 className="text-center py-7 text-2xl">Latest Products</h2>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
     {
      data.products && data.products.map((product) => (
      <ProductItem key={product.slug} product={product} />
      ))
     }
     </div>
    </div>
    </>
  );
}

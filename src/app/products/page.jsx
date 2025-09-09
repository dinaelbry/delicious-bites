// import ProductCard from "../../components/ProductCard";
import products from "../../data/productsData"; 
import FeaturedProducts from "../../components/FeaturedProducts";

export default function ProductsPage() {
  return (
    <div>
      <div className="heading title mt-5 py-5 text-center bg-olive text-light d-flex flex-column align-items-center justify-content-center">
        <h3>
          <span>Our</span> Products
        </h3>
        <p className="mb-3 w-100">
          Discover our selection of premium food and beverage products, crafted
          with care using the finest ingredients.
        </p>
      </div>

      <div className="container">
        <FeaturedProducts showFilters={true} products={products} />{" "}
        {/*show all products*/}
      </div>
    </div>
  );
}

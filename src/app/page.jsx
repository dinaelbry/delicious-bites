import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Hero from "../components/Hero";
import products from "../data/productsData"; // products
import FeaturedProducts from "../components/FeaturedProducts";
import OurStory from "../components/OurStory";
import Feedback from "../components/Feedback";

export default function HomePage() {
  return (
    <>
      <main>
        {/* hero */}
        <Hero />
        {/* products */}
        <div className="featured-products heading bg-cream">
          <h3 className="text-center">
            <span> Feature</span> Products
          </h3>
          <div className="products">
            <FeaturedProducts limit={3} products={products} />
          </div>
        </div>
        {/* about us */}
        <OurStory />
        {/* feedback */}
        <Feedback />
      </main>
    </>
  );
}

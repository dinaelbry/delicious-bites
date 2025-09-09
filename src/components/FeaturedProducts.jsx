// src/components/FeaturedProducts.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProducts({ limit, showFilters = false, products }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // filter based on caegory
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  //  limit if pass it
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  const categories = ["All", "Beverages", "Bakery", "Pantry", "Dairy"];

  return (
    <div className="featured-products ">
      {/* if showfilters=true */}
      {showFilters && (
        <div className="filter-buttons text-center mb-5 pb-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn-custom mx-2 ${
                selectedCategory === category ? "" : "btn-selected"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="row g-5 mb-4">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
          >
            <div className="card rounded-4 w-100">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body py-4">
                <h5 className="card-title fs-4" data-category={product.category}>
                  {product.title}
                </h5>{" "}
                <p className="card-text py-2 fs-5 txt-gray">{product.desc}</p>
                <div className="d-flex justify-content-between gap-5">
                  <span className="">
                    <sup>$</sup> {product.price}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="btn-custom"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div className="all text-center mt-5 pt-5">
          <Link href="/products" className="btn-custom ms-5">
            View All Products
          </Link>
        </div>
      )}
    </div>
  );
}

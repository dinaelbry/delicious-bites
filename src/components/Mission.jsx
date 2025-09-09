import React from "react";

export default function Mission() {
  return (
    <div className="mission bg-cream py-5 ">
      <div className="heading text-center">
        <h3>
          <span> Our </span> Mission
        </h3>
        <p className="para txt-gray fw-medium ">
          We believe that good food brings people together and nourishes both
          body and soul. Our mission is to create products that delight the
          senses, support sustainable food systems, and celebrate the rich
          traditions of culinary craftsmanship.
        </p>
      </div>
      <div className="container">
        <div className="row text-center g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <a href="#" className="icon">
                <i className="fa-solid fa-check"></i>
              </a>
              <h5>Quality Ingredients</h5>
              <p>
                We source the finest ingredients from trusted suppliers who
                share our commitment to quality and sustainability.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <a href="#" className="icon">
                <i className="fa-solid fa-scale-unbalanced-flip"></i>
              </a>
              <h5>Traditional Methods</h5>
              <p>
                We honor time-tested techniques and methods that bring out the
                best flavors and textures in our products.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <a href="#" className="icon">
                <i className="fa-solid fa-globe"></i>
              </a>
              <h5>Sustainability</h5>
              <p>
                We're committed to environmentally responsible practices
                throughout our supply chain and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function OurStory() {
  return (
    <div >
      <div className="our-home d-flex align-items-center justify-content-around ">
        <div className="heading ">
          <h3>
            <span> Our </span>Story{" "}
          </h3>
          <div className="info txt-gray ">
            <p>
              At Delicious Bites, we believe in the power of good food to bring
              people together. Our journey began with a simple passion for
              creating products that delight the senses and nourish the body.
            </p>
            <p>
              Today, we continue to source the finest ingredients from trusted
              suppliers, crafting food and beverages that honor traditional
              techniques while embracing innovative flavors.
            </p>
          </div>
        </div>

          <img
            className="our-img rounded-4"
            src="./images/kitchen.avif"
            alt=""
          />
      </div>
    </div>
  );
}

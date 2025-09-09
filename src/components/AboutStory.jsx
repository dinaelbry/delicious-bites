import React from "react";

export default function OurStory() {
  return (
    <div>
      <div className="story d-flex align-items-center justify-content-around gap-5 my-5 py-3  container">
        <div className="heading ">
          <h3>
            <span> Our </span>Story{" "}
          </h3>
          <div className="info py-2 me-5 txt-gray fw-medium">
            <p>
              Delicious Bites was founded in 2010 with a simple mission: to
              create exceptional food and beverage products using high-quality
              ingredients and traditional techniques.
            </p>
            <p>
              What began as a small operation in a home kitchen has grown into a
              beloved brand known for its commitment to quality, sustainability,
              and incredible flavors.
            </p>
            <p>
              Today, we continue to handcraft our products in small batches,
              ensuring that each item meets our exacting standards before it
              reaches your table.
            </p>
          </div>
        </div>

        <img
          className="story-img rounded-4"
          src="./images/about.avif"
          alt=""
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}

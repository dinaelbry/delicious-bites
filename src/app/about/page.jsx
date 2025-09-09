import React from "react";
import AboutStory from "../../components/AboutStory";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
export default function page() {
  return (
    <div>
      <div className="heading title mt-5 py-5 text-center bg-olive text-light d-flex flex-column align-items-center justify-content-center">
        <h3>
          <span>About </span> Us
        </h3>
        <p className="mb-3">
          Learn more about our passion for quality food and beverage products.
        </p>
      </div>
      <AboutStory />
      <Mission />
      <Team/>
    </div>
  );
}

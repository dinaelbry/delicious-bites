import ContactUs from '@/components/ContactUs';
import React from 'react'
import Map from "@/components/Map"
export default function page() {
  return (
    <div>
      <div className="heading title mt-5 py-5 text-center bg-olive text-light d-flex flex-column align-items-center justify-content-center">
        <h3>
          <span>Contact </span> Us
        </h3>
        <p className="mb-3">
          Have questions or feedback? We'd love to hear from you.{" "}
        </p>
      </div>

<ContactUs/>
<Map/>
    </div>
  );
}

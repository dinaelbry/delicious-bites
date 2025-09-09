import React from "react";

export default function Map() {
  return (
    <div className="map text-center py-5">
      <h4 className="mb-5 fw-bold fs-3">Find Us</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13820.935700231435!2d31.319654399999994!3d30.0014388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1757376544254!5m2!1sen!2seg"
        width="1200"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

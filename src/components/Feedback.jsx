import React from "react";

export default function Feedback() {
  return (
    <div className="feedback bg-cream">
      <div className="heading text-center">
        <h3>
          <span> What Our </span> Customers Say
        </h3>
      </div>
      <div className="feedback-box txt-gray">
        <q>
          The quality of these products is outstanding. Every item I've tried
          has exceeded my expectations. Their attention to detail and commitment
          to quality ingredients is evident in every bite.
        </q>
        <div className="info-box">
          <h5 className="text-black">Sara John</h5>
          <p>Loyal Customer</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
export default function Hero() {
  return (
    <div className="hero">
      <div className="img-hero">
        <img src="/images/home.avif" alt="hero" />

        <div className="overlay-hero text-center">
          <h1 className="heading fw-bold display-5">
            Exceptional Food & Beverage Products
          </h1>
          <p>
            Premium ingredients. Exceptional taste. Delivered to your doorstep.
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
            <a href="/products">
              <button type="button" className="btn-custom">
                Shop Now
              </button>
            </a>
            <a href="/about">
              <button type="button" className="btn btn-outline-light">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

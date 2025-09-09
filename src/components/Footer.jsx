import Link from "next/link";
import products from "../components/FeaturedProducts";
import about from "../components/AboutUs";
import contact from "../components/ContactUs";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top d-flex align-items-center justify-content-around py-5 my-2">
        <div className="title">
          <h3>Delicious Bites</h3>
          <p>
            Premium food and beverage products with quality <br />
            ingredients and exceptional taste.
          </p>
        </div>

        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h3>Contact Us</h3>
          <p>123 Flavor Street cairo City, Egypt</p>
          <p>Phone: 01556663526</p>
          <p>Email: dinaelbry708@gmail.com</p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/17CKtTmtse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/dinaelbry03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/dinaelbry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dina-elbry-ba9300266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>
          &copy; 2025 Delicious Bites. All rights reserved. | built with{" "}
          <span>♥</span> by <span>ENG. Dina Elbry</span>
        </p>
      </div>
    </footer>
  );
}

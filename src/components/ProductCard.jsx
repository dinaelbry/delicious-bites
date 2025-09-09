// components/ProductCard.jsx
import Image from "next/image";

export default function ProductCard({ title, desc, price, img }) {
  return (
    <div className="card">
      <Image src={img} alt={title} width={200} height={150} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
}

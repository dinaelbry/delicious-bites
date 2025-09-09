import products from "../../../data/productsData";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="one-item container py-5 d-flex align-items-center justify-content-between">
      <div className=" para d-flex flex-column align-items-start justify-content-center">
        <h1>{product.title}</h1>
        <p className="w-75 py-2 text-secondary fs-5">{product.desc}</p>

        <p className=" price fs-3 text-danger-emphasis ">
          Price: ${product.price}{" "}
          <span className="ms-5 ps-5  "> Category: {product.category}</span>{" "}
        </p>
      </div>
      <img src={product.img} alt={product.title} className="img-fluid" />
    </div>
  );
}

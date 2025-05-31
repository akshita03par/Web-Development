import "./Product.css";

function Product({ title, price, features }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      {features ? (
        <ul>
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      ) : (
        <p>No features listed</p>
      )}
    </div>
  );
}

export default Product;

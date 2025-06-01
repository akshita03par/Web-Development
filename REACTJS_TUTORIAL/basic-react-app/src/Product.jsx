import "./Product.css";

function Product({ title, price, features }) {
  let styles = {backgroundColor: price>30000 ? "pink" : ""};


  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      {price > 30000 ? <p>Discount of 5%</p> : null}
      {/* {price>30000 && <p>"Discount of 5%"</p> } */}
      {/* conditonals */}
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

import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"]; // ----> array to props-1

  // let options = [<li>"hi-tech"</li>,<li> "durable"</li>,<li>"fast"</li>]; -2

  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };// object

  return (
    <>
      <Product
        title="phone"
        price={30000}
        features={options}
        // features2={options2}
      />
      <Product title="laptop" price={80000} />
      <Product title="pen" price={10} />
    </>
  );
}

export default ProductTab;

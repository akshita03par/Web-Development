import AmazonProduct from "./AmazonProduct.jsx";

function AmazonProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
        
      <AmazonProduct title="logitech MX Master" idx={0} />
      <AmazonProduct title="Apple Pencil (2nd Gen)" idx={1} />
      <AmazonProduct title="Zebronics Zeb-transformer" idx={2} />
      <AmazonProduct title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default AmazonProductTab;

import "./App.css";

//import title component
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

// // first Component

// function Title() {
//   return <h1>I am the Title!</h1>;
// }

function Description() {
  return <h1>This is my app component</h1>;
}

function App() {
  // return <h1>Hello World!</h1>;

  // rendering a component
  return (
    <>
      {/* <Description/>
      <p>inside app component we have:</p>
      <Title />
      <Title/> */}

      <MsgBox username=" akshita" textColor="red" />
      <ProductTab />
    </>
    //----> fragment which is not create extra node
  );
}
export default App;

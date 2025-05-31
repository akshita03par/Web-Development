// first Component

function Title() {
    let name = "akshita";
  return (
    <div>
      <h1>I am the Title!</h1>
      <p> 2 * 2 = {2 * 2}</p>
      <p>Hi, {name.toUpperCase()} </p>   { /*curly braces allow pure js*/ }
    </div>
  );
}

//export title component

export default Title; //---> export sigle value

// export {Title}; ----> use for multiple export

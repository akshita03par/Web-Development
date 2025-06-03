// handling click events

function printHello(event) {
  console.log("Hello");
  console.log(event);
}

function printName() {
  console.log("Akshita");
}

// Handling Non-clicking Events -->

function handHover() {
  console.log("Hover");
}

function doubleClick(){
    console.log("Double Click");
}


export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>

      <p onClick={printName}>This parah is for event demo </p>

      <p onMouseOver={handHover}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        recusandae voluptatem eum fugiat illum numquam voluptatum dolores quam.
        Cumque impedit necessitatibus qui distinctio doloremque quidem, ipsam
        error laudantium culpa vero explicabo aperiam. Voluptatibus reiciendis
        ipsa eius. Ratione quo veniam vero nostrum molestiae sapiente omnis
        corporis ipsum itaque. Omnis, aliquam saepe qui corporis voluptas cum?
        Ullam optio itaque soluta, quasi, error repellendus architecto porro
        modi rerum, consequatur delectus autem et nesciunt eaque corporis iste
        dolor sunt recusandae at tenetur voluptatum sapiente labore natus
        minima. Facilis eligendi officia earum provident rerum, nesciunt vitae
        veritatis qui veniam minus quidem impedit placeat temporibus.
      </p>

      <button onDoubleClick={doubleClick}>Click me!</button>
    </div>
  );
}



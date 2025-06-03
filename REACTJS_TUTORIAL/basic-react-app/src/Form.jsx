function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="write something" />
      <br />
      <br />
      <button >Submit</button>
    </form>
  );
}

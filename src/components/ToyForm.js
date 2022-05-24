import React from "react";

function ToyForm({toys, setToys}) {
  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.image.value)
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ 
        name:e.target.name.value, 
        image:e.target.image.value, 
        like:0})
    }).then(r=>r.json())
    .then(data => setToys([...toys, data]))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

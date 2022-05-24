import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(setToys)},[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleDelete(deletedToy){
    const updateToys = toys.filter((toy)=> toy.id !== deletedToy.id)
    setToys(updateToys)
  }
  function handleUpdate(toUpdateToy){
    const updateToys = toys.map((toy)=> toy.id === toUpdateToy.id ? toUpdateToy : toy)
    setToys(updateToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </>
  );
}

export default App;

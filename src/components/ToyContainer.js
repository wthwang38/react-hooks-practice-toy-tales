import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleUpdate}) {
  const toysCards = toys.map((toy)=>( <ToyCard key={toy.id} toys={toy} handleDelete={handleDelete} handleUpdate={handleUpdate}/>))
  return (
    <div id="toy-collection">{toysCards}</div>
  );
}

export default ToyContainer;

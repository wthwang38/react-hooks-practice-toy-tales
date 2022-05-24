import React from "react";

function ToyCard({ toys, handleDelete, handleUpdate }) {
  const {id, name, image, likes} = toys

  function handleDeleted(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE",})
      .then(r=>r.json())
      .then(()=> handleDelete(toys));
    }
  function handleLikes(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ 
      likes:toys.likes + 1  })  
      }).then(r=>r.json())
        .then((data) => {console.log(data)
          handleUpdate(data)})
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleted}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

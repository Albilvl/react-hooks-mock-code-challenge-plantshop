import React, {useState} from "react";

function PlantCard({plant}) {
// RenderPlants step 5. accept the plant being passed down from PlantList

  // SoldOutButton step 1. create a const that useState set to true 
  const[isSoldOut, setIsSoldOut] = useState(true)

  // SoldOutButton step 2. Create a function that toggles the boolean
  function handleSoldOut (){
    setIsSoldOut ((isSoldOut)=>!isSoldOut)
  }
  



// RenderPlants step 6. Making const from the plant data
  const {id, name, image, price} = plant
  return (
    // RenderPlants step 7. assign the const where needed
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* SoldOutButton step 3. The toggle switch determines the rendering of a button that togles the switch */}
      {isSoldOut ? (
        <button className="primary" onClick={handleSoldOut}>In Stock</button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

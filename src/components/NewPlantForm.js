import React, {useState} from "react";

function NewPlantForm({onAddPlants}) {
  // AddNewPlant step 3. import useState and the onAddplant prop and set the input fields to empty strings
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  // AddNewPlant step 4. create a handle submit event, 
  function handSubmit (e){
    // prevent default
    e.preventDefault();

    // AddNewPlant step 5. fetch, use post method, header stringify the data and trun res to json()
    fetch("http://localhost:6001/plants", {
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify({
          name : name,
          image : image,
          price: price,
      })
    })
    .then(res=>res.json())
    // AddNewPlant step 6. Take new plant and apply onAddplant to newplant 
    .then(newPlant=>onAddPlants(newPlant))
    // setting the fields to empty afterwards
    setName ("")
    setImage("")
    setPrice("")

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* AddNewPlant step 7. pass onSubmit = handlesubmit */}
      <form onSubmit={handSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
         />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value ={image}
          onChange = {e=>setImage(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value = {price}
          onChange = {e=>setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

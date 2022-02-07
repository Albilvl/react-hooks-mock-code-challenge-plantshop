import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // RenderPlants step 1. useState to set an empty array of plants 
  const [plants, setPlants] = useState([])

// SearchByName step 1.use state to set the search input to ""
  const [plantSearch, setPlantSearch] = useState("")


  // SearchByName step 2. set a const that displays the searched content
  // by filtering thru and return lowercased whatever matches.
  const displayedPlants = plants.filter(plant=>{
    return plant.name.toLowerCase().includes(plantSearch.toLowerCase())
  })


// RenderPlants step 2. useEffect to fetch data, turn to json, and take the array of plants
// setPlants to the array 
useEffect(() => 
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then(plantsArray=> setPlants(plantsArray))
)


// AddNewPlant step 1. create a function that sets the plants empty array to have a newPlant(still a varibale rn)
function handleAddPlants(newPlant){
  setPlants([...plants, newPlant])
}


// function handleDelete(id){
//   const updatedArray = plants.filter(plant=>{plant.id !== id});
//   setPlants(updatedArray)
// }
return (
    <main>
      {/* AddNewPlant step 2. pass the handle function as a prop to where needed  */}
      <NewPlantForm onAddPlants = {handleAddPlants}/>
      {/* // SearchByName step 3. pass the search as prop and  the aability to chnage the value*/}
      <Search plantSearch = {plantSearch} onSearchChange={setPlantSearch}/>
      {/* RenderPlants step 3. passs the plants as a prop to plantlist */}
      <PlantList  plants= {displayedPlants}/>
    </main>
  );
}

export default PlantPage;

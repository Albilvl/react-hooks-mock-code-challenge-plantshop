import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
  return (
    <ul className="cards">
      {/* RenderPlants step 4. map thru the array (plants) and return the Plantcard with a key and plant as prop*/}
      {
      plants.map((plant)=>{
        return <PlantCard
        key = {plant.id}
        plant={plant}
        />
      })
      }
    </ul>
  );
}

export default PlantList;

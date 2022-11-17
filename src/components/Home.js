import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
//API address has provided to fetch the data
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';


export default function Home() {
    const [cocktailName, setCocktailName] = useState("");
    const [cocktailInstruction, setCocktailInstruction] = useState("");
    const [cocktailImage, setCocktailImage] = useState("");
    const[cocktailGlass, setCocktailGlass] = useState("");
    const [cocktailIngredient1, setCocktailIngredient1] = useState("");
    const [cocktailIngredient2, setCocktailIngredient2] = useState("");
    const [cocktailIngredient3, setCocktailIngredient3] = useState("");
    const [cocktailIngredient4, setCocktailIngredient4] = useState("");
    
  
    useEffect(() => {
      axios.get(URL)
        .then((response) => {
          const cocktail = response.data.drinks[0];
          console.log(cocktail);
          setCocktailName(cocktail.strDrink);
          setCocktailInstruction(cocktail.strInstructions);
          setCocktailImage(cocktail.strDrinkThumb);
          setCocktailGlass(cocktail.strGlass);
          setCocktailIngredient1(cocktail.strIngredient1);
          setCocktailIngredient2(cocktail.strIngredient2);
          setCocktailIngredient3(cocktail.strIngredient3);
          setCocktailIngredient4(cocktail.strIngredient4);
         
        }).catch((error) => {
            alert(error);
        });
    }, []);
  return (
    <>
    <div className="container">
      <div>
        <h4>COCKTAIL OF THE DAY</h4>
        <h5>{cocktailName}</h5>
        <img src={cocktailImage} alt="Cocktail" height = "300" width = "300"/>
      </div>
      <h6>Glass:</h6>
      <p>{cocktailGlass}</p>
      <div>
        <h6>INSTRUCTIONS:</h6>
        <p>{cocktailInstruction}</p>
        <h6>INGREDIENTS:</h6>
        <ul>
          <li>{cocktailIngredient1}</li>
          <li>{cocktailIngredient2}</li>
          <li>{cocktailIngredient3}</li>
          <li>{cocktailIngredient4}</li>
        </ul>
      </div>
    </div>
  </>
)
}

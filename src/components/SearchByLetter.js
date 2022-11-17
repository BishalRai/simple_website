import { useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";


function SearchCocktailByLetter() {
  const [userInputletter, setuserInputletter] = useState("");
  const [cocktailCollection, setCocktailCollection] = useState([]);

  const [toggle, setToggle] = useState(false);

  async function SearchCollection(e) {
    e.preventDefault();
    try {
      const address = URL + userInputletter;
      const response = await fetch(address);

      if (response.ok) {
        const respondedCoktailDetails = await response.json();
        console.log(respondedCoktailDetails.drinks);
        setCocktailCollection(respondedCoktailDetails.drinks);
      } else {
        alert("Error.");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={SearchCollection}>
          <div>
            <lable>Type Cocktail's first letter </lable>
            <input
              value={userInputletter}
              onChange={(e) => setuserInputletter(e.target.value)}
              required
            />
            <button onClick={() => setToggle(!toggle)}> Search </button>
            {toggle && (
              <div>
                <div>
                  <ol>
                    {cocktailCollection.map((cocktail) => (
                      <li key={cocktail.idDrink}>
                        <img src={cocktail.strDrinkThumb} alt="" height = "100" width = "100"/>
                        {cocktail.strDrink}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchCocktailByLetter;
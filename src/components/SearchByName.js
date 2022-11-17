import { useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


function SearchCocktailByName() {
  const [userInsertName, setuserInsertName] = useState("");
  const [cocktailList, setcocktailList] = useState([]);

  const [toggle, setToggle] = useState(false);

  async function SearchInformations(e) {
    e.preventDefault();
    try {
      const address = URL + userInsertName;
      const response = await fetch(address);

      if (response.ok) {
        const respondedCoktailInformations = await response.json();
        console.log(respondedCoktailInformations.drinks);
        setcocktailList(respondedCoktailInformations.drinks);
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
        <form onSubmit={SearchInformations}>
          <div>
            <lable>Type cocktail's name </lable>
            <input
              value={userInsertName}
              onChange={(e) => setuserInsertName(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}> Search </button>
            {toggle && (
              <div>
                <div>
                  <ol>
                    {cocktailList.map((cocktail) => (
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

export default SearchCocktailByName;
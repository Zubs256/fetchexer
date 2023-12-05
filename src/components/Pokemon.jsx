"use client";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState("ditto");
  const [pokemon, setPokemon] = useState({});

  //   console.log(info);
  //   const name = info.name;
  //   const icon = info;
  //console.log(pokemonName);

  async function fetchPokemon() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const info = await response.json();
    console.log(info);
    setPokemon(info);
  }

  function handleInputChanges() {}

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div id="dogs-section">
      <h2>Pokemon</h2>
      <p>
        Here's a pokemon api:{" "}
        <a href="https://pokeapi.co/api/v2/pokemon/ditto" target="_blank">
          https://pokeapi.co/api/v2/pokemon/ditto
        </a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>
      <div id="pokemon-container">
        <div id="input-container">
          <input
            id="pokemon-name"
            type="text"
            value={pokemonName}
            onChange={handleInputChanges}
          />
          <button id="search-button">Search</button>
        </div>
        {/* {dogs.map((dog) => {
            return <img key={dog} src={dog} className="dog-images"></img>;
          })} */}
      </div>
      <hr />
    </div>
  );
}

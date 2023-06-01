import { useState } from 'react'
import { useEffect } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import Navbar from "./components/Navbar"



function App() {
  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );



  const [currentIndex, setCurrentIndex] = useState(0);

  const pokemonList = [

    {

      name: "bulbasaur",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

    },

    {

      name: "charmander",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

    },

    {

      name: "squirtle",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

    },


    {

      name: "pikachu",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

    },
    {

      name: "mew",

    },

  ];

  const pikachu = pokemonList[currentIndex];
  useEffect(
    () => {
      if (pikachu.name === "pikachu") {
        alert("tamerelaputepikachu)");
      }
    }
  );




  return (
    <div>
      <Navbar propsCounter={[setCurrentIndex, currentIndex]} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[currentIndex]} />
    </div>
  );

}

export default App;

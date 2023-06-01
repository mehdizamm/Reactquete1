import React, { useState, useEffect } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pokemonList = [
    {
      name: 'bulbasaur',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'charmander',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      name: 'squirtle',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      name: 'pikachu',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    },
    {
      name: 'mew',
    },
  ];

  const handlePokemonClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (pokemonList[currentIndex]?.name === 'pikachu') {
      alert('Tu as trouvé Pikachu !');
    }
  }, [currentIndex]);

  return (
    <div>
      <Navbar
        pokemonList={pokemonList}
        onPokemonClick={handlePokemonClick}
      />
      <PokemonCard pokemon={pokemonList[currentIndex]} />
    </div>
  );
}

function Navbar({ pokemonList, onPokemonClick }) {
  return (
    <div>

      {pokemonList.map((pokemon, index) => (
        <div key={pokemon.name}>
          <button onClick={() => onPokemonClick(index)}>
            {pokemon.name}
          </button>
        </div>
      ))}

    </div>
  );
}

function PokemonCard({ pokemon }) {
  return (
    <div>
      {pokemon.imgSrc ? (
        <figure>
          <img src={pokemon.imgSrc} alt={pokemon.name} />
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      ) : (
        <p>???</p>
      )}
    </div>
  );
}

export default App;
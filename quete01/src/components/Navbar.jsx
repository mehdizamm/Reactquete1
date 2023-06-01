
function Navbar({ propsCounter, pokemonList }) {
    const [currentIndex, setCurrentIndex] = propsCounter;

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <div key={pokemon.name}>
                    <button onClick={() => handleClick(index)}>{pokemon.name}</button>
                </div>
            ))}

        </div>
    );
}




export default Navbar;


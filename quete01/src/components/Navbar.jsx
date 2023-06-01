

function Navbar({ propsCounter, pokemonList }) {
    const [setCurrentIndex, currentIndex] = propsCounter;
    console.log(propsCounter);
    console.log(currentIndex);

    function handlePrevious() {
        console.log("zdfghzedfhaed");
        setCurrentIndex(function (prevIndex) {
            return prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1;

        });

    }

    function handleNext() {
        setCurrentIndex(function (prevIndex) {
            return prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1;
        });
    }
    return (
        <div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
};



export default Navbar;
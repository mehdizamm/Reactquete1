
import Proptypes from "prop-types"

function PokemonCard(props) {
    console.log(props.pokemon);

    return (<figure>

        {props.pokemon.imgSrc != null ? < img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> : <p>???</p>}

        <figcaption>{props.pokemon.name}</figcaption>
    </figure>
    )

}


PokemonCard.PropTypes = {
    props: Proptypes.shape({
        imgSrc: Proptypes.string,
        name: Proptypes.string.isRequired,
    }).isRequired,
};


export default PokemonCard;
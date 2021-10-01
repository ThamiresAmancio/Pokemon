import './style.css';


function Pokedex ({pokemons, win}) {
    
    return (

        <>
            {/* win- verifica se é vencedor ou falso  */}
            {win ? <h4>Mão vencedora</h4> :<h5>Mão perdedora</h5>}

            <div className="card-primeiro" key={pokemons.id}>
                    {
                        pokemons.map(pokemon => {
                             return (
                                 <>   
                                    <div className="cards">
                                        <h2>{pokemon.name}</h2>
                                        <img className="imgs" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(pokemon.id).padStart(3,'0')}.png`} alt=""/>
                                        {/* <img className="imgs" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/> */}
                                        <p>Type: {pokemon.type}</p>
                                        <p>EXP: {pokemon.base_experience}</p>
                                     </div>
                                 </>
                             )
                        })
                    }
            </div>
          
        </>
    )
}

export default Pokedex;
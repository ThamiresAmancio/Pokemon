
import './style.css'
import React from "react";
import Pokedex from '../Pokedex';



function Pokemon () {

         const lista = [

                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63}, 
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
 

                // cria um variavel primeiraMao
                const primeriaMao = []

                 // cria um variavel segundaMao
                const segundaMao = [...lista]
                    // enquanto a variavel primeiraMao for menor que segundaMao
                    while(primeriaMao.length < segundaMao.length){

                            const novoArray = Math.floor(Math.random() * segundaMao.length);
                            //está adicionando  um novo pokemon e removendo um novo pokemon e voltando na posição 0
                            const pokemon = segundaMao.splice(novoArray,1)[0]

                            //adiciona um novo pokemon na variavel primeiraMao
                            primeriaMao.push(pokemon)
                    }

                    const totalPrimeiraMao = primeriaMao.reduce((resultado,quantidade)=>{
                        return  (resultado + quantidade.base_experience);
                    },0);


                    const totalSegundaMao = segundaMao.reduce((resultado,quantidade)=>{
                        return  (resultado + quantidade.base_experience);
                    },0);

                    return(
                        <>
                            <h1>Pokedex</h1>
                            <div>
                                <p className="titulo">{totalPrimeiraMao}</p>
                                {/* win- verifica se é true ou falso  */}
                                <Pokedex pokemons={primeriaMao} win={totalPrimeiraMao > totalSegundaMao} />
                            </div>
                            <div>
                                <p className="titulo">{totalSegundaMao}</p>
                                <Pokedex pokemons={segundaMao} win={totalSegundaMao > totalPrimeiraMao} />
                            </div>
                            
                        </>
                    );
                }

export default Pokemon;



import "./PokemonImg.css";
import React from "react";
import pokemon from 'pokemon-images';


function template() {

  const getMypokemon=()=>{
      return pokemon.getSprite('bulbasaur');
  }

  return (
    <div className="pokemon-img">

       
         <img src ={getMypokemon()} className="poke"></img> 
         <img src ={getMypokemon()}></img> 
       
    </div>
  );
};

export default template;

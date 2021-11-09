import "./PokeForm.css";
import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function template() {
  return (
    <div className="poke-form">
      <h1 className="h1">Welcome to Pokemon's Game Search your pokemon</h1>
      <br />
      <br />
      <span>
        Name :{" "}
        <input
          className="myform"
          onChange={this.getpokename}
          placeholder="Enter your fav Pokemon Name"
        />{" "}
      </span>
      <br />
      <br />
      <button type="button" id="btn" disabled={this.state.isdisabled} onClick={this.gettingpokemon} class="btn btn-success">Search</button>
      <br />
      <br />

      <div className="pokedetails"></div>
         {
           (this.state.isvalidName && this.state.isclicked) ? <p>Pokemon Founded</p> : <p>pls search something</p>
         }
         {
           (this.state.isclicked && this.state.isvalidName) ?  (<img src={this.state.pokemon} id="img" ></img> ) : (<p>No Pokemon Found</p>)
         }
         {
           (this.state.isclicked) ?  (<button type="button" onClick={this.fnreset} class="btn btn-danger">Reset</button>) : <p></p>
         }
         
    </div>
  );
}

export default template;

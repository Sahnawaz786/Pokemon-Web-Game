import React from "react";
import template from "./PokeForm.jsx";
import Pokemon from "pokemon-images";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PokeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isclicked: false,
      pokemon: '',
      isvalidName: false,
      isdisabled:false
    }
    this.getpokename = this.getpokename.bind(this);
    this.gettingpokemon = this.gettingpokemon.bind(this);
    this.checkPokeName = this.checkPokeName.bind(this);
    this.fnreset = this.fnreset.bind(this);
    this.showFoundMessage =this.showFoundMessage.bind(this);
    this.showNotFoundMessage = this.showNotFoundMessage.bind(this);
  }

  getpokename = (eve) => {
    const { value } = eve.target;
    console.log(value);
    this.setState({
      name: value
    })
  }

  showFoundMessage(){
    toast.success(`Your selected ${this.state.name} pokemon has been found!`);
  }

  showNotFoundMessage(){
    toast.error(`Your selected ${this.state.name} pokemon has NOT been found!`);
  }

  checkPokeName() {
    let name = this.state.name.toLowerCase();
    debugger;
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151%27')
      .then((res) => {
        debugger;
        res.data.results.map((obj) => {
          debugger;
          if (name == obj.name) {
            debugger;
            this.setState({
              isvalidName: true
            })
          }

        })
      })

      .catch((res) => {
        console.log(res);
      })
  }

  fnreset(){
    this.setState({
      isclicked:false,
      isvalidName:false,
      pokemon:'',
      isdisabled:false
    })
  }

  gettingpokemon() {

    this.checkPokeName();
    
    if (this.state.isvalidName) {
      console.log(this.state.isvalidName);
      let PokeName = this.state.name;
      this.setState({
        isclicked: true,
        pokemon: Pokemon.getSprite(PokeName.toLocaleLowerCase()),
        isdisabled:true
      })
      this.showFoundMessage();
    }
  }

  render() {
    return template.call(this);
  }
}

export default PokeForm;

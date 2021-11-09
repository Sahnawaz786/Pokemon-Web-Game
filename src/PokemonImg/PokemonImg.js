import React    from "react";
import template from "./PokemonImg.jsx";

class PokemonImg extends React.Component {
  render() {
    return template.call(this);
  }
}

export default PokemonImg;

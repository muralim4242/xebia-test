import React, { Component } from "react";
import { TextField } from "../../uiComponents/materializecss";
import { commonApi } from "../../../api";
import Planets from "./Planets";
import $ from "jquery";
import "./index.css";

class Search extends Component {
  state = {
    planets: [],
    filteredPlanets: []
  };
  componentDidMount() {
    var self = this;
    let {onClickSearchResult}=this.props;
    commonApi("get", "planets/")
      .then(res => {
        self.setState({
          planets: res.data.results,
          // filteredPlanets: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
    $(document).ready(function() {
      $(".collapsible").collapsible({
        onOpen: function(el) { onClickSearchResult() }
      });
    });
  }

  _handleChange = value => {
    let { planets } = this.state;
    if (value) {
      this.setState({
        filteredPlanets: planets.filter(planet => {
          return planet.name.toLowerCase().startsWith(value.toLowerCase());
        })
      });
    }
  };

  render() {
    let { filteredPlanets } = this.state;
    let { _handleChange } = this;
    let {lockPlanetSearch} =this.props;
    return (
      <div>
        <div className="row">
          <TextField
            spec={{
              id: "search",
              className: "col s12",
              label: "Search planets",
              inputType: "text",
              inputClassName: "validate",
              jsonPath: "search"
            }}
            onHandleChange={_handleChange}
          />
        </div>
        {!lockPlanetSearch && <div className="row">
          <div className="col s10 offset-s1">
            <Planets
              planets={filteredPlanets}
            />
          </div>
        </div>}
      </div>
    );
  }
}

export default Search;

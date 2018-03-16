import React from "react";

const planetFontSize = population => {
  // return `${14+(population/1000000000)}px`
  switch (true) {
    case population > 0 && population <= 1000:
      return "25px";
    case population > 1000 && population <= 1000000:
      return "35px";
    case population > 1000000 && population <= 100000000:
      return "45px";
    case population > 100000000 && population <= 1000000000:
      return "55px";
    case population > 100000000 && population <= 200000000:
      return "65px";
    case population > 300000000 && population <= 500000000:
      return "75px";
    case population > 500000000 && population <= 1000000000:
      return "85px";
    default:
      return "14px";
  }
};

const Planets = ({ planets,onClickSearchResult }) => {
  return (
      <ul className="collapsible popout" data-collapsible="accordion">
        {planets.map((item, index) => {
          return (
            <li key={index}>
              <div
                className="collapsible-header pink darken-2  white-text"
                style={{ fontSize: planetFontSize(item.population) }}
              >
                {item.name}
              </div>
              <div className="collapsible-body pink lighten-1 white-text">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>Climete</th>
                      <th>Diameter</th>
                      <th>Gravity</th>
                      <th>Orbital Period</th>
                      <th>Rotation Period</th>
                      <th>Population</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{item.climate || "NA"}</td>
                      <td>{item.diameter || "NA"}</td>
                      <td>{item.gravity || "NA"}</td>
                      <td>{item.orbital_period || "NA"}</td>
                      <td>{item.rotation_period || "NA"}</td>
                      <td>{item.population=="unknown"?"NA":item.population}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          );
        })}
      </ul>
  );
};

export default Planets;

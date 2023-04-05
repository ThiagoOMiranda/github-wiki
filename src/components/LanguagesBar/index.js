import { LanguagesBarContainer } from "./styles";
import { useState, useEffect } from "react";

function LanguagesBar({ repo }) {
  const [languages, setLanguages] = useState([]);
  const shortid = require("shortid");

  useEffect(() => {
    async function fetchLanguages() {
      const reponse = await fetch(repo.languages_url);
      const data = await reponse.json();
      setLanguages(data);
    }
    fetchLanguages();
  }, [repo]);

  const totalValue = Object.values(languages).reduce(
    (acc, val) => acc + val,
    0
  );

  const percentage = (value, totalValue) => {
    return ((value / totalValue) * 100).toFixed(1);
  };

  const randomColor = (seed) => {
    var hexadecimais = "0123456789ABCDEF";
    var color = "#";
    var random = parseInt(Math.abs(Math.sin(seed) * 16777215) % 16777215);

    for (var i = 0; i < 6; i++) {
      color += hexadecimais[random % 16];
      random = parseInt(random / 16);
    }
    return color;
  };

  return (
    <LanguagesBarContainer>
      <p>Linguagens:</p>
      <div className="languages-bar">
        {Object.entries(languages).map(([key, value]) => (
          <span
            key={shortid.generate()}
            className="meter-bar"
            style={{
              width: `${percentage(value, totalValue)}%`,
              backgroundColor: `${randomColor(value)}`,
            }}
          ></span>
        ))}
      </div>
      <ul className="languages">
        {Object.entries(languages).map(([key, value]) => (
          <li className="language-item" key={shortid.generate()}>
            <div
              className="list-marker"
              style={{ backgroundColor: `${randomColor(value)}` }}
            />
            <p>
              {key} = {percentage(value, totalValue)} %
            </p>
          </li>
        ))}
      </ul>
    </LanguagesBarContainer>
  );
}

export default LanguagesBar;

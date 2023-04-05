import { ProgressBarContainer } from "./styles";

function ProgressBar({ languages }) {
  const totalValue = Object.values(languages).reduce(
    (acc, val) => acc + val,
    0
  );

  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + "0".repeat(6 - color.length) + color;
  };

  const percentage = (value, totalValue) => {
    return Math.round((value / totalValue) * 100);
  };

  return (
    <ProgressBarContainer>
      <p>Linguagens:</p>
      <div className="session-bar">
        {Object.entries(languages).map(([key, value]) => (
          <span
            key={Math.round(totalValue * 20)}
            className="meter-bar"
            style={{
              width: `${percentage(value, totalValue)}%`,
            }}
          ></span>
        ))}
      </div>
      {Object.entries(languages).map(([key, value]) => (
        <ul>
          <li key={key}>
            {key} = {percentage(value, totalValue)} %
          </li>
        </ul>
      ))}
    </ProgressBarContainer>
  );
}

export default ProgressBar;

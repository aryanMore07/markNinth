import { useState } from "react";
import "./styles.css";

const gamesDb = {
  Action: [
    { Name: "Far-Cry 3", Rating: "9/10" },
    { Name: "Far-Cry 4", Rating: "8.5/10" }
  ],

  StoryMode: [
    { Name: "GTA-5", Rating: "10/10" },
    { Name: "Watch-Dogs", Rating: "8.4/10" }
  ],

  OnlineFPS: [
    { Name: "ApexLegends", Rating: "9/10" },
    { Name: "Fortnite", Rating: "9.6/10" }
  ]
};

export default function App() {
  const [selctedGameType, setGameType] = useState("StoryMode");

  function clickEventHandler(gameType) {
    setGameType(gameType);
  }
  return (
    <div className="App">
      <h1>Best Pc Games</h1>
      <p>Here, Are Some Best Pc Games... :) </p>
      <div>
        {Object.keys(gamesDb).map((gameType) => (
          <button
            onClick={() => clickEventHandler(gameType)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {gameType}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gamesDb[selctedGameType].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>
                {" "}
                <b>{book.Name}</b>{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                <b>{book.Rating}</b>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Note : The Rating Are According To IGN | Internet NetWork Gaming
      </div>
    </div>
  );
}

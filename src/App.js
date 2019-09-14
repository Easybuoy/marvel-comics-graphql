import React from "react";
import "./App.css";
import CharacterWithHOC from "./CharacterWithHOC";
import CharacterWithHook from './CharacterWithHook';

function App() {
  return (
    <div className="App">
      <h1>Characters</h1>
      {/* <CharacterWithHOC /> */}
      <CharacterWithHook />
    </div>
  );
}

export default App;

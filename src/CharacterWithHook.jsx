import React, { useState } from "react";
import { gql } from "apollo-boost";
import { withApollo } from "react-apollo";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      thumbnail
      description
      name
      id
    }
  }
`;

function CharacterWithHOC({ client }) {
  const [characters, setCharacters] = useState([]);

  client
    .query({ query: GET_CHARACTERS })
    .then(res => setCharacters(res.data.characters))
    .catch(err => console.log(err));

  if (characters.length > 0) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0rem auto"
        }}
      >
        {characters.map(character => (
          <div
            key={character.name}
            style={{
              display: "flex",
              width: "30%",
              flexWrap: "wrap",
              margin: "1rem 0",
              justifyContent: "center"
            }}
          >
            <img
              src={character.thumbnail}
              alt={character.name}
              style={{ width: "300px" }}
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="App">
      <h2>Loading...</h2>
    </div>
  );
}

export default withApollo(CharacterWithHOC);

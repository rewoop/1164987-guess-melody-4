import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }],
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      questions={questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

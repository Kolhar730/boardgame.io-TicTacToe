import { Client } from "boardgame.io/react";
import { AI } from "boardgame.io/ai";
import TicTacToe from "./Game";
import TicTacToeBoard from "./TicTacToeBoard";

import * as firebase from 'firebase'

var config = {
  authDomain: "newtictactoegame.firebaseapp.com",
  databaseURL: "https://newtictactoegame.firebaseio.com",
  projectId: "newtictactoegame",
  storageBucket: "newtictactoegame.appspot.com",
  //apikey and sender id to be added before running.
};

firebase.initializeApp(config);

const TicTicGame = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  ai: AI({
    enumerate: G => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] });
        }
      }
      return moves;
    }
  }),
  debug: true
});

export default TicTicGame;
//render(<App />, document.getElementById("root"));


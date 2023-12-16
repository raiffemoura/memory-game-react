import React, { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import game from "./game/game";

export default function MemoryGame() {
  const [gameOver, setGameOver] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    setCards(game.createCardsFrontTechs());
  }, []);
  function restart() {
    game.clearCards();
    setCards(game.createCardsFrontTechs());
    setGameOver(false);
  }

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {
        //GameOver callBack
        setGameOver(true);
      },
      () => {
        // no match callBack
        setCards([...game.cards]);
      }
    );
    setCards([...game.cards]);
  }
  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  );
}

import React,{ useEffect, useState } from "react";
import Chessground from "@react-chess/chessground";
import useChess from "./hooks/useChess";

declare let window: any;

function App() {
  const {
    turnColor,
    lastMove,
    fen,
    calcMovable,  
  } = useChess();

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  };

  let config = {
    fen: fen,
    coordinates: true,
    turnColor: turnColor(),
    addPieceZIndex: true,
    autoCastle: true,
    lastMove: lastMove,
    highlight: {
      lastMove: true,
      check: true,
    },
    selectable: {
      enabled: true,
    },
    movable: calcMovable(),  
  };
  return (
    <div className="app" id="chessboard">
      <div className="main-chessboard">
        <Chessground
          width={
            (innerWidth < innerHeight ? innerWidth  : innerHeight)*0.9 
          }
          height={
            (innerWidth < innerHeight ? innerWidth  : innerHeight)*0.9 
          }
          config={{ ...config }}
        />
      </div>
    </div>
  );
}

export default App;

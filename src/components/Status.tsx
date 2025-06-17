import IndividualScore from "./IndividualScore";
import type { Player } from "./Game";

interface StatusProps {
  scores: { X: number; O: number; Draw: number };
  currentPlayer: Player;
}

const Status = ({ scores, currentPlayer }: StatusProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-bold text-white">
        {currentPlayer === "X" ? "Player X's Turn" : "Player O's Turn"}
      </div>
      <div className="flex justify-between items-center gap-4">
        <IndividualScore player="X" score={scores.X} />
        <IndividualScore player="Draw" score={scores.Draw} />
        <IndividualScore player="O" score={scores.O} />
      </div>
    </div>
  );
};

export default Status;

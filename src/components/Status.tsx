import IndividualScore from "./IndividualScore";
import { useStatus } from "../StatusContext";

const Status = () => {
  const { scores } = useStatus();

  return (
    <div className="flex justify-between items-center gap-4">
      <IndividualScore player="X" score={scores.X} />
      <IndividualScore player="Draw" score={scores.Draw} />
      <IndividualScore player="O" score={scores.O} />
    </div>
  );
};

export default Status;

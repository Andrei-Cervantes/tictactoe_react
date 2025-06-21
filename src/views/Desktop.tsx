import Game from "../components/Game";
import Background from "../components/Background";
import { Particles } from "../components/ui/particles";

const Desktop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary font-family-primary relative overflow-hidden">
      <Game />
      <Background />
      <div className="absolute inset-0 z-5">
        <Particles />
      </div>
    </div>
  );
};

export default Desktop;

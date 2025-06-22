import useMobile from "./hooks/useMobile";
import Background from "./components/Background";
import { Particles } from "./components/ui/particles";
import Game from "./components/Game";

const App = () => {
  const isMobile = useMobile();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary font-family-primary relative overflow-hidden">
      <Game />
      {!isMobile && <Background />}
      <Particles className="absolute inset-0 z-5" />
    </div>
  );
};

export default App;

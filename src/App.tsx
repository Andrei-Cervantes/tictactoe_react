import useMobile from "./hooks/useMobile";
import Background from "./components/Background";
import { Particles } from "./components/ui/particles";
import Game from "./components/Game";

const App = () => {
  const isMobile = useMobile();

  const getClassName = () => {
    if (isMobile) {
      return {
        container: "items-start pt-4",
        background: "absolute bottom-0 left-1/2 -translate-x-1/2 w-full",
      };
    } else {
      return {
        container: "items-center",
        background: "absolute bottom-0 -left-2 w-1/2 z-10",
      };
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center bg-primary font-family-primary relative overflow-hidden ${
        getClassName().container
      }`}
    >
      <Game />
      <Background className={getClassName().background} />
      <Particles className="absolute inset-0 z-5" />
    </div>
  );
};

export default App;

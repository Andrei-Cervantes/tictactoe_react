import Background from "./components/Background";
import Game from "./components/Game";
import { StatusProvider } from "./components/Provider/StatusProvider";
import { Particles } from "./components/ui/particles";

const App = () => {
  return (
    <StatusProvider>
      <div className="min-h-screen flex items-center justify-center bg-primary font-family-primary relative overflow-hidden">
        <Game />
        <Background />
        <div className="absolute inset-0 z-5">
          <Particles />
        </div>
      </div>
    </StatusProvider>
  );
};

export default App;

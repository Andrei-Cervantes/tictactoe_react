import Background from "./components/Background";
import Game from "./components/Game";
import { StatusProvider } from "./components/Provider/StatusProvider";

const App = () => {
  return (
    <StatusProvider>
      <div className="min-h-screen flex items-center justify-center bg-primary font-family-primary relative overflow-hidden">
        <Game />
        <Background />
      </div>
    </StatusProvider>
  );
};

export default App;

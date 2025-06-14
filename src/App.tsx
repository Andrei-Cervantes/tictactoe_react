import Background from "./components/Background";
import Game from "./components/Game";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary font-family-primary relative overflow-hidden">
      <Game />
      <Background />
    </div>
  );
};

export default App;

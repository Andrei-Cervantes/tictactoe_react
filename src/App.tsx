import Game from "./components/Game";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 font-family-primary relative">
      <Game />
      <div className="absolute bottom-0 left-0">
        <p>Tic</p>
        <p>Tac</p>
        <p>Toe</p>
      </div>
    </div>
  );
};

export default App;

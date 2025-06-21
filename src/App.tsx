import useMobile from "./hooks/useMobile";
import Desktop from "./views/Desktop";
import Mobile from "./views/Mobile";

const App = () => {
  const isMobile = useMobile();

  return isMobile ? <Mobile /> : <Desktop />;
};

export default App;

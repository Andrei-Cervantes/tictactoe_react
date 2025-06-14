import background from "../assets/background.svg";

const Background = () => {
  return (
    <div className="absolute bottom-0 -left-4">
      <img src={background} alt="background" className="w-1/2" />
    </div>
  );
};

export default Background;

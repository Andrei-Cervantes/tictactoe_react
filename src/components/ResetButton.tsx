interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton = ({ onReset }: ResetButtonProps) => {
  return (
    <button
      className="bg-player-draw  px-4 py-2 rounded-md cursor-pointer"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default ResetButton;

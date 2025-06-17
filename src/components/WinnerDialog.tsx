import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import type { Player } from "../hooks/useGameLogic";

interface WinnerDialogProps {
  winner: Player | null;
  isDraw: boolean;
  onReset: () => void;
  open: boolean;
}

const WinnerDialog = ({ winner, isDraw, onReset, open }: WinnerDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className="bg-border-primary p-8 w-fit">
        <DialogHeader>
          <DialogTitle>
            {isDraw ? "It's a draw!" : `The Winner is Player ${winner}!`}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild className="mx-auto">
            <button
              className="bg-player-draw px-4 py-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-100 hover:font-bold border-2 border-title"
              onClick={onReset}
            >
              Reset
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerDialog;

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import type { Player } from "./Game";

interface WinnerDialogProps {
  winner: Player;
}

const WinnerDialog = ({ winner }: WinnerDialogProps) => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Winner</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>The Winner is {winner}</p>
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <button className="bg-player-draw px-4 py-2 rounded-md cursor-pointer">
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerDialog;

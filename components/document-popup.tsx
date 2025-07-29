import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export default function DocumentPopup() {
  return (
    <Dialog>
      <DialogTrigger>Attach</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Attach Document</DialogTitle>
          <Separator className="my-4" />
          <DialogDescription>
            <Input type="file" placeholder="Attach File" />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Attach</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

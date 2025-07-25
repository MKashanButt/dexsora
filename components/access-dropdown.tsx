"use client";

import { ChevronDown, Copy } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AccessDropdown() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const link = (document.getElementById("link") as HTMLInputElement | null)
      ?.value;

    if (!link) {
      toast.error("Link not found");
      return;
    }

    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        toast.success("Copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        toast.error("Failed to copy link");
        console.error(err);
      });
  };

  const handleOpenDialog = () => {
    setDropdownOpen(false);
    setDialogOpen(true);
  };
  return (
    <>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Access <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={handleOpenDialog}>View</DropdownMenuItem>
          <DropdownMenuItem onSelect={handleOpenDialog}>Full</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <div className="flex gap-2">
                <Input
                  id="link"
                  defaultValue="app.dexsora.com/sheet-name/id"
                  readOnly
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleCopy}
                  className="shrink-0 mr-4"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Input
                  id="view"
                  defaultValue="View Only"
                  readOnly
                  className="w-1/3"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="w-full">
                <div className="my-2 flex flex-col gap-2">
                  <DialogDescription>
                    People with already access
                  </DialogDescription>
                  <hr className="w-full" />
                  <div className="w-full mt-1 flex gap-2 flex-wrap">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage />
                      <AvatarFallback className="rounded-lg">AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage />
                      <AvatarFallback className="rounded-lg">CD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage />
                      <AvatarFallback className="rounded-lg">EF</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage />
                      <AvatarFallback className="rounded-lg">GH</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage />
                      <AvatarFallback className="rounded-lg">IJ</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  className="mt-4 cursor-pointer"
                >
                  Close
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

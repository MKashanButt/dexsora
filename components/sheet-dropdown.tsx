"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner"; // or your preferred toast library
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  url: string;
};

type SheetDropdownProps = {
  customers: Page[];
  row: any; // the current row data to be moved
  onMove?: () => void; // optional callback to update UI
};

export function SheetDropdown({ customers, row, onMove }: SheetDropdownProps) {
  const pathname = usePathname();

  const handleMove = async (page: Page) => {
    try {
      const sheetName = page.url.split("/").pop();
      console.log("Moving record:", row, "to sheet:", sheetName);
      if (!sheetName) throw new Error("Invalid sheet name");
      const res = await fetch("/api/move-to-sheet", {
        method: "POST",
        body: JSON.stringify({ record: row, sheet: sheetName }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to move");

      toast.success(`Moved to ${page.title}`);
      onMove?.();
    } catch (err) {
      toast.error("Move failed");
    }
  };

  const filteredPages = customers.filter((page) => page.url !== pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Move To <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {filteredPages.map((page) => (
          <DropdownMenuItem key={page.title} onClick={() => handleMove(page)}>
            {page.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

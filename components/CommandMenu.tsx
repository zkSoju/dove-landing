import { Command } from "cmdk";
import { useEffect, useState } from "react";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        console.log("⌘K pressed");
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={true}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="absolute left-1/2 top-1/2 z-[100] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#c4fb60] bg-black p-1"
    >
      <Command.Input
        placeholder="Type a command or search..."
        className="w-full border-b border-[#c4fb60] bg-transparent p-6 text-white placeholder:text-white/50 focus:outline-none"
      />
      <div className="flex h-full w-full pt-2">
        <Command.List className="w-full">
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group className="text-white">
            <Command.Item className="rounded-sm px-4 py-4 text-white/50 hover:bg-[#c4fb6050] hover:font-medium hover:text-white">
              Provide liquidity
            </Command.Item>
            <Command.Item className="rounded-sm px-4 py-4 text-white/50 hover:bg-[#c4fb6050] hover:font-medium hover:text-white">
              Swap assets
            </Command.Item>
            <Command.Separator />
            <Command.Item className="rounded-sm px-4 py-4 text-white/50 hover:bg-[#c4fb6050] hover:font-medium hover:text-white">
              Learn more
            </Command.Item>
          </Command.Group>
          {/* 
        <Command.Item>Apple</Command.Item> */}
        </Command.List>
        <div className="h-96 w-full border border-[#c4fb60]"></div>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;

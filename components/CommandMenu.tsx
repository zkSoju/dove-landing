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
      className="absolute left-1/2 top-1/2 z-[100] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-2"
    >
      <img
        src="/frame.svg"
        className="pointer-events-none absolute top-0 left-0 h-full"
      />
      <div className="rounded-sm border border-[#c4fb6050] bg-black p-1">
        <Command.Input
          placeholder="Type a command or search..."
          className="w-full border-b border-[#c4fb60] bg-transparent p-6 text-sm uppercase tracking-widest text-white placeholder:text-white/50 focus:outline-none"
        />
        <div className="flex h-full w-full p-2 px-4">
          <Command.List className="w-full">
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group className="text-white">
              <Command.Item className="rounded-sm border border-r-0 border-transparent px-4 py-4 text-sm uppercase tracking-widest text-white/50 hover:border-[#c4fb60] hover:font-medium hover:text-white">
                Provide liquidity
              </Command.Item>
              <Command.Item className="rounded-sm border border-r-0 border-transparent px-4 py-4 text-sm uppercase tracking-widest text-white/50 hover:border-[#c4fb60] hover:font-medium hover:text-white">
                Swap assets
              </Command.Item>
              <Command.Separator />
              <Command.Item className="rounded-sm border border-r-0 border-transparent px-4 py-4 text-sm uppercase tracking-widest text-white/50 hover:border-[#c4fb60] hover:font-medium hover:text-white">
                Learn more
              </Command.Item>
            </Command.Group>
            {/* 
        <Command.Item>Apple</Command.Item> */}
          </Command.List>
          <div className="relative h-64 w-full rounded-sm border border-[#c4fb60]">
            <img
              src="/frame_2.svg"
              className="pointer-events-none absolute bottom-0 left-0 -translate-x-full"
            />
          </div>
        </div>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;

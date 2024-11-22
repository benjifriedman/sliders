// "use client";

import { ModeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">Sliders</h1>
      <ModeToggle />
    </header>
  );
};

export default Header;

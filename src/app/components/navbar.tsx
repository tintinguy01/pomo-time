"use client";

import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
    return ( 
        <div className="p-4 flex items-center justify-between rounded-lg shadow-md">
            <span className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Pomotimer
            </span>
            <ModeToggle />
        </div>
     );
}
 
export default Navbar;
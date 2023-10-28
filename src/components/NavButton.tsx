import { cn } from "@/lib/utilis";
import React from "react";

interface NavButtonProps extends React.ComponentPropsWithRef<"button"> {
  text?: string;
}

const NavButton = ({ className, children, ...props }: NavButtonProps) => {
  return (
    <button
      className={cn(
        " px-4 py-3 rounded duration-300 transition-all",
        className,
        {}
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default NavButton;

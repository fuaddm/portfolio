import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
};

const Card: FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={cn({
        "block rounded-3xl border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)]": true,
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};

export { Card };

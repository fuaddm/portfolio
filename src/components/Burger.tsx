"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar";

const Burger = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <button
      onClick={toggleSidebar}
      className="flex h-11 w-11 flex-col items-center justify-center gap-[12px] md:hidden"
    >
      <div
        className={cn({
          "h-0.5 w-5 origin-[left_50%] rounded-full bg-[rgb(102,102,102)] transition duration-500 ease-in-out will-change-transform": true,
          "rotate-45": isOpen,
        })}
      ></div>
      <div
        className={cn({
          "h-0.5 w-5 origin-[left_50%] rounded-full bg-[rgb(102,102,102)] transition duration-500 ease-in-out will-change-transform": true,
          "-rotate-45": isOpen,
        })}
      ></div>
    </button>
  );
};

export { Burger };

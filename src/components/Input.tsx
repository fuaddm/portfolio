import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";

const Input = ({ ...props }) => {
  return (
    <>
      <input
        {...props}
        type="text"
        className={cn({
          "rounded-lg bg-[rgb(41,41,41)] p-4 text-white placeholder:text-[rgba(196,196,196,0.5)]": true,
          [inter.className]: true,
        })}
      />
    </>
  );
};

export { Input };

import { inter, righteous } from "@/app/fonts";
import { Input } from "../Input";

const ContactForm = () => {
  return (
    <div className="container flex justify-center py-20">
      <div className="flex w-full max-w-[600px] flex-col gap-8">
        <div className={`${righteous.className} text-[60px]`}>Contact.</div>
        <div className="text-base font-normal text-[rgb(145,145,145)]">
          Get in touch if you would like to work together.
          <br />
          <br />
          Thanks for stopping by. 🤘
        </div>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
          </div>
          <textarea
            placeholder="Message"
            rows={6}
            className="rounded-lg bg-[rgb(41,41,41)] p-4 text-white placeholder:text-[rgba(196,196,196,0.5)]"
          ></textarea>
          <button className={`${inter.className} rounded-lg bg-[rgb(252,252,252)] p-4 text-base font-semibold text-[rgb(69,69,69)]`}>Send</button>
        </form>
      </div>
    </div>
  );
};

export { ContactForm };

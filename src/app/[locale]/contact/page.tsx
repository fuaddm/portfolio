import { Fade } from "@/components/Fade";
import { ContactForm } from "@/components/Form/ContactForm";
import { LetsWork } from "@/components/sections/LetsWork";

export default function Page() {
  return (
    <>
      <Fade>
        <ContactForm />
      </Fade>
      <LetsWork />
    </>
  );
}

import { Fade } from "@/components/Fade";
import { ContactForm } from "@/components/Form/ContactForm";
import { LetsWork } from "@/components/sections/LetsWork";

export default function page() {
  return (
    <>
      <Fade>
        <ContactForm />
      </Fade>
      <LetsWork />
    </>
  );
}

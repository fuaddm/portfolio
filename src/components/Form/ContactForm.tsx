import { inter, righteous } from "@/app/[locale]/fonts";
import { Input } from "../Input";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("ContactPage");
  return (
    <div className="container flex justify-center py-20">
      <div className="flex w-full max-w-[600px] flex-col gap-8">
        <div className={`${righteous.className} text-[60px]`}>{t("title")}</div>
        <div className="text-base font-normal text-[rgb(145,145,145)]">
          {t("subtitle1")}
          <br />
          <br />
          {t("subtitle2")}
        </div>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder={t("inputs.name")} />
            <Input placeholder="Email" />
          </div>
          <textarea
            placeholder={t("inputs.message")}
            rows={6}
            className="rounded-lg bg-[rgb(41,41,41)] p-4 text-white placeholder:text-[rgba(196,196,196,0.5)]"
          ></textarea>
          <button className={`${inter.className} rounded-lg bg-[rgb(252,252,252)] p-4 text-base font-semibold text-[rgb(69,69,69)]`}>{t("submit")}</button>
        </form>
      </div>
    </div>
  );
};

export { ContactForm };

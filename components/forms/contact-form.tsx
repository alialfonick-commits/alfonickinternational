import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fields = [
  {
    label: "Full Name",
    placeholder: "First + Last",
    name: "fullName",
    type: "text",
  },
  {
    label: "Company / Organization",
    placeholder: "Legal Entity Or Brand",
    name: "company",
    type: "text",
  },
  {
    label: "Work Email",
    placeholder: "Email@Work-Domain",
    name: "email",
    type: "email",
  },
  {
    label: "Contact (With Country Code)",
    placeholder: "(+91) _ _ _ _ _ _ _ _ _ _ _ _",
    name: "phone",
    type: "tel",
  },
];

export function ContactForm() {
  return (
    <form className="mx-auto w-full max-w-227.25">
      <div className="rounded-[10px] bg-[#FFFFFF40] px-5 py-6  sm:px-7 lg:px-9">
        <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className="block text-start">
              <span className="font-archivo mb-2 block text-[11px] font-medium uppercase tracking-[0.08em] text-white">
                {field.label}
              </span>

              <Input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="font-archivo h-11 rounded-[5px] border-0 bg-white px-4 text-[11px] font-medium uppercase text-[#222222] placeholder:text-[#313233]/70 focus-visible:ring-2 focus-visible:ring-[#D93433]"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <Button
          type="submit"
          className="font-archivo group h-10 rounded-full bg-white px-6 text-[12px] font-semibold uppercase text-[#222222] hover:bg-[#F5D5D2]"
        >
          <span className="size-1.5 rounded-full bg-[#222222]" />
          Send Message
        </Button>

        <Button
          type="button"
          size="icon"
          className="size-11 rounded-full bg-white text-[#222222] hover:bg-[#F5D5D2] hover:text-[#B81C15]"
          aria-label="Open contact options"
        >
          <Menu size={19} />
        </Button>
      </div>
    </form>
  );
}
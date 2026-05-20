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
    placeholder: "(+91) ____________",
    name: "phone",
    type: "tel",
  },
];

export function ContactForm() {
  return (
    <form className="mx-auto w-full max-w-[720px]">
      <div className="rounded-[10px] bg-white/25 px-5 py-6 backdrop-blur-md sm:px-7 lg:px-9">
        <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className="block">
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
          className="font-archivo group h-11 rounded-full bg-white px-5 text-[12px] font-semibold uppercase text-[#222222] hover:bg-[#F5D5D2]"
        >
          <span className="mr-2 size-1.5 rounded-full bg-[#222222]" />
          Send Message
          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
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
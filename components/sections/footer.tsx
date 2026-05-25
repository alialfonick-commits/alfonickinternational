import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Camera,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";


const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Service", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Career", href: "/careers" },
  { name: "Blog", href: "/blogs" },
];


const serviceLinks = [
  { name: "Web Development", href: "#" },
  { name: "UI/UX DESIGN", href: "#" },
  { name: "Branding & Communication", href: "#" },
  { name: "Ecommerce Web Development", href: "#" },
  { name: "Mobile App Development", href: "#" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "C-30, Block-5, Gulshan-e-iqbal, Karachi.",
  },
  {
    icon: Phone,
    text: "021-34800227",
    href: "tel:02134800227",
  },
  {
    icon: Mail,
    text: "info@alfonickinternational.com",
    href: "mailto:info@alfonickinternational.com",
  },
  {
    icon: Clock,
    text: "Mon - Sat: 09:00am - 6:00 pm",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white px-5 py-4"
    >
      <div className="relative overflow-hidden rounded-[18px] bg-[#090000] py-16 text-white px-16">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/hero-bg-img.png')" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_67%,#b81c1585,#0000_50%),linear-gradient(#0000,#500000_45%,#0000009c)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center font-archivo text-[18vw] font-bold leading-none tracking-tight text-[#B81C15]/12">
          ALFONICK
        </div>

        <div className="relative z-10">
          {/* Contact form area */}
          <div className="mx-auto max-w-220 text-center">
            <span className="font-archivo inline-flex rounded-full border border-white/25 bg-black/10 px-10 py-2 text-[11px] font-medium text-white backdrop-blur-md">
              Contact Us
            </span>

            <h2 className="font-archivo mt-5 text-[32px] font-medium leading-tight tracking-[-0.04em] text-white sm:text-[42px] lg:text-[48px]">
              Get In Touch with Us
            </h2>

            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <div className="my-14 h-px w-full bg-white/55 sm:my-16 lg:my-20" />

          {/* Footer */}
          <footer className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.3fr] lg:gap-14">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex">
                <Image
                  src="/images/alfonick.webp"
                  alt="Alfonick International"
                  width={190}
                  height={60}
                  className="h-auto w-[223px]"
                />
              </Link>

              <p className="mt-6 max-w-67.5 font-[Arial] text-[15px] leading-[1.65] text-white">
                Lorem ipsum dolor sit amet, consectetur consectetur adipiscing
                consect adipiscing.
              </p>

              <p className="font-archivo mt-6 text-[11px] font-semibold tracking-[0.22em] text-white">
                Social Media
              </p>

               <div className="flex gap-3 [&_a]:bg-white [&_a]:hover:bg-[#b91b15] [&_a]:rounded-full [&_a]:p-2 [&_a]:hover:text-white [&_a]:text-[#b91b15] [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:text-xl">
              <Link href="#">
                <Globe size={20} />
              </Link>
              <Link href="#">
                <X size={20} />
              </Link>
              <Link href="#">
                <Briefcase size={20} />
              </Link>
              <Link href="#">
                <Camera size={20} />
              </Link>
            </div>
       

            </div>

            {/* Company */}
            <div>
              <h3 className="font-archivo text-[20px] font-bold text-white">
                Company
              </h3>

              <ul className="mt-7 space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-[Arial] text-[16px] text-white transition-colors duration-300 hover:text-[#D93433]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Solution */}
            <div>
              <h3 className="font-archivo text-[20px] font-bold text-white">
                Web Solution
              </h3>

              <ul className="mt-7 space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-[Arial] text-[16px] text-white transition-colors duration-300 hover:text-[#D93433]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-archivo text-[20px] font-bold text-white">
                Contact
              </h3>

              <ul className="mt-7 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.text} className="flex gap-4 items-start">
                      <Icon
                        size={18}
                        className="mt-1 shrink-0 text-[#D93433]"
                        // fill="currentColor" // Note: can be removed if icons look solid/blocked
                        strokeWidth={1.5}
                      />

                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-[Arial] text-[16px] leading-[1.45] text-white hover:text-[#D93433] transition-colors duration-200"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="font-[Arial] text-[16px] leading-[1.45] text-white">
                          {item.text}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </footer>

          <div className="mt-14 h-px w-full bg-white/50" />

          {/* Copyright */}
          <div className="mt-8 flex flex-col gap-4 text-center font-[Arial] text-[14px] text-white sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>©2026 Transparent. All rights reserved</p>

            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 sm:justify-end">
              <Link href="#" className="hover:text-[#D93433]">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#D93433]">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#D93433]">
                Cookies Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#D93433]">
                Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

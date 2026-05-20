import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,

} from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

const companyLinks = ["About", "Service", "portfolio", "contact", "Career", "Blog"];

const serviceLinks = [
  "Web Development",
  "UI/UX DESIGN",
  "Digital Marketing Services",
  "Branding & Communication",
  "Ecommerce Web Development",
  "Mobile App Development",
];

// const socialLinks = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Instagram, href: "#", label: "Instagram" },
// ];

const contactInfo = [
  {
    icon: MapPin,
    text: "C-30, Block-5, Gulshan-e-iqbal, Karachi.",
  },
  {
    icon: Phone,
    text: "021-34800227",
  },
  {
    icon: Mail,
    text: "info@alfonickinternational.com",
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
      className="bg-white px-4 py-8 sm:px-6 lg:px-8 xl:px-10"
    >
      <div className="relative mx-auto max-w-420 overflow-hidden rounded-[18px] bg-[#090000] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16 xl:px-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/hero-bg-img.png')" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(184,28,21,0.38),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.65),rgba(80,0,0,0.82)_45%,rgba(110,10,5,0.78))]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center font-archivo text-[17vw] font-bold leading-none tracking-tight text-[#B81C15]/12">
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
                  src="/images/alfonick-logo.png"
                  alt="Alfonick International"
                  width={190}
                  height={60}
                  className="h-auto w-37.5"
                />
              </Link>

              <p className="mt-6 max-w-67.5 font-[Arial] text-[15px] leading-[1.65] text-white">
                Lorem ipsum dolor sit amet, consectetur consectetur adipiscing
                consect adipiscing.
              </p>

              <p className="font-archivo mt-6 text-[11px] font-semibold tracking-[0.22em] text-white">
                Social Media
              </p>

              {/* <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="grid size-9 place-items-center rounded-full bg-white text-[#B81C15] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D93433] hover:text-white"
                    >
                      <Icon size={16} />
                    </Link>
                  );
                })}
              </div> */}
            </div>

            {/* Company */}
            <div>
              <h3 className="font-archivo text-[20px] font-bold text-white">
                Company
              </h3>

              <ul className="mt-7 space-y-4">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-[Arial] text-[16px] text-white transition-colors duration-300 hover:text-[#D93433]"
                    >
                      {link}
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
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-[Arial] text-[16px] text-white transition-colors duration-300 hover:text-[#D93433]"
                    >
                      {link}
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
                    <li key={item.text} className="flex gap-4">
                      <Icon
                        size={18}
                        className="mt-1 shrink-0 text-[#D93433]"
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                      <span className="font-[Arial] text-[16px] leading-[1.45] text-white">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </footer>

          <div className="mt-14 h-px w-full bg-white/50" />

          {/* Copyright */}
          <div className="mt-8 flex flex-col gap-4 text-center font-[Arial] text-[14px] text-white sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>©2024 Transparent. All rights reserved</p>

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
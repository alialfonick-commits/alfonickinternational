import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/sections/footer";
import TermsHero from "@/components/sections/terms-hero";

const page = () => {
  return (
    <div className="bg-white">
      <SiteHeader />

      <main>
        <TermsHero />

        <section className="md:pt-16 pt-8 md:pb-16 pb-8">
          <div className="container">
            <div className="max-w-275 mx-auto [&_h2]:font-archivo [&_h2]:text-[20px] [&_h2]:sm:text-[32px] [&_h2]:font-medium [&_h2]:text-[#222222] [&_h2]:mb-4 [&_p]:font-arial [&_p]:text-[15px] [&_p]:sm:text-[16px] [&_p]:leading-[1.8] [&_p]:text-[#555555]">

              <div className="mb-10">
                <h2>
                  Introduction
                </h2>

                <p>
                  Welcome to Alfonick International. These Terms and Conditions
                  govern your use of our website and services. By accessing or
                  using our website, you agree to comply with and be bound by
                  these Terms and Conditions. If you do not agree with these
                  terms, please do not use our website or services.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Use of Our Website
                </h2>

                <p>
                  You may use this website for lawful purposes only. You agree
                  not to use the website in any way that may damage, disable,
                  disrupt, or interfere with its operation, security, or
                  accessibility. You must not attempt to gain unauthorized
                  access to any part of the website, server, system, or network.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Our Services
                </h2>

                <p>
                  Alfonick International provides digital services including
                  website development, branding, design, digital marketing,
                  creative services, and related business solutions. The exact
                  scope, deliverables, timelines, and pricing for a project may
                  be defined separately in a proposal, quotation, contract, or
                  written agreement between Alfonick International and the
                  client.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Quotes and Project Agreements
                </h2>

                <p>
                  Any quotation or estimate provided by Alfonick International
                  is based on the information and project requirements available
                  at the time it is prepared. Additional work, revisions,
                  features, or changes outside the agreed project scope may
                  result in additional charges and may affect the project
                  timeline.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Payments
                </h2>

                <p>
                  Payment terms will be agreed upon before the commencement of
                  a project and may vary depending on the nature and scope of
                  the services. Clients are responsible for making payments
                  according to the agreed schedule. Delayed or outstanding
                  payments may result in the suspension or delay of services
                  until payment is received.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Client Responsibilities
                </h2>

                <p>
                  Clients are responsible for providing accurate information,
                  content, images, branding materials, approvals, and other
                  resources required to complete their project. Delays in
                  providing requested materials, information, or feedback may
                  affect the agreed project completion date.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Intellectual Property
                </h2>

                <p>
                  Unless otherwise agreed in writing, all original concepts,
                  designs, development work, documents, and other materials
                  created by Alfonick International remain our property until
                  all applicable project payments have been received. Once full
                  payment has been completed, ownership or usage rights will be
                  provided according to the terms agreed for the project.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Third-Party Services
                </h2>

                <p>
                  Our services or website may use or integrate third-party
                  platforms, software, plugins, hosting providers, payment
                  processors, APIs, or other external services. Alfonick
                  International is not responsible for interruptions, changes,
                  pricing, policies, security issues, or availability of
                  third-party services that are outside our control.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Website Content
                </h2>

                <p>
                  We make reasonable efforts to ensure that information
                  presented on our website is accurate and up to date. However,
                  we do not guarantee that all content will always be complete,
                  accurate, or error-free. We may update, modify, or remove
                  website content at any time without prior notice.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Limitation of Liability
                </h2>

                <p>
                  To the extent permitted by applicable law, Alfonick
                  International will not be liable for indirect, incidental,
                  consequential, or special losses arising from the use of our
                  website or services. We are also not responsible for losses
                  caused by circumstances outside our reasonable control,
                  including third-party systems, hosting failures, internet
                  outages, or external software.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Links to Third-Party Websites
                </h2>

                <p>
                  Our website may include links to external websites operated by
                  third parties. These links are provided for convenience or
                  informational purposes only. We do not control and are not
                  responsible for the content, security, availability, or
                  practices of third-party websites.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Termination of Services
                </h2>

                <p>
                  We reserve the right to suspend or terminate access to our
                  services if a client breaches agreed terms, fails to make
                  required payments, uses our services for unlawful activities,
                  or engages in conduct that may harm Alfonick International,
                  our systems, or third parties.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Changes to These Terms
                </h2>

                <p>
                  We may update these Terms and Conditions from time to time to
                  reflect changes to our services, business practices, or legal
                  requirements. Updated terms will be published on this page,
                  and continued use of our website after changes are posted
                  indicates acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2>
                  Contact Us
                </h2>

                <p>
                  If you have any questions regarding these Terms and
                  Conditions, our services, or your agreement with Alfonick
                  International, please contact us using the contact information
                  available on our website.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default page;
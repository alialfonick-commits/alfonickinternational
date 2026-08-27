
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/sections/footer";
import PrivacyHero from "@/components/sections/privacy-hero";

const page = () => {
  return (
    <div className="bg-white">
      <SiteHeader />

      <main>
        <PrivacyHero />

        <section className="md:pt-16 pt-8 md:pb-16 pb-8">
          <div className="container">
            <div className="max-w-275 mx-auto [&_h2]:font-archivo [&_h2]:text-[20px] [&_h2]:sm:text-[32px] [&_h2]:font-medium [&_h2]:text-[#222222] [&_h2]:mb-4 [&_p]:font-arial [&_p]:text-[15px] [&_p]:sm:text-[16px] [&_p]:leading-[1.8] [&_p]:text-[#555555]">

              <div className="mb-10">
                <h2>
                  Introduction
                </h2>

                <p>
                  Alfonick International respects your privacy and is committed
                  to protecting your personal information. This Privacy Policy
                  explains how we collect, use, store, and protect information
                  when you visit our website or use our services.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Information We Collect
                </h2>

                <p>
                  We may collect personal information that you voluntarily
                  provide to us, including your name, email address, phone
                  number, company information, and any details submitted
                  through our website forms.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  How We Use Your Information
                </h2>

                <p>
                  We use the information we collect to respond to enquiries,
                  provide our services, communicate with clients, improve our
                  website, understand how visitors use our website, and maintain
                  the security and performance of our digital services.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Cookies and Tracking Technologies
                </h2>

                <p>
                  Our website may use cookies and similar technologies to
                  improve your browsing experience, analyse website traffic,
                  remember preferences, and help us understand how our website
                  is being used.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Sharing Your Information
                </h2>

                <p>
                  We do not sell or rent your personal information. We may share
                  information with trusted service providers when necessary to
                  operate our website, deliver our services, or comply with
                  legal obligations.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Data Security
                </h2>

                <p>
                  We take reasonable technical and organisational measures to
                  protect your personal information against unauthorised access,
                  loss, misuse, alteration, or disclosure.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Third-Party Links
                </h2>

                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices, content, or
                  security of those websites. We recommend reviewing their
                  privacy policies before providing personal information.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Your Rights
                </h2>

                <p>
                  Depending on your location, you may have rights relating to
                  your personal information, including the right to request
                  access, correction, deletion, or restriction of certain
                  information we hold about you.
                </p>
              </div>

              <div className="mb-10">
                <h2>
                  Changes to This Privacy Policy
                </h2>

                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be published on this page and will become
                  effective when they are posted.
                </p>
              </div>

              <div>
                <h2>
                  Contact Us
                </h2>

                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your personal information, please contact Alfonick
                  International through the contact information available on
                  our website.
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
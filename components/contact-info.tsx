import Link from "next/link";
import { contactEmail } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";

export function ContactInfo() {
  return (
    <section className="bg-[#f0f0f0] px-6 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="space-y-10">
          {contactEmail ? (
            <div>
              <p className="mb-2 text-sm text-zinc-500">E-mail address</p>
              <Link
                href={`mailto:${contactEmail}`}
                className="text-lg font-normal text-[#0a0a0a] transition-opacity hover:opacity-70 md:text-xl"
              >
                {contactEmail}
              </Link>
            </div>
          ) : null}

          <div>
            <p className="mb-3 text-sm text-zinc-500">Follow us</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-[#0a0a0a] transition-opacity hover:opacity-60"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-[#0a0a0a] transition-opacity hover:opacity-60"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="text-[#0a0a0a] transition-opacity hover:opacity-60"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm text-zinc-500">Location</p>
            <h3 className="text-lg font-normal text-[#0a0a0a]">Nigeria</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Based in Nigeria, serving clients globally. We work remotely with
              businesses across Africa, Europe, North America, and beyond.
            </p>
          </div>

          <div className="rounded-[var(--brand-radius)] border border-[#0a0a0a]/10 bg-white p-6">
            <p className="text-sm leading-relaxed text-[#0a0a0a]/80">
              Ready to start your project? Fill out the form and we&apos;ll get
              back to you within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

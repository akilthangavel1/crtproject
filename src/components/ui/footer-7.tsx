import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Our Apps",
    links: [
      { name: "FocusPulse", href: "#apps" },
      { name: "ZenBudget", href: "#apps" },
      { name: "HabitVault", href: "#apps" },
      { name: "SwiftNotes", href: "#apps" },
      { name: "MindfulFlow", href: "#apps" },
    ],
  },
  {
    title: "Why NoAds24",
    links: [
      { name: "Our Mission", href: "#why-noads24" },
      { name: "Zero-Ad Guarantee", href: "#why-noads24" },
      { name: "Privacy First", href: "#why-noads24" },
      { name: "User Reviews", href: "#testimonials" },
    ],
  },
  {
    title: "SarasDynamics",
    links: [
      { name: "Enterprise AI", href: "#sarasdynamics" },
      { name: "IT Consulting", href: "#sarasdynamics" },
      { name: "Cloud Engineering", href: "#sarasdynamics" },
      { name: "Parent Company", href: "#sarasdynamics" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Meet the Team", href: "#team" },
      { name: "Blog & Articles", href: "#blog" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaTwitter size={18} />, href: "#", label: "Twitter" },
  { icon: <FaGithub size={18} />, href: "#", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
  { icon: <FaFacebook size={18} />, href: "#", label: "Facebook" },
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Security & Compliance", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "#",
    alt: "NoAds24 Logo",
    title: "NoAds24",
  },
  sections = defaultSections,
  description = "NoAds24 builds clean, fast, and completely free consumer apps with zero ads, zero trackers, and zero paywalls — sustainably backed by SarasDynamics Enterprise AI & IT Services.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 NoAds24 & SarasDynamics Inc. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="py-16 md:py-20 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          {/* Left Column: Brand & Description */}
          <div className="flex w-full flex-col gap-5 lg:max-w-sm lg:items-start">
            <a href={logo.url} className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-xs">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                {logo.title}
              </span>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-full px-3.5 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              Sustained by SarasDynamics B2B Revenue
            </div>
            <ul className="flex items-center space-x-5 text-slate-400 pt-2">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-slate-900 transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-3xl">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-xs uppercase tracking-wider text-slate-900">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-slate-900 transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-100 pt-8 text-xs font-medium text-slate-500 md:flex-row md:items-center">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-wrap gap-4 md:order-2 md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-slate-900 transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};


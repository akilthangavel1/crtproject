"use client";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: TestimonialItem[] = [
  {
    text: "FocusPulse is hands down the best Pomodoro timer I've ever used. Zero ads popping up mid-focus session and no sneaky subscriptions. Completely clean!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    name: "Sarah Jenkins",
    username: "@sarah_j",
    appName: "FocusPulse",
  },
  {
    text: "I was skeptical about ZenBudget being 100% free with no ad banners, but it truly is! My financial data stays entirely on my phone. Love NoAds24.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    name: "David Chen",
    username: "@davidchen_tech",
    appName: "ZenBudget",
  },
  {
    text: "HabitVault helped me build a 90-day streak. No paywalls to unlock basic graphs or annoying full-screen video ads. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    name: "Elena Rostova",
    username: "@elena_dev",
    appName: "HabitVault",
  },
  {
    text: "SwiftNotes opens instantly and saves everything locally in browser storage. Perfect for quick developer scratchpads without cloud lock-in or ads.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Marcus Vance",
    username: "@marcus_v",
    appName: "SwiftNotes",
  },
  {
    text: "MindfulFlow is so calming. No commercial interruptions during breathing exercises. Knowing SarasDynamics backs this makes total sense.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    name: "Aisha Patel",
    username: "@aisha_design",
    appName: "MindfulFlow",
  },
  {
    text: "PixelCraft gives me a clean vector canvas right in my browser. No export limits, no watermarks, and zero ad banners cluttering the sidebar.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    name: "Chloe Dubois",
    username: "@chloedubois",
    appName: "PixelCraft",
  },
  {
    text: "PulseReader is a dream for reading tech blogs without tracking cookies or affiliate popup spam. Unfiltered RSS at its finest!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    name: "Liam O'Connor",
    username: "@liam_oc",
    appName: "PulseReader",
  },
  {
    text: "AudioWave synthesizes peaceful white noise for my study sessions. It runs smoothly in the background without battery-draining ad scripts.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    name: "Maya Lin",
    username: "@mayalin_studio",
    appName: "AudioWave",
  },
  {
    text: "TaskSphere is my daily Kanban driver for side projects. Clean drag-and-drop, zero bloat, and complete respect for user privacy.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    name: "Kenji Takahashi",
    username: "@kenjit",
    appName: "TaskSphere",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white py-20 relative border-t border-slate-100">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="border border-slate-200 bg-slate-50 py-1 px-4 rounded-lg text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Testimonials
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-5">
            What our users say
          </h2>
          <p className="text-center mt-3 text-slate-600 text-sm sm:text-base">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
